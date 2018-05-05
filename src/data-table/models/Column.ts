import { IDataTableColumn, alignment } from '../interfaces';

interface IColumnOptions {
  visible?: boolean;
  align?: alignment;
}

let defaultOptions: IColumnOptions = {
  visible: true,
  align: 'left',
};

export default class Column<T> implements IDataTableColumn {
  public visible: boolean;
  public align: alignment;

  constructor(public displayName: string, public fieldName: keyof T, options: IColumnOptions = {}) {
    Object.assign(this, {...defaultOptions, ...options});
  }
}
