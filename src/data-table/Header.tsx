import * as React from 'react';

import './DataTable.css';
import { DataTableConfig } from './interfaces';
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

class Header<T> extends React.Component<DataTableConfig<T>, any> {
  render() {
    let { columns } = this.props.config;
    return (
      <section className="DataTableHeader">
        {
          columns.filter(col => col.visible).map((col, idx) => <HeaderCell key={idx} align={col.align} data={col.displayName} />)
        }
      </section>
    );
  }
}

export default Header;
