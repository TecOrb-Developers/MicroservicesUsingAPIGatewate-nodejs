import express from 'express'
const app = express();
import router from './routes'
import morgan from 'morgan'
import http from 'http'
// import http/2 from 'hh'
import http2 from 'http2'
import {connect} from '../src/utils/database'
const port = 3001;
connect();
console.log('server_enter');
//Logging
app.use(morgan('dev'))

//Parse the Request
app.use(express.urlencoded({extended:false}))

//Take care of Json data
app.use(express.json())

//Api calling
app.use('/',router())

//Error handling
app.use((req,res,next)=>{
    const error = new Error('not found');
    return res.status(404).json({
        message:error.message
    });
});
const httpServer = http.createServer(app)
httpServer.listen(port, () => {
    console.log(`Server2 service is listining at http://localhost ${port}`)
})