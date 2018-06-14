export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    // tslint:disable-next-line:no-shadowed-variable
    : T[P] extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : DeepPartial<T[P]>
};

export type alignment = 'left' | 'right' | 'center';

export interface DataTableConfig<T> {
  config: DeepPartial<IDataTableProps<T>>;
}

export interface IDataTableProps<T> {
  data: Array<T>;
  columns: Array<IDataTableColumn>;
  configuration: IDataTableConfiguration<T>;
}

export interface IDataTableConfiguration<T> {
  header: IHeaderConfig<T>;
  row: IRowConfig<T>;
  pagination: IPaginationConfig;
}

export interface IPaginationConfig {
  enabled: boolean;
  pageSize: number;
}

export interface IRowConfig<T> {
  OnRowClick: (row: T) => any;
}

export interface IHeaderConfig<T> {
  visible: boolean;
  align: alignment;
  CellComponent: any;
  SortCallback: (fieldname: keyof Extract<T, string>, data: Array<T>) => void;
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
  OnClick: any;
}