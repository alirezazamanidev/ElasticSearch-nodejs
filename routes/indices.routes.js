const { CreateNewIndex, GetIndices } = require('../controllers/indices.contoller');

const router=require('express').Router();

router.post('/add',CreateNewIndex);
router.get('/list',GetIndices);

module.exports={
    IndiceRoutes:router
}