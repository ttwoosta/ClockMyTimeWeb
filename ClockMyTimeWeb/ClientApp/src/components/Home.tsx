import * as React from 'react';
import { connect } from 'react-redux';
import { createStore, Action } from 'redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Utils from '../utils';
import Spinner from "./Spinner";

class Home extends React.Component {

  username: string = '';

  state = {
    event: "initial"
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
          self.setState({ event: "failGetProfile" });
          window.location.pathname = "/login";
      })
  }

  render() {

    switch(this.state.event) {
      case "beginGetProfile":

        return (
          <Spinner></Spinner>
        );

        break;

      case "endedGetProfile":
        let username = Utils.getFullName();
        
        return (
          <div className="home-content">
            <h1>Welcome {username} to Clock My Time</h1>
            <p>Please select a date a clock in</p>
    
            <Calendar className="calendar" />
          </div>
        );

        break;

      case "failGetProfile":
        return (<h1>Unauthorize</h1>);
        break;
    }

    return "";

  }
}

export default connect()(Home);
