import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import MessageBoard from './components/MessageBoard';
import LoginForm from './components/Login';
import Logout from './components/Logout';

import './custom.css'
import Utils from './utils';
import MyPay from './components/MyPay';
import NewTime from './components/NewTime';

export default () => (
    <Layout isLoggedIn={Utils.isLogginIn()}>
        <Route exact path='/' component={Home} />
        <Route path='/message-board' component={MessageBoard} />
        <Route path='/my-pay' component={MyPay} />
        <Route path='/login' component={LoginForm} />
        <Route path='/logout' component={Logout} />
        <Route path='/new-time' component={NewTime} />
    </Layout>
);
