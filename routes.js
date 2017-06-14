
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app/components/app';


import About from "./app/components/About";
import HomePage from "./app/components/HomePage";
import PortfolioPage from "./app/components/Portfolio";
import error404 from "./app/components/error404";

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
    <Route path="about" component={About} />
    <Route path="portfolio" component={PortfolioPage} />
    <Route path="*" component={error404}/>
    </Route>
  </Router>
);


export default Routes;
