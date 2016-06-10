var express = require('express');
var session = require('express-session');//Express-session is what will allow us to track users as they navigate about the site
var bodyParser = require('body-parser');
var cors = require('cors'); //CORS lets us avoid having to write custom middleware for headers
var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');


var app = express();

var corsOptions = {
  origin: 'http://localhost:3434'
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret, resave: true, saveUninitialized: true }));
app.use(express.static(__dirname + '/public'));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);


var port = 3434;
app.listen(port, function(){
  console.log('you are currently listening to port '+ port);
})
