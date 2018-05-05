import * as React from 'react';

import * as classnames from 'classnames';

import './DataTable.css';
import { DataTableConfig, IDataTableColumn } from './interfaces';
import Cell from './Cell';



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
  
  createRow(row: any, columns: Array<IDataTableColumn>, key: any) {
    return (
      <section className="DataRow" key={key}>
        {
          columns.filter(col => col.visible).map((col, idx2) => <Cell key={idx2} align={col.align} data={row[col.fieldName]}/>)
        }
      </section>
    );
  }
}

export default Body;
