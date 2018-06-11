type alignment = 'left' | 'right' | 'center';

interface DataTableConfig {
  config: IDataTableProps;
}

interface IDataTableProps {
  data: Array<any>;
  columns: Array<IDataTableColumn>;
}

interface  IDataTableColumn {
  displayName: string;
  visible: boolean;
  align: alignment;
  fieldName: string;
  componentType: any;
}

interface ICell {
  align: alignment;
  data: any;
}



export { DataTableConfig, IDataTableProps, IDataTableColumn, ICell, alignment };
