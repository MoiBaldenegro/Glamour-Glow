import express from 'express'

const serviceRouter = express.Router()
import services from './services';

serviceRouter.use("/services", services)

export default serviceRouter;