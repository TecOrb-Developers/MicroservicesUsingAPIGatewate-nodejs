import express from 'express'
import {login, register, userDetails} from '../controllers/user'
import { check_auth } from '../utils/authentication';
// const router = express.Router();

// console.log('enetrt route111111')
// router.post('/add1',userController.add);

// export = router
console.log('index_route')
export default (router:express.Router) =>{
    router.post('/user/register',register);
    router.post('/user/login',login);
    router.get('/user/userDetails',check_auth,userDetails);
}