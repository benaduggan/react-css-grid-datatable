import * as React from 'react';

import * as classnames from 'classnames';

import './DataTable.css';
import { DataTableConfig } from './interfaces';
import Cell from './Cell';
import Column from './models/Column';



class Body extends React.Component<DataTableConfig, any> {
  render() {
    let { data, columns } = this.props.config;
    return (
      <section className="DataTableBody">
        {
          data.map((row, idx) => {
            return this.createRow(row, columns, idx);
          })
        }
      </section>
    );
  }
  
  createRow(row: any, columns: Array<Column<any>>, key: any) {
    return (
      <section className="DataRow" key={key}>
        {
          columns.filter(col => col.visible).map((col, idx2) => 
            <col.componentType key={idx2} align={col.align} data={row[col.fieldName]} row={row} col={col}/>
          )
        }
      </section>
    );
  }
}

export default Body;
