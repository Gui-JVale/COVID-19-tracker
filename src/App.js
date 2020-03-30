import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchDataStartAsync } from './redux/data/data.actions';
import { getCurrentDate } from './redux/time/time.actions';
import { selectCurrentDate, selectYesterdayDate } from './redux/time/time.selectors';

import './App.sass';

import Header from './components/header/header.component';
import Main from './components/main/main.component';


class App extends React.Component {

  // Fetch Data and convert to json
  componentDidMount() {
    const { fetchDataStartAsync, currentDate } = this.props;
    fetchDataStartAsync(currentDate);
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
  fetchDataStartAsync: currentDate => dispatch(fetchDataStartAsync(currentDate)),
  getCurrentDate: () => dispatch(getCurrentDate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
