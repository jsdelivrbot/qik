var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/hello', function(req, res) {
  res.send('Hello World!');
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(__dirname, '/public/index.html');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
