import React from 'react';
import { Image, Col, Row, Clearfix } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class About extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
      };
    }
    render() {
        return (
        <div id='about'>

        <div id='profile' className='section'>
        <label>About me </label>
        <p> I am a front-end developer based in Moscow, Russia. I am a <a href="https://www.freecodecamp.com" target="_blank">freeCodeCamp</a> student,
        currently working at <a href="https://uchi.ru/" target="_blank">UCHi.RU</a> and
        contributing to <a href='https://github.com/Enikol?tab=repositories'> open source </a>. </p>

        </div>

        <div className='section'>
        <label> Skills </label>
        <div id='skills'>
        <div className='logo-wrap'><Image src="/logos/html.jpg" className='logo' alt='HTML5 logo'/> <p>HTML5</p></div>
        <div className='logo-wrap'><Image src="/logos/css.jpg" className='logo' alt='CSS3 logo'/> <p>CSS3</p></div>
        <div className='logo-wrap'><Image src="/logos/js.jpg" className='logo' alt='JavaScript logo'/><p>JavaScript</p></div>
        <div className='logo-wrap'><Image src="/logos/d3.jpg" className='logo' alt='D3.js logo'/> <p>D3.js</p></div>
        <div className='logo-wrap'><Image src="/logos/react.jpg" className='logo' alt='React logo'/><p>React.js</p></div>
        <div className='logo-wrap'><Image src="/logos/node.jpg" className='logo' alt='Node.js logo'/> <p>Node.js</p></div>
        <div className='logo-wrap'><Image src="/logos/express.jpg" className='logo' alt='Express logo'/> <p>Express.js</p></div>
        <div className='logo-wrap'><Image src="/logos/mongo.jpg"className='logo' alt='MongoDB logo'/> <p>MongoDB</p></div>
        </div>
        </div>

        <div id='icons' className='section'>
        <div><label> Contact me </label></div>
        <div className='little-box'><a href="https://github.com/Enikol" target="_blank" className='socialIcon'><img src="/github-10-24.png"/></a>
        <a href="https://ru.linkedin.com/in/екатерина-николаенко-10739912b" target="_blank" className='socialIcon'><img src="/linkedin-4-24-blue.png"/></a>
        <a href="https://codepen.io/enk/" target="_blank" className='socialIcon'><img src="/codepen.png"/></a></div>
        <div className='little-box'><img src="/email-48.png" className='icon'/> <p>enikolaenko330@gmail.com </p> </div>
        <div className='little-box'><img src="/phone-4-48.png" className='icon'/><p> +7-964-561-73-38 </p></div>

        </div>
        </div>
        );
    }
  }

export default About;
/*<Col sm={4} md={2} mdOffset={1} smOffset={1} id='icons'>
  <div className='little-box'><a href="https://github.com/Enikol" target="_blank" className='socialIcon'><img src="/github-10-24.png"/></a>
  <a href="https://ru.linkedin.com/in/екатерина-николаенко-10739912b" target="_blank" className='socialIcon'><img src="/linkedin-4-24-blue.png"/></a>
  <a href="https://codepen.io/enk/" target="_blank" className='socialIcon'><img src="/codepen.png"/></a></div>
  <div className='little-box'><img src="/email-48.png" className='icon'/> <p>enikolaenko330</p><p>@gmail.com </p> </div>
  <div className='little-box'><img src="/phone-4-48.png" className='icon'/><p> +7-964-561-73-38 </p></div>
</Col>*/
