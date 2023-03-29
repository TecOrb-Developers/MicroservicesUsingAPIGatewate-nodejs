## Here we are setup a minor node js project in Microservices architecture style

## Introduction

`what are microservices ?`

`Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services`

`what are Api Gateways ?`

`An application programming interface (API) gateway is software that takes an application user’s request, routes it to one or more backend services, gathers the appropriate data and delivers it to the user in a single, combined package. It also provides analytics, layers of threat protection and other security for the application.`


`Here we have create two services and connect`


`1.user : In this service we have create user signup , login and userDetails Api inside user/src`

`2.order  : In this service we have create user's order add ,orderDetail and orderList Api inside order/src`

## In Api Gateway
`import { check_auth } from '../api_gateway/utils/authentication'`

`import { connect } from '../api_gateway/utils/database'`

`connect();`

`const server = gateway({`

    `routes: [
    //Here User service call
        {
            prefix: '/User',
            // auth: auth,
            target: 'http://localhost:3000',
        },
        //Here Order services call
        {
            prefix: '/Order',
            target: 'http://localhost:3001',
            middlewares: [check_auth]
        }
    ]
});`


## Required dependencies:

`Node is installed (v 14.x)`

`Postman is installed (Version 10.12.3-230318-0431)`

`Mongodb altles free tier cluster`

## Server

`HOST=localhost`

`PORT = 9000`

## Installing Dependencies
`Express`

`Mongoose`

`fast-gateway: npm install --save-dev @types/fast-gateway`

`Setup Steps:`
`npm install`

`local server`
`npm run start`

`install fast-gateway`
`npm install fast-gateway (In api gateway)`

`postman api url`
`type post "{host-url}/User/user/signUp" in body pass {  email, password ,phoneNumber}`

`type post "{host-url}/User/user/login" in body pass {email,password}` 

`type get "{host-url}/User/user/userDetails" in headers pass {Authorization:token}` 

`type post "{host-url}/Order/order/add" in body pass {  userId,item, quantity, amount,         shopName} and headers pass  {Authorization:token}`

`type get "{host-url}/Order/order/details?orderId=orderId" in headers pass  {Authorization:token}`

`type get "{host-url}/Order/order/order_list" in headers pass  {Authorization:token}`
