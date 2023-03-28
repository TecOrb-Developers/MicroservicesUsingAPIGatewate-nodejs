import express from 'express';
import gateway from 'fast-gateway'
const port = 9000
const app = express()
import { check_auth } from '../api_gateway/utils/authentication'
import { connect } from '../api_gateway/utils/database'
connect();
const server = gateway({
    routes: [
        {
            prefix: '/User',
            // auth: auth,
            target: 'http://localhost:3000',
        },
        {
            prefix: '/Order',
            target: 'http://localhost:3001',
            middlewares: [check_auth]
        }
    ]
});
console.log('enter1212')
// server.get('/mytesting', (req, res) => res.send('Yes called gateway'));
server.start(port).then(server => {
    console.log('Api gateway is running 9000 port');
});
// import express from 'express'
// import cors from 'cors'
// import proxy from 'express-http-proxy';
// const port = 9000
// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get('/api', (req: any, res: any) => {
//     const obj = {
//         "name": 'Ashu owner',
//         "paymentStatus": "finished"
//     }
//     res.send(obj);
// });
// app.use('/server1',proxy('http://localhost:3000'));
// app.use('/server2',proxy('http://localhost:3001'));


// app.listen(port,() =>{
//     console.log(`Gateway is listening on port ${port}`)
// })
