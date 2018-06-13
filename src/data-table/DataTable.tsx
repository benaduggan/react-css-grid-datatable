import * as React from 'react';

import './DataTable.css';
import Header from './Header';
import { DataTableConfig } from './interfaces';
import Body from './Body';
import Paginator from './Paginator';

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


class DataTable<T> extends React.Component<DataTableConfig<T>, any> {
  public paginator: Paginator<T>;
  constructor (props: DataTableConfig<T>) {
    super(props);
    
    this.paginator = new Paginator<T>(this.props.config.configuration.pagination, this.props.config.data);

    this.state = {
      currentPage: this.paginator.currentPage()
    };

    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleNextPage() {
    this.paginator.nextPage();
  }
  
  handlePreviousPage() {
    this.paginator.previousPage();
  }
  
  handlePageClick(page: number) {
    this.paginator.setPage(page + 1);
  }

  updatePage(handler: () => any) {
    handler();

    this.setState({
      currentPage: this.paginator.currentPage()
    });
  }

  render() {
    return (
      <section className="DataTableRoot">
        <Header config={this.props.config} />
        <Body rows={this.state.currentPage} config={this.props.config} />

        <section className="DataTableFooter">
          <button disabled={!this.paginator.CanSetPreviousPage} onClick={() => this.updatePage(this.handlePreviousPage)}>Previous</button>
          <section>
            {
              Array.apply(null, { length: this.paginator.NumberOfPages })
                   .map((num: any, key: any) => 
                      <button onClick={() => this.updatePage(() => this.handlePageClick(key))} key={key}>{key + 1}</button>)
            }
          </section>
          <button disabled={!this.paginator.CanSetNextPage} onClick={() => this.updatePage(this.handleNextPage)}>Next</button>
        </section>
      </section>
    );
  }
}

export default DataTable;
