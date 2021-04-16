const app = require('./server.js');

//const port = process.env.PORT || 8080;
const port = 3000;

app.listen(port, function() {
  console.log('listening on port ' + port);
});
