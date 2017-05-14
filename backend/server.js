var express 	= require('express');
var app         = express();
var bodyParser  = require('body-parser');
var jwt    = require('jsonwebtoken');

process.env.SECRET_KEY = 'verysecretkey';

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var User =
  {
    username: 'admin',
    password: 'password'
  }

data=[
  {
    artist: 'the Beatles',
    concertPlace: 'Liverpool',
    perfomansRecords: '0 concert per month'
  },
  {
    artist: 'the Kooks',
    concertPlace: 'Amsterdam',
    perfomansRecords: '5 concert per month'
  },
  {
    artist: 'Arctic Monkeys',
    concertPlace: 'Paris',
    perfomansRecords: '3 concert per month'
  },
  {
    artist: 'Linkin Park',
    concertPlace: 'Palermo',
    perfomansRecords: '6 concert per month'
  },
]

app.get('/api/data', function(req, res) {
	res.json(data);
});

app.post('/api/authenticate', function( req, res) {

		if (User.username!==req.body.username && User.password !== req.body.password) {
			res.json({ success: false, message: 'Authentication failed' });
    } else {
		  var token = jwt.sign(User.username, process.env.SECRET_KEY);
			res.json({
				success: true,
				message: 'Enjoy your token!',
				token: token
			});
		}

	}
);

app.use(function(req, res, next) {

	var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	if (token) {
		jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		return res.status(403).send({
			success: false,
			message: 'No token provided.'
		});
	}

});


app.listen(8080, ()=>'Server started');
