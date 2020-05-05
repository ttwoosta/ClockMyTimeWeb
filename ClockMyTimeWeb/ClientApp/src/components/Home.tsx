import * as React from 'react';
import { connect } from 'react-redux';
import { createStore, Action } from 'redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Utils from '../utils';
import Spinner from "./Spinner";
import './homeStyles.css';
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Table } from 'reactstrap';
import Clock from './Clock';

class Home extends React.Component {

  state = {
    event: "initial",
    date: new Date(),
    clockin: false
  };

  constructor(props: Readonly<{}>) {
    super(props);

    this.onTryAgainButtonClick = this.onTryAgainButtonClick.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onClickDate = this.onClickDate.bind(this);
    this.onClockInButtonClick = this.onClockInButtonClick.bind(this);
    this.onClockOutButtonClick = this.onClockOutButtonClick.bind(this);
  }

  // This method is called when the component is first added to the document
  public componentDidMount() {

      const self = this;
      self.setState({ event: "beginGetProfile" });

      const transport = Utils.createApiClient();

      transport.get('/accounts/profile/')
      .then(function (response: any) {
          console.log(response);

          Utils.setUsername(response.data["username"]);
          Utils.setEmail(response.data["email"]);
          Utils.setFullName(response.data[Utils.kFullname])
          self.setState({ event: "endedGetProfile" });
      })
      .catch(function (error: any) {
          console.error(error);

          if (error.response && error.response.status === 401)
            Utils.removeCreads();

          self.setState({ event: "failGetProfile" });
          window.location.pathname = "/login";
      })

  }

  handleDateChange(date: any) {
    this.setState({date});
  }

    m_knownDates = [2, 3, 4, 6,7];

    onClickDate(date: Date) {
        
        if (this.m_knownDates.indexOf(date.getDate()) > 0)
            return 
    }

  getTileClassName(date, view) : string {
    if (view === 'month') {
      if (date.getDay() === 3 )
        return 'my_class';
    }
    return null;
  }

  dateToDateString(d: Date) {
    // https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

    let dateValue = `${ye}-${mo}-${da}`;
    return dateValue;
  }

  dateToTimeString(d: Date) {
    var formatter = new Intl.DateTimeFormat('en-us', { hour: 'numeric', minute: 'numeric', hour12: false});
    let timeValue = formatter.format(d);
    return timeValue;
  }

  onTryAgainButtonClick(e) {
    this.setState({event: "endedGetProfile"})
  }

  onClockInButtonClick(e) {
    this.setState({"clockin": true});
  }

  onClockOutButtonClick(e) {
      this.setState({"clockin": false});
  }

  render() {

    switch(this.state.event) {
      case "beginGetProfile":

        return (
          <div className="spinner-parent">
            <Spinner></Spinner>
          </div>
        );

        break;

      case "endedGetProfile":

        let username = Utils.getFullName();

        return (
          <div className="home-content">
            <h1>Welcome {username} to Clock My Time</h1>
            <p>Please select a date a clock in</p>

            <Calendar className="calendar" onClickDay={this.onClickDate} onChange={this.handleDateChange} value={this.state.date}
            tileClassName={({ date, view }) => {
                if (view === 'month') {
                    if (this.m_knownDates.indexOf(date.getDate()) > 0) {
                        return 'cal-tile-highlight';
                    }
                }
                return null;
              }} />
            {this.renderButtonsGroup()}
              
          </div>
        );

        break;

      case "failGetProfile":
        return (<h1>Unauthorize</h1>);
        break;

    }

    return (
      <div className="spinner-parent">
        <Spinner></Spinner>
      </div>
    );

  }

  renderButtonsGroup() {
      if(!this.state.clockin) {
        return (<div className="buttons-container">
            <Button color="primary" onClick={this.onClockInButtonClick}>Clock In</Button>
        </div>);
      }
      else {
        return (<div className="buttons-container">
            
            <Clock />
            <Button color="danger" onClick={this.onClockOutButtonClick}>Clock Out</Button>
        </div>);
      }
  }
}

export default connect()(Home);
