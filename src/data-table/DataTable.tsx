import * as React from 'react';

import './DataTable.css';
import Header from './Header';
import Footer from './Footer';
import { DataTableConfig } from './interfaces';
import Body from './Body';

// let bindings = {
//   canFilterActives: '=',
//   disablePaging: '=',
//   currentPage: '=',
//   enableColumnReorder: '=',
//   enableGrouping: '=',
//   enableSort: '=',
//   hasMenu: '=',
//   hideTableHeader: '=',
//   isLoading: '=',
//   maxPage: '=',
//   menuName: '=',
//   nextPage: '&',
//   pageSize: '=',
//   prevPage: '&',
//   removableRows: '=',
//   showColumnOptions: '=',
  
//   tableFilter: '=',
//   totalCount: '=',
  
//   tableColumns: '=',
//   tableData: '=',
  
//   dropFunction: '&',
//   groupByChanged: '&',
//   rowClick: '&',
//   sortCallback: '&',
// };


class DataTable extends React.Component<DataTableConfig, any> {
  render() {
    // let { data, columns } = this.props.config;
    return (
      <section className="DataTableRoot">
        <Header config={this.props.config} />
        <Body config={this.props.config} />
        <Footer />
      </section>
    );
  }
}

export default DataTable;
