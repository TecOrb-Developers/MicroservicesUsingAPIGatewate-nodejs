/*
* Building Micro Services in Nodejs
* @author Shashank Tiwari
*/

'use strict';
const axios = require('axios');
// const CONSTANTS = require('./../config/constants');

class ApiHandler{

	getUserInformation(userId){
		return axios('http://localhost:3001/orderDetails?orderId='+ userId);
	}

	// async getProductInformation(productId){
	// 	return axios(`http://localhost:3000/product/${productId}`);
	// }
}

module.exports = new ApiHandler();