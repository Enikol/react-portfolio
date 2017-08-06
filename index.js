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

app.get('*', function (req, res) {

  res.sendFile('C:/Project/Portfolio/index.html');
});

app.listen(8080, function () {
    console.log('Listening on http://localhost:8080/');
});
