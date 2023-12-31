const { elasticClient } = require("../config/elastic.config");
const IndexBlog='blog'
async function GetAllBlogs(req,res,next){
    try {
        const value=req.params.value;
        const blogs=await elasticClient.search({
            index:indexedDB,
            q:value
        })
        res.json(blogs)
    } catch (error) {
        next(error);
    }
}

async function CreateNewBlog(req,res,next){
    try {
        const {title,author,text}=req.body;
        const createdResult=await elasticClient.index({
            index:IndexBlog,
            document:{
                title,
                text,
                author
            }
        })
        res.json({
            createdResult
        })
    } catch (error) {
        next(error);
    }
}
async function RemoveBlog(req,res,next){
    try {
        const {id}=req.params;
        const deleteResult=await elasticClient.deleteByQuery({
            index:IndexBlog,
            query:{
                match:{
                    _id:id
                }
            }
        });
        res.json({
            deleteResult
        })
    } catch (error) {
        next(error);
    }
}

async function SearchByTitle(req,res,next){
    try {
        
    } catch (error) {
        next(error);
    }
}

async function SearchBymultiField(req,res,next){
    try {
        
    } catch (error) {
        next(error);
    }
}
async function SearchByRegex(req,res,next){
    try {
        
    } catch (error) {
        next(error);
    }
}

module.exports={
    GetAllBlogs,SearchByRegex,
    SearchByTitle,
    SearchBymultiField,
    CreateNewBlog,
    RemoveBlog,

}