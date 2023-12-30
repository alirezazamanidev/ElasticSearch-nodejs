const { CreateNewIndex, GetIndices, RemoveIndice } = require('../controllers/indices.contoller');

const router=require('express').Router();

router.post('/add',CreateNewIndex);
router.get('/list',GetIndices);
router.delete('/delete/:indexName',RemoveIndice);
module.exports={
    IndiceRoutes:router
}