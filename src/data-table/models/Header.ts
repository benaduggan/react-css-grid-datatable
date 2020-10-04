import { IDataTableColumn, alignment, IHeaderConfig } from '../interfaces';
import Cell from '../Cell';
import { DEFAULT_HEADER_OPTIONS } from './TableSettings';

export default class Header<T> implements IHeaderConfig<T> {
  public visible: boolean;
  public SortCallback: (fieldname: keyof Extract<T, string>, data: T[]) => void;
  public align: alignment;
  public CellComponent: any;

  constructor(
    public displayName: string,
    public fieldName: Extract<keyof T, string>,
    options: IHeaderConfig<T>,
  ) {
    Object.assign(this, { ...DEFAULT_HEADER_OPTIONS, ...options });
  }
}
