import React from 'react';
import ReactDOM from 'react-dom';
//import { Nav, Navbar, NavItem } from 'react-bootstrap';
//import {LinkContainer} from 'react-router-bootstrap';
import Main from "../main";
import NavBar from "./NavBar";


export default class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
      };
    }
    render() {
        return (
        <div id="container">
        <header>
        <NavBar />
        </header>
        <div id="content">
        <Main />
        </div>
        <footer className='flex'>
          <p id='name'>©Ekaterina Nikolaenko</p>

        </footer>
        </div>
        );
    }
  }
  /*<p id='icons'>
  <a href="https://github.com/Enikol" target="_blank" ><img src="/github-6-48.png" className='icon'/></a>
  <a href="https://ru.linkedin.com/in/екатерина-николаенко-10739912b" target="_blank"><img src="/linkedin-48.png" className='icon'/></a>
   <a href="mailto:enikolaenko330@gmail.com"><img src="/email-48.png" className='icon'/></a>
   </p>*/
