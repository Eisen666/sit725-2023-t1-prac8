let express = require('express');
let app = express();
const client = require('./dbConnection');

require('./dbConnection');
let router = require('./routers/router');

let port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api',router);

client.connect(err => {
  if (err) {
      console.error('Failed to connect to MongoDB:', err);
      process.exit(1);
  } else {
      console.log('Connected to MongoDB');
      app.listen(port, () => {
          console.log("App listening to: " + port);
      });
  }
});

module.exports = app;



