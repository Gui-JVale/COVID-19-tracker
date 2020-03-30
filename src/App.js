import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchDataStart } from './redux/data/data.actions';
import { getCurrentDate } from './redux/time/time.actions';
import { selectCurrentDate, selectYesterdayDate } from './redux/time/time.selectors';

import './App.sass';

import Header from './components/header/header.component';
import Main from './components/main/main.component';


class App extends React.Component {

  // Fetch Data and convert to json
  componentDidMount() {
    const { fetchDataStart, currentDate } = this.props;
    fetchDataStart();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentDate: selectCurrentDate,
  yesterdayDate: selectYesterdayDate
});

const mapDispatchToProps = dispatch => ({
  fetchDataStart: () => dispatch(fetchDataStart()),
  getCurrentDate: () => dispatch(getCurrentDate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
