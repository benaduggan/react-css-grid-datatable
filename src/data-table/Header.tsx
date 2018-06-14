import * as React from 'react';

import './DataTable.css';
import { DataTableConfig, IDataTableProps } from './interfaces';
import Cell from './Cell';
import HeaderCell from './HeaderCell';

// interface IHeaderProps {
//   enableColumnReorder?: boolean;
//   enableSort?: boolean;
//   ignoreGroupOrder?: boolean;

//   sortCallback?: boolean;

//   hasMenu?: boolean;
//   menuName?: boolean;

//   showColumnOptions?: boolean;
//   tableGroup?: boolean;
//   tableGroupedData?: boolean;
//   groupByChanged?: Function;
// }

interface HeaderProps<T> {
  config: IDataTableProps<T>;
}

class Header<T> extends React.Component<HeaderProps<T>, any> {
  render() {
    let { columns } = this.props.config;
    let sortCallback = this.props.config.configuration.header.SortCallback;
    return (
      <section className="DataTableHeader">
        {
          columns.filter(col => col.visible).map((col, idx) => <HeaderCell OnClick={sortCallback} key={idx} align={col.align} data={col.displayName} />)
        }
      </section>
    );
  }
}

export default Header;
