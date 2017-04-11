import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/home-container';
import LoginPage from './components/login/login-container';
import SurveyPage from './components/survey/survey-container';
import NotFoundPage from './components/not-found/not-found-page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="survey/:id" component={SurveyPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
