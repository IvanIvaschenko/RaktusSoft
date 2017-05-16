var express 	= require('express');
var app         = express();
var bodyParser  = require('body-parser');
var jwt    = require('jsonwebtoken');
var cors = require('cors');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var User =
  {
    username: 'admin',
    password: 'password'
  }

var  data=[
  {
    artist: 'the Beatles',
    concertPlace: 'Liverpool',
    perfomansRecords: '0 concert per month',
    id: 1
  },
  {
    artist: 'the Kooks',
    concertPlace: 'Amsterdam',
    perfomansRecords: '5 concert per month',
    id: 2
  },
  {
    artist: 'Arctic Monkeys',
    concertPlace: 'Paris',
    perfomansRecords: '3 concert per month',
    id: 3
  },
  {
    artist: 'Linkin Park',
    concertPlace: 'Palermo',
    perfomansRecords: '6 concert per month',
    id: 4
  }
]

app.get('/api/data', (req, res) => {
	res.json(data);
});

app.post('/api/auth', ( req, res) => {
		if (User.username!==req.body.username || User.password !== req.body.password) {
			res.json({ success: false, message: 'Authentication failed' });
    } else {
		  var token = jwt.sign(User.username, 'secret');
			res.json({
				success: true,
				message: 'Enjoy your token!',
				token: token
			});
		}

	}
);

app.use((req, res, next) => {
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	if (token) {
		jwt.verify(token, 'secret', function(err, decoded) {
			if (err) {
        console.log(token);
        console.log(err);
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

app.post('/api/data', (req, res)=>{
  let obj ={
    artist: req.body.artist,
    concertPlace: req.body.place,
    perfomansRecords: req.body.records,
    id: '_' + Math.random().toString(36).substr(2, 9)
  };

  data.push(obj);
  res.json({
    success: true,
    data
  });
});

app.delete('/api/data', (req, res)=>{
  let  result = data.filter((item)=>{return item.id !== req.body.id});
  data = result;
  res.json({
    success: true,
    data
  })
 }
)

app.put('/api/data', (req, res)=>{
  item = data.find((item)=>{return item.id === req.body.id});
  item.artist = req.body.artist;
  item.concertPlace = req.body.place;
  item.perfomansRecords = req.body.records;
  res.json({
    success: true,
    data
  })
 }
)

app.listen(8080, ()=>'Server started');
