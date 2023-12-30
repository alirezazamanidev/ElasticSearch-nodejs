const { IndiceRoutes } = require('./indices.routes');

const router=require('express').Router();

router.use('/index',IndiceRoutes)

module.exports={
    AllRoutes:router
}