import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';

 class Frontend extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
      };
    }
    render() {
        return (
        <Row>
        <Col sm={6} md={4} className='frontend-col col-one'>
        <div className='img_wrap'>
         <a href="https://codepen.io/enk/full/PWedvY/" target='_blank'><Image responsive className='img__' alt="Random quote machine" src="/frontend/randquote.jpg" /></a>
         <div  className='img_description'><p> Random quote machine </p></div>
         </div>
         <div className='img_wrap'>
          <a href="https://codepen.io/enk/full/KaBzbv/" target='_blank'><Image responsive className='img__' alt="React Calculator" src="/frontend/calc.jpg" /></a>
          <div  className='img_description'><p> React Calculator </p></div>
          </div>
          <div className='img_wrap'>
           <a href="https://codepen.io/enk/full/BpVyaG" target='_blank'><Image responsive className='img__' alt="React Drum Machine" src="/frontend/drum.jpg" /></a>
           <div  className='img_description'><p> React Drum Machine  </p></div>
           </div>
         <div className='img_wrap'>
          <a href="https://codepen.io/enk/full/ZLzdXG" target='_blank'><Image responsive className='img__' alt="Simon game" src="/frontend/simon.jpg" /></a>
          <div  className='img_description'><p> Plain JS Simon game </p></div>
          </div>

         </Col>
         <Col sm={6} md={4}  className='frontend-col'>
         <div className='img_wrap center-block'>
          <a href="https://codepen.io/enk/full/YNjGGr" target='_blank'><Image responsive className='img__' alt="React Pomodoro Clock" src="/frontend/pomodoro.jpg" /></a>
          <div  className='img_description'><p> React Pomodoro Clock </p></div>
          </div>

          <div className='img_wrap center-block' >
           <a href="https://codepen.io/enk/full/ggeEBd" target='_blank'><Image responsive className='img__' alt="React Markdown Previewer" src="/frontend/mark.jpg" /></a>
           <div  className='img_description'><p> React Markdown Previewer </p></div>
           </div>
          <div className='img_wrap center-block'>
           <a href="https://codepen.io/enk/full/RKjyoW" target='_blank'><Image responsive className='img__' alt="Technical Documentation Page" src="/frontend/doc2.jpg" /></a>
           <div  className='img_description'><p> Technical Documentation Page </p></div>
          </div>
          <div className='img_wrap center-block'>
          <a href="https://codepen.io/enk/full/PWJQQX" target='_blank'><Image responsive className='img__' alt="Mockup Survey Form" src="/frontend/survey.jpg" /></a>
          <div  className='img_description'><p> Mockup Survey Form </p></div>
         </div>
         </Col>
         <Col sm={6} md={4} className='frontend-col'>
         <div className='img_wrap'>
          <a href="https://codepen.io/enk/full/oBrmeP/" target='_blank'><Image responsive className='img__' alt="Treemap Diagram" src="/frontend/treemap.jpg" /></a>
          <div  className='img_description'><p> D3.js Treemap Diagram </p></div>
         </div>
         <div className='img_wrap'>
          <a href="https://codepen.io/enk/full/dNBOoj" target='_blank'><Image responsive className='img__' alt="Choropleth Map" src="/frontend/choropleth.jpg" /></a>
          <div  className='img_description'><p> D3.js Choropleth Map </p></div>
         </div>
         <div className='img_wrap'>
          <a href="https://codepen.io/enk/full/MJdZjY/" target='_blank'><Image responsive className='img__' alt="Heat Map" src="/frontend/heat.jpg" /></a>
          <div  className='img_description'><p> D3.js Heat Map </p></div>
         </div>
         <div className='img_wrap'>
          <a href="https://codepen.io/enk/full/LxoyVg/" target='_blank'><Image responsive className='img__' alt="Scatterplot Graph" src="/frontend/scatterplot.jpg" /></a>
          <div  className='img_description'><p> D3.js Scatterplot Graph </p></div>
         </div>
         <div className='img_wrap'>
          <a href="https://codepen.io/enk/full/vgbvWq/" target='_blank'><Image responsive className='img__' alt="Bar Charct" src="/frontend/bar.jpg" /></a>
          <div  className='img_description'><p> D3.js Bar Chart </p></div>
         </div>
         </Col>
         </Row>
        );
    }
  }

export default Frontend;
