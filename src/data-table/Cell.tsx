import * as React from 'react';

import './DataTable.css';
import { DataTableConfig, ICell } from './interfaces';
import * as classnames from 'classnames';

class Cell extends React.Component<ICell, any> {
  render() {
    let { align, data } = this.props;
    let condtionalClasses = {
      'justify-left': align === 'left',
      'justify-right': align === 'right',
    };

    let classes = classnames('DataCell', condtionalClasses);
    return <section className={classes}>{data}</section>;
  }
}

export default Cell;
