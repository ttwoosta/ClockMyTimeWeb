import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import MessageBoard from './components/MessageBoard';
import Login from './components/Login';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={MessageBoard} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/login' component={Login} />
    </Layout>
);
