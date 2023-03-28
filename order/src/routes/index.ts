import express from 'express'
import order from './order'
import app_event from './app_event'
const router = express.Router()

export default (): express.Router => {
    order(router);
    app_event(router);
    return router
}