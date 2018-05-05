import * as React from 'react';
import './App.css';
import DataTable from './data-table/DataTable';
import Column from './data-table/models/Column';

const logo = require('./logo.svg');

interface Thing {
  a: string;
  b: string;
}

let dataTableConfig = {
  columns: [
    new Column<Thing>('col1', 'a', {align: 'left'}),
    new Column<Thing>('col2', 'b', {align: 'right'}),
    // new Column('col2', 'a', {align: 'right'}),
    // new Column('col3', 'a'),
    // new Column('col4', 'a'),
    // new Column('col5', 'a'),
  ],
  data: [
    {a: 'a1', b: 'b'} as Thing,
    {a: 'a2', b: 'd'} as Thing,
  ],
  configuration: {

  }
};


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload. hello
        </p>
        <DataTable config={dataTableConfig} />
      </div>
    );
  }
}

export default App;
