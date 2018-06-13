export type alignment = 'left' | 'right' | 'center';

export interface DataTableConfig<T> {
  config: IDataTableProps<T>;
}

export interface IDataTableProps<T> {
  data: Array<T>;
  columns: Array<IDataTableColumn>;
  configuration: IDataTableConfiguration<T>;
}

export interface IDataTableConfiguration<T> {
  header?: IHeaderConfig;
  row?: IRowConfig<T>;
  pagination?: IPaginationConfig;
}

export interface IPaginationConfig {
  enabled?: boolean;
  pageSize?: number;
}

export interface IRowConfig<T> {
  OnRowClick?: (row: T) => any;
}

export interface IHeaderConfig {
  visible?: boolean;
  align?: alignment;
  CellComponent?: any;
}

export interface IDataTableColumn {
  displayName: string;
  visible: boolean;
  align: alignment;
  fieldName: string;
  CellComponent: any;
}

export interface ICell {
  align: alignment;
  data: any;
}