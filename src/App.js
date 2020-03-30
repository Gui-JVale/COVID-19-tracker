import React from 'react';
import { connect } from 'react-redux';
import csv from 'csvtojson';

import { setInitialData, setLoadingState } from './redux/data/data.actions';
import { getCurrentDate } from './redux/time/time.actions';
import { selectCurrentDate, selectYesterdayDate } from './redux/time/time.selectors';

import './App.sass';

import Header from './components/header/header.component';
import Main from './components/main/main.component';
import { selectInitialData } from './redux/data/data.selectors';


class App extends React.Component {

  // Fetch Data and convert to json
  componentDidMount() {
    const { setInitialData, currentDate } = this.props;
    const endpoint = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${currentDate}.csv`;
    fetch(endpoint) 
      .then(response => response.text())
      .then(data => {
        csv()
          .fromString(data)
          .then(jsonObj => setInitialData(jsonObj))
      })
      .catch(error => console.log("Failed fetch", error))
  }

  render() {
    const { initialData, setLoadingState } = this.props;
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialData: selectInitialData(state),
  currentDate: selectCurrentDate(state),
  yesterdayDate: selectYesterdayDate(state)
});

const mapDispatchToProps = dispatch => ({
  setInitialData: data => dispatch(setInitialData(data)),
  getCurrentDate: () => dispatch(getCurrentDate()),
  setLoadingState: value => dispatch(setLoadingState(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
