//create web server application
const express = require('express');
const app = express();
//create a server
const server = require('http').Server(app);
//create socket.io instance
const io = require('socket.io')(server);
//create a redis client
const redis = require('redis');
const client = redis.createClient();
//subscribe to the 'comment' channel
client.subscribe('comment');

