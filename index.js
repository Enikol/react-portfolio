var path = require('path');
var express = require('express');
const React = require('react');
const ReactDom = require('react-dom/server');
//const App = require('../app/app');
//const RoutingContext = require('react-router').RoutingContext;
//const  match = require('react-router').match;
//const Provider = require('react-redux').Provider;
//const routes = require('routes');
//const webpack = require('webpack');
//const webpackConfig = require('./webpack.config');
const app = express();


app.use(express.static(__dirname + '/public'));
/*function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Portofolio</title>
          <link rel="stylesheet" href="/style/style.css">
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
    </html>
  `;
} */

app.get('*', function (req, res) {
  /*const location = createLocation(req.url);

  match({ routes, location }, (err, redirectLocation, renderProps) => {

  if(!renderProps)
      return res.status(404).end('Not found');


    const componentHTML = React.renderToString(React.createElement(RoutingContext, renderProps));
    res.status(200).end(renderHTML(componentHTML));*/
  res.sendFile('C:/Project/Portfolio/index.html');
});

app.listen(8080, function () {
    console.log('Listening on http://localhost:8080/');
});
