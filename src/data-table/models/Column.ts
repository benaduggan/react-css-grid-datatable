import { IDataTableColumn, alignment } from '../interfaces';
import Cell from '../Cell';
import { DEFAULT_COLUMN_OPTIONS } from './TableSettings';

export default class Column<T> implements IDataTableColumn {
  public visible: boolean;
  public align: alignment;
  public CellComponent: any;

  constructor(public displayName: string, public fieldName: Extract<keyof T, string>, options: Partial<IDataTableColumn>) {
    Object.assign(this, {...DEFAULT_COLUMN_OPTIONS, displayName, fieldName, ...options});
  }
}