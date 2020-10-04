import { IRowConfig } from '../interfaces';
import Cell from '../Cell';
import { DEFAULT_ROW_OPTIONS } from './TableSettings';

export default class Header<T> implements IRowConfig<T> {
  public OnRowClick: (row: T) => any;

  constructor(options: IRowConfig<T>) {
    Object.assign(this, { ...DEFAULT_ROW_OPTIONS, ...options });
  }
}
