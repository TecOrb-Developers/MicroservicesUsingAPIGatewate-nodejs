import http from 'http'
import http2 from 'http2'
import express, { Express,NextFunction, Response, Request } from 'express'
const app = express();
import routes from './routes'
import morgan from 'morgan'
import mongoose from 'mongoose';
import {connect}  from './utils/database';
import {CustomError}  from './utils/errors';
import StatusCodes from  'http-status-codes'
const port = 3000
connect();
//Logging
app.use(morgan('dev'));

//Parse the Request
app.use(express.urlencoded({extended:false}));

//Take care of json data
app.use(express.json());

app.use('/',routes())



// Error handling
app.use((err: Error | CustomError, _: Request, res: Response, __: NextFunction) => {
    // logger.err(err, true);
    const status = (err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST);
    return res.status(status).json({
        error: err.message,
        message: err.message,
        code: status
    });
});

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
    console.log(`Server1  is listining at http://localhost:${port}`)
})