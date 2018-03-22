const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const routes = require('./routes');
const config = require('./config');

app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/', routes);

process.env.SOCKET_LIST = {};
process.env.PLAYER_LIST ={};

io.on('connection', (socket) => {
    process.env.SOCKET_LIST ={};
    process.env.PLAYER_LIST ={};
})

http.listen(config.server.port, () => {
    console.log(`Listening on port ${config.server.port}`);
});