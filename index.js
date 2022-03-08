import express from 'express';
import mongoose from 'mongoose';
 
import routes from './routes/capstoneRoutes';
import  { Server} from "socket.io" 
import http from 'http';
const cors=require('cors')
var proxy= require ('./prox');






const app = express();
app.use(cors())

proxy(app)

const server = http.createServer(app);//use http to dewrapp express app
const io = new Server(server,{
    cors:{
        origin:"http://127.0.0.1:5000",
        methods:["GET","POST"]
    }
});//io, will also be used to refernce similar dependencies in

const PORT =4000;
//mongo connection
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost/parameterDB',{useNewUrlParser:true,useUnifiedTopology:true})
//body parser


const whitelist = ["http://localhost/:5000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}

 
app.use(express.urlencoded({extended:true}))
app.use(express.json());
//app.use(express.static(__dirname + '/public'));


//Cors set up

routes(app);

 



server.listen(PORT,()=>{
    console.log('Server is on'+ PORT);

    
})//http is used to listen not express


io.on('connection', (socket) => {
    console.log("connected")
    socket.on('subscribeToAlertEvent', () => {
    //  io.emit('AlertEvent', {alert:"alert"});//Emits the Alert
    });
  });

  export default io;

//For IO

