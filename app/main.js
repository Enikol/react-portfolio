import React from 'react';
import { Switch, Route } from 'react-router';
import App from './components/app';


import Frontend from "./components/Frontend";
import HomePage from "./components/HomePage";
import Backend from "./components/Backend";
import About from "./components/About";
import error404 from "./components/error404";
 const Main = () => (
   <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/frontend' component={Frontend}/>
      <Route path='/backend' component={Backend}/>
      <Route path='/about' component={About}/>
      <Route path='*' component={error404}/>
    </Switch>
   </main>
)

export default Main;
