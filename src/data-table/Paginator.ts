import { IPaginationConfig } from './interfaces';
import { DEFAULT_PAGINATION_OPTIONS } from './models/TableSettings';


export default class Paginator<T> {
    public cursor: number;
    public pageSize: number;

    constructor (options: IPaginationConfig | undefined, public data: Array<T>) {
        this.cursor = 0;
        Object.assign(this, {...DEFAULT_PAGINATION_OPTIONS, ...options});

        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

    currentPage(): Array<T> {
        return this.data.slice(this.cursor, this.cursor + this.pageSize);
    }

    get CanSetNextPage(): boolean {
        return this.cursor + this.pageSize < this.data.length;
    }

    nextPage(): void {
        this.cursor += this.pageSize;
    }

    get CanSetPreviousPage(): boolean {
        return this.cursor !== 0;
    }
    
    previousPage(): void {
        this.cursor -= this.pageSize;
    }
    
    setPage(page: number): void {
        this.cursor = this.pageSize * page - this.pageSize;
    }

    get NumberOfPages(): number {
        return Math.ceil(this.data.length / this.pageSize);
    }
}