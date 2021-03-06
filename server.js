const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
/*app.get('/resume', function(req, res){

  //var path=require('path');

//  var path = path.resolve(".")+'/uploads/'+file;
  res.download('./public/resume.pdf'); // magic of download fuction

});*/
app.post('/contactus', function (req, res) {
  var transporter = nodemailer.createTransport({
      service: 'Yandex',
      auth: {
          user: process.env.EMAIL, // Your email id
          pass: process.env.PASSWORD // Your password
      }
  });
  var mailOptions = {
    from: process.env.EMAIL, // sender address
    to: 'enikolaenko330@gmail.com', // list of receivers
    subject: 'Contact through website', // Subject line
    text: `Name: ${req.body.name}
    Email: ${req.body.email}
    Message: ${req.body.message}`
};
transporter.sendMail(mailOptions, function(error, info){
      if(error){
          res.json({status: 500});
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
      res.json({status: 200});
  });

});

app.listen(port, function () {
    console.log('Listening on...');
});
