let express = require('express');
let app = express();
const client = require('./dbConnection');

require('./dbConnection');
let router = require('./routers/router');

let port = process.env.PORT || 3000;

let http = require('http').createServer(app);
let io = require('socket.io')(http);

io.on('connection', (socket) =>{
    console.log('a client is connected');
    socket.on('disconnect', () =>{
        console.log('user disconnected');
    });

    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000)
});

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
  }
});

http.listen(port, ()=>{
    console.log('Server started on port: ' +port);
})





