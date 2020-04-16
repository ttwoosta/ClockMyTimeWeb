import * as React from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Home = () => (
  <div className="home-content">
    <h1>Hello, world!</h1>
    <p>Welcome to your new single-page application, built with:</p>

        <Calendar className="calendar" />
  </div>
);

export default connect()(Home);
