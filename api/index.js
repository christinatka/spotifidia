const app = require('./server.js');

const port = 8080;

app.listen(port, function() {
  console.log('listening on port ' + port);
});