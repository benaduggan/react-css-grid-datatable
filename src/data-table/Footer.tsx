import * as React from 'react';

import './DataTable.css';

interface IFooterProps {
}

class Footer extends React.Component<IFooterProps, any> {
  render() {
    return (
      <section className="DataTableFooter">
        <p>Footer</p>
      </section>
    );
  }
}

export default Footer;
