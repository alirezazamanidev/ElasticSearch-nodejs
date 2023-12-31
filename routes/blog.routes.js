const { CreateNewBlog, GetAllBlogs, RemoveBlog } = require('../controllers/blog.controller');
const router=require('express').Router();

router.post('/create',CreateNewBlog);
router.get('/list/:value',GetAllBlogs);
router.delete('delete/:id',RemoveBlog);
module.exports={
   BlogRoutes:router
}