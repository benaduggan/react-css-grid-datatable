import * as React from 'react';

import * as classnames from 'classnames';

import './DataTable.css';
import { IRowConfig, IDataTableProps } from './interfaces';
import Cell from './Cell';
import Column from './models/Column';
import Row from './models/Row';

interface IBodyProps<T> {
  config: IDataTableProps<T>;
  rows: Array<T>;
}

class Body<T> extends React.Component<IBodyProps<T>, any> {
  render() {
    let rows = this.props.rows;
    let { columns } = this.props.config;
    return (
      <section className="DataTableBody">
        {
          rows.map((row, idx) => {
            return this.createRow(row, columns, idx);
          })
        }
      </section>
    );
  }
  
  createRow(row: any, columns: Array<Column<any>>, key: any) {
    let rowModel = new Row(this.props.config.configuration.row);
    return (
      <section className="DataRow" key={key} onClick={() => rowModel.OnRowClick(row)}>
        {
          columns.filter(col => col.visible).map((col, idx2) => 
            <col.CellComponent key={idx2} align={col.align} data={row[col.fieldName]} row={row} col={col}/>
          )
        }
      </section>
    );
  }
}

export default Body;
