//Create web server
const express = require('express')
const app = express()

//Create server
const http = require('http')
const server = http.createServer(app)

//Create socket
const socketio = require('socket.io')
const io = socketio(server)

//Import database
const { db } = require('./db')

//Import ObjectId
const { ObjectId } = require('mongodb')

//Import path
const path = require('path')

//Import cookie parser
const cookieParser = require('cookie-parser')

//Import jwt
const jwt = require('jsonwebtoken')

//Import express session
const expressSession = require('express-session')

//Import dotenv
const dotenv = require('dotenv')

//Import cors
const cors = require('cors')

//Import passport
const passport = require('passport')

//Import passport local
const passportLocal = require('passport-local')

//Import bcrypt
const bcrypt = require('bcrypt')

//Import flash
const flash = require('express-flash')

//Import method override
const methodOverride = require('method-override')

//Import socket auth
const { socketAuth } = require('./socketAuth')

//Import socket comment
const { socketComment } = require('./socketComment')

//Import socket like
const { socketLike } = require('./socketLike')

//Import socket user
const { socketUser } = require('./socketUser')

//Import socket delete
const { socketDelete } = require('./socketDelete')

//Import socket edit
const { socketEdit } = require('./socketEdit')

//Import socket reply
const { socketReply } = require('./socketReply')

//Import socket reply like
const { socketReplyLike } = require('./socketReplyLike')

//Import socket reply edit
const { socketReplyEdit } = require('./socketReplyEdit')

//Import socket reply delete
const { socketReplyDelete } = require('./socketReplyDelete')

//Import socket reply comment
const { socketReplyComment } = require('./socketReplyComment')

//Import socket reply user
const { socketReplyUser } = require('./socketReplyUser')

//Import socket comment like
const { socketCommentLike } = require('./socketCommentLike')

//Import socket comment edit
const { socketCommentEdit } = require('./socketCommentEdit')

//Import socket comment delete
const { socketCommentDelete } = require('./socketCommentDelete')

//Import socket comment reply
const { socketCommentReply } = require('./socketCommentReply')

//Import socket comment
