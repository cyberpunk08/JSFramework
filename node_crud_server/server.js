var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3001;

var users = [
  { id: 1, firstName: 'gildong', lastName: 'hong', email: 'a@a.com' },
  { id: 2, firstName: 'hyunjin', lastName: 'ryu', email: 'b@b.com' }
];
var userNextId = 3;

app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/', function (req, res) {
  res.send('User API ROOT')
});

app.get('/users', function (req, res) {
  res.json(users);
});

app.get('/users/:id', function (req, res) {
  var userId = parseInt(req.params.id, 0);
  if (userId !== 0) {
    for (i in users) {
      if (users[i].id == userId) {
        res.json(users[i]);
      }
    }
  }

});

app.post('/users', function (req, res) {
  console.log(req.body)

  req.body.id = userNextId++;
  users.push(req.body);
  res.status(200).send();
  
});

app.delete('/users/:id', function (req, res) {
  var userId = parseInt(req.params.id, 10);
  console.log(userId);

  for (i in users) {
    if (users[i].id == userId) {
      users.splice(i, 1);
    }
  }
  res.status(200).send();

  
});


app.put('/users/:id', function (req, res) {
  var userId = parseInt(req.params.id, 10);

  for (i in users) {
    if (users[i].id == userId) {
      users[i] = req.body;
    }
  }
  res.status(200).send();
  
});

app.listen(PORT, function () {
  console.log('Express Listening on port ' + PORT + '!');
});

