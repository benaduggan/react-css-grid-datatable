import { IPaginationConfig } from './interfaces';


let defaultOptions: IPaginationConfig = {
    enabled: false,
    pageSize: 5,
};
  

export default class Paginator<T> {
    public cursor: number;
    public pageSize: number;

    constructor (options: IPaginationConfig | undefined, public data: Array<T>) {
        this.cursor = 0;
        Object.assign(this, {...defaultOptions, ...options});

        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

    currentPage(): Array<T> {
        return this.data.slice(this.cursor, this.cursor + this.pageSize);
    }

    nextPage(): void {
        this.cursor += this.pageSize;
    }
    
    previousPage(): void {
        this.cursor -= this.pageSize;
    }

    setPage(page: number): void {
        this.cursor = this.pageSize * page - this.pageSize;
    }

    get CanSetPreviousPage(): boolean {
        return this.cursor !== 0;
    }

    get CanSetNextPage(): boolean {
        return this.cursor + this.pageSize < this.data.length;
    }

    get NumberOfPages(): number {
        return Math.ceil(this.data.length / this.pageSize);
    }
}