import React from 'react';
import { Image } from 'react-bootstrap';

 class Backend extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
      };
    }
    render() {
        return (
          <div id='backend'>
          <div className='img_wrap'>
           <a href="https://imaginary-roast.glitch.me/" target='_blank'><Image responsive alt="Timestamp Microservice API" src="/backend/timestamp.jpg" /></a>
           <div  className='img_description'><p> Timestamp Microservice API </p> <a href='https://github.com/Enikol/timestamp-microservice'>View code on GitHub</a></div>
           </div>
          <div className='img_wrap'>
            <a href="https://highfalutin-fridge.glitch.me/" target='_blank'><Image responsive alt="Request Header Parser Microservice API" src="/backend/header-parser.jpg" /></a>
            <div  className='img_description'><p> Request Header Parser Microservice API </p> <a href='https://github.com/Enikol/header-parser'>View code on GitHub</a></div>
            </div>
          <div className='img_wrap'>
             <a href="https://literate-ravioli.glitch.me" target='_blank'><Image responsive alt="URL Shortener Microservice API" src="/backend/url-shortener.jpg" /></a>
             <div  className='img_description'><p> URL Shortener Microservice API </p> <a href='https://github.com/Enikol/url-shortener'>View code on GitHub</a></div>
             </div>
           <div className='img_wrap'>
            <a href="https://inexpensive-decimal.glitch.me/" target='_blank'><Image responsive alt="File Metadata Microservice API" src="/backend/file-data.jpg" /></a>
            <div  className='img_description'><p> File Metadata Microservice API </p> <a href='https://github.com/Enikol/file-metadata'>View code on GitHub</a></div>
            </div>
           <div className='img_wrap'>
             <a href="https://superficial-wash.glitch.me/" target='_blank'><Image responsive alt="Exercise Tracker" src="/backend/exercise.jpg" /></a>
             <div  className='img_description'><p> Exercise Tracker </p> <a href='https://github.com/Enikol/exercise-tracker'>View code on GitHub</a></div>
             </div>
            <div className='img_wrap'>
              <a href="https://shrouded-property.glitch.me/" target='_blank'><Image responsive alt="Metric/Imperial Converter" src="/backend/converter.jpg" /></a>
              <div  className='img_description'><p> Metric/Imperial Converter </p> <a href='https://github.com/Enikol/converter'>View code on GitHub</a></div>
              </div>
            <div className='img_wrap'>
               <a href="https://checker-pink.glitch.me" target='_blank'><Image responsive alt="Issue Tracker" src="/backend/issue-tracker.jpg" /></a>
               <div  className='img_description'><p> Issue Tracker </p> <a href='https://github.com/Enikol/issue_tracker'>View code on GitHub</a></div>
               </div>
            <div className='img_wrap'>
                <a href="https://checker-pink.glitch.me" target='_blank'><Image responsive alt="Issue Tracker" src="/backend/issue-tracker.jpg" /></a>
                <div  className='img_description'><p> Issue Tracker </p> <a href='https://github.com/Enikol/issue_tracker'>View code on GitHub</a></div>
                </div>
            <div className='img_wrap'>
                 <a href="https://wonderful-drive.glitch.me/" target='_blank'><Image responsive alt="Personal Library" src="/backend/library.jpg" /></a>
                 <div  className='img_description'><p> Personal Library </p> <a href='https://github.com/Enikol/library'>View code on GitHub</a></div>
                 </div>
            <div className='img_wrap'>
                  <a href="https://comfortable-mimosa.glitch.me/" target='_blank'><Image responsive alt="Nasdaq Stock Price Checker" src="/backend/stock.jpg" /></a>
                  <div  className='img_description'><p> Nasdaq Stock Price Checker </p> <a href='https://github.com/Enikol/stock_price_checker'>View code on GitHub</a></div>
                  </div>
            <div className='img_wrap'>
                  <a href="https://shrouded-consonant.glitch.me/" target='_blank'><Image responsive alt="Anon Message Board" src="/backend/message-board.jpg" /></a>
                  <div  className='img_description'><p> Anon Message Board </p> <a href='https://github.com/Enikol/message_board'>View code on GitHub</a></div>
                  </div>
          </div>
        );
    }
  }

export default Backend;
