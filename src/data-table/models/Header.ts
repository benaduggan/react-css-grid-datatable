import { IDataTableColumn, alignment, IHeaderConfig } from '../interfaces';
import Cell from '../Cell';

let defaultOptions: IHeaderConfig = {
  visible: true,
  align: 'left',
  CellComponent: Cell
};

export default class Header<T> implements IHeaderConfig {
  public hideTableHeader: boolean;
  public align: alignment;
  public CellComponent: any;

  constructor(public displayName: string, public fieldName: Extract<keyof T, string>, options: IHeaderConfig = {}) {
    Object.assign(this, {...defaultOptions, ...options});
  }
}