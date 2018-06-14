import { IRowConfig, DataTableConfig, IDataTableProps, IHeaderConfig, IDataTableConfiguration, IPaginationConfig, IDataTableColumn } from '../interfaces';
import Cell from '../Cell';
import * as _ from 'lodash';

export const DEFAULT_COLUMN_OPTIONS: IDataTableColumn = {
    displayName: '',
    fieldName: '',
    visible: true,
    align: 'left',
    CellComponent: Cell
};

export const DEFAULT_HEADER_OPTIONS: IHeaderConfig<any> = {
  visible: true,
  align: 'left',
  CellComponent: Cell,
  SortCallback: () => {}
};

export const DEFAULT_PAGINATION_OPTIONS: IPaginationConfig = {
    enabled: true,
    pageSize: 5,
};

export const DEFAULT_ROW_OPTIONS: IRowConfig<any> = {
  OnRowClick: () => {}
};

export const DEFAULT_TABLE_OPTIONS: IDataTableProps<any> = {
    columns: [],
    data: [],
    configuration: {
        header: DEFAULT_HEADER_OPTIONS,
        pagination: DEFAULT_PAGINATION_OPTIONS,
        row: DEFAULT_ROW_OPTIONS,
    }
};

export default class TableSettings<T> implements IDataTableProps<T> {
    public data: T[];
    public columns: any[];
    public configuration: IDataTableConfiguration<T>;

  constructor(options: DataTableConfig<T>) {
    let mergedSettings = _.merge(DEFAULT_TABLE_OPTIONS, options.config);
    Object.assign(this, {...mergedSettings});
  }
}