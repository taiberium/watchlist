// IMPORT PACKAGE REFERENCES

import React, {Fragment} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Header} from '../Header/Header';
import {HomePage} from '../pages/HomePage';
import {AboutPage} from '../pages/AboutPage';
import {Securities} from '../pages/Securities';
import {WatchList} from "../pages/Watchlist";

// IMPORT PROJECT REFERENCES

// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
      <Fragment>
        <Header/>
        <Switch>
          <Route path='/' component={HomePage} exact={true}/>
          <Route path='/securities' component={Securities}/>
          <Route path='/watchlist' component={WatchList}/>
          <Route path='/about' component={AboutPage}/>
          <Redirect to="/"/>
        </Switch>
      </Fragment>
    </BrowserRouter>
);