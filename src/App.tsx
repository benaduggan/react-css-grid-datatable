import * as React from 'react';
import './App.css';
import DataTable from './data-table/DataTable';
import Column from './data-table/models/Column';
import Cell from './data-table/Cell';

const logo = require('./logo.svg');

interface IrfList {
  irfNumber: string;
  staffName: string;
  numberOfVictims: number;
  numberOfTraffickers: number;
  datetimeOfInterception: string;
  datetimeEnteredIntoSystem: string;
  viewUrl: string;
  editUrl: string;
  deleteUrl: string;
  id: number;
}

const TestCell = (props: any) => {
  console.log(props);
  return (
    <div className="DataCell">
      <a href={props.row.viewUrl}>View</a>
      <a href={props.row.editUrl}>Edit</a>
      <a href={props.row.deleteUrl}>Delete</a>
    </div>
  );
};

let dataTableConfig = {
  columns: [
    new Column<IrfList>('IRF Number', 'irfNumber', {align: 'left'}),
    new Column<IrfList>('Staff Name', 'staffName', {align: 'left'}),
    new Column<IrfList>('# of Victims', 'numberOfVictims', {align: 'center'}),
    new Column<IrfList>('# of Traffickers', 'numberOfTraffickers', {align: 'center'}),
    new Column<IrfList>('Time of Interception', 'datetimeOfInterception', {align: 'right'}),
    new Column<IrfList>('Time Entered Into System', 'datetimeEnteredIntoSystem', {align: 'right'}),
    new Column<any>('Actions', '', {align: 'center', componentType: TestCell}),
  ],
  data: [
    {
        'viewUrl': 'https://staging.dreamsuite.org/data-entry/irfs/279/',
        'editUrl': 'https://staging.dreamsuite.org/data-entry/irfs/update/279/',
        'deleteUrl': 'https://staging.dreamsuite.org/api/irf/279/',
        'id': 279,
        'irfNumber': 'DNG048',
        'staffName': 'Maya B.K',
        'numberOfVictims': 1,
        'numberOfTraffickers': 1,
        'datetimeOfInterception': '2014-05-11T12:00:00+05:45',
        'datetimeEnteredIntoSystem': '2014-09-16T14:07:09.921000+05:45',
    },
    {
        'viewUrl': 'https://staging.dreamsuite.org/data-entry/irfs/112/',
        'editUrl': 'https://staging.dreamsuite.org/data-entry/irfs/update/112/',
        'deleteUrl': 'https://staging.dreamsuite.org/api/irf/112/',
        'id': 112,
        'irfNumber': 'PRS114',
        'staffName': 'Punam Tamang',
        'numberOfVictims': 3,
        'numberOfTraffickers': 3,
        'datetimeOfInterception': '2014-05-16T07:30:00+05:45',
        'datetimeEnteredIntoSystem': '2014-07-22T11:12:48.679000+05:45',
    },
    {
        'viewUrl': 'https://staging.dreamsuite.org/data-entry/irfs/4/',
        'editUrl': 'https://staging.dreamsuite.org/data-entry/irfs/update/4/',
        'deleteUrl': 'https://staging.dreamsuite.org/api/irf/4/',
        'id': 4,
        'irfNumber': 'BHW515',
        'staffName': 'Pabitra, Anil',
        'numberOfVictims': 1,
        'numberOfTraffickers': 1,
        'datetimeOfInterception': '2014-05-25T15:00:00+05:45',
        'datetimeEnteredIntoSystem': '2014-06-17T11:34:58.601000+05:45',
    },
    {
        'viewUrl': 'https://staging.dreamsuite.org/data-entry/irfs/2/',
        'editUrl': 'https://staging.dreamsuite.org/data-entry/irfs/update/2/',
        'deleteUrl': 'https://staging.dreamsuite.org/api/irf/2/',
        'id': 2,
        'irfNumber': 'BHW517',
        'staffName': 'Pabitra, Anil',
        'numberOfVictims': 2,
        'numberOfTraffickers': 2,
        'datetimeOfInterception': '2014-05-26T01:30:00+05:45',
        'datetimeEnteredIntoSystem': '2014-06-16T12:14:12.152000+05:45',
    },
    {
        'viewUrl': 'https://staging.dreamsuite.org/data-entry/irfs/1/',
        'editUrl': 'https://staging.dreamsuite.org/data-entry/irfs/update/1/',
        'deleteUrl': 'https://staging.dreamsuite.org/api/irf/1/',
        'id': 1,
        'irfNumber': 'BHW516',
        'staffName': 'Ashish',
        'numberOfVictims': 1,
        'numberOfTraffickers': 1,
        'datetimeOfInterception': '2014-05-26T11:31:00+05:45',
        'datetimeEnteredIntoSystem': '2014-06-16T11:42:56.170000+05:45',
    },
    {
        'viewUrl': 'https://staging.dreamsuite.org/data-entry/irfs/27/',
        'editUrl': 'https://staging.dreamsuite.org/data-entry/irfs/update/27/',
        'deleteUrl': 'https://staging.dreamsuite.org/api/irf/27/',
        'id': 27,
        'irfNumber': 'LHN052',
        'staffName': 'Shanta Thapa',
        'numberOfVictims': 1,
        'numberOfTraffickers': 1,
        'datetimeOfInterception': '2014-05-26T12:00:00+05:45',
        'datetimeEnteredIntoSystem': '2014-06-24T11:55:46.052000+05:45',
    },
    {
        'viewUrl': 'https://staging.dreamsuite.org/data-entry/irfs/28/',
        'editUrl': 'https://staging.dreamsuite.org/data-entry/irfs/update/28/',
        'deleteUrl': 'https://staging.dreamsuite.org/api/irf/28/',
        'id': 28,
        'irfNumber': 'LHN053',
        'staffName': 'Bina Roka',
        'numberOfVictims': 1,
        'numberOfTraffickers': 2,
        'datetimeOfInterception': '2014-05-26T13:00:00+05:45',
        'datetimeEnteredIntoSystem': '2014-06-24T12:03:52.227000+05:45',
    }
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
