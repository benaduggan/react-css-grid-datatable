import { IDataTableColumn, alignment } from '../interfaces';
import Cell from '../Cell';

interface IColumnOptions {
  visible?: boolean;
  align?: alignment;
  componentType?: any;
}

let defaultOptions: IColumnOptions = {
  visible: true,
  align: 'left',
  componentType: Cell
};

export default class Column<T> implements IDataTableColumn {
  public visible: boolean;
  public align: alignment;
  public componentType: any;

  constructor(public displayName: string, public fieldName: Extract<keyof T, string>, options: IColumnOptions = {}) {
    Object.assign(this, {...defaultOptions, ...options});
  }
}