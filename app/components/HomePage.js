import React from 'react';
import { Image } from 'react-bootstrap';
import Contact from './Contact';

class HomePage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
      };
    }
    render() {
        return (
            <div id='home'>
            <Image src="/photo.jpg" id='photo' circle alt='placeholder'/>
            <div id="info">
            <h1> Ekaterina Nikolaenko </h1>
            <h2> Web developer </h2>
            <p className='txt'> Hi! My name is Kate and I love building powerful web apps that solve real problems. </p>
            <Contact />
            </div>
            </div>
        );
    }
  }

  export default HomePage;
