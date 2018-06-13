import { IRowConfig } from '../interfaces';
import Cell from '../Cell';

let defaultOptions: IRowConfig<any> = {
    OnRowClick: () => {},
};

export default class Header<T> implements IRowConfig<T> {
    public OnRowClick: (row: T) => any;

  constructor(options: IRowConfig<T> = {}) {
    Object.assign(this, {...defaultOptions, ...options});
  }
}