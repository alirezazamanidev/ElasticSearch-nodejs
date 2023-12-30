const createHttpError = require("http-errors");
const { elasticClient } = require("../config/elastic.config");

async function CreateNewIndex(req,res,next){
    try {
        const {indexName}=req.body;
        if(!indexName) throw createHttpError.BadRequest("Invalid value of index Name");
        const result=await elasticClient.indices.create({index:indexName});
        res.json({
            result,
            message:"index created"
        })
        
    } catch (error) {
        next(error);
    }
}

async function GetIndices(req,res,next){
    try {
        const indices=await elasticClient.indices.getAlias();
        const regexp=/^\.+/
        res.json({
            indices:Object.keys(indices).filter(item=>!regexp.test(item))
        })
        
    } catch (error) {
        next(error);
    }
}

async function RemoveIndice(req,res,next){
    try {
        const {indexName}=req.params;
        const RemoveResult=await elasticClient.indices.delete({index:indexName});
        return res.json({
            RemoveResult
        })
        
    } catch (error) {
        next(error);
    }
}

module.exports={
    CreateNewIndex,
    GetIndices,
    RemoveIndice
}