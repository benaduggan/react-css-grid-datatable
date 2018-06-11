import * as React from 'react';

import './DataTable.css';
import { DataTableConfig, ICell } from './interfaces';
import * as classnames from 'classnames';
import Cell from './Cell';

class HeaderCell extends Cell {
  render() {
    let { align, data } = this.props;
    let condtionalClasses = {
      'justify-left': align === 'left',
      'justify-right': align === 'right'
    };
    
    let classes = classnames('HeaderDataCell', condtionalClasses);
    return (
      <section className={classes}>
        {data}
      </section>
    );
  }
}

export default HeaderCell;
