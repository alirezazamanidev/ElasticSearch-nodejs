const { CreateNewBlog, GetAllBlogs, RemoveBlog, updateBlog } = require('../controllers/blog.controller');
const router=require('express').Router();

router.post('/create',CreateNewBlog);
router.get('/list/:value',GetAllBlogs);
router.delete('delete/:id',RemoveBlog);
router.put('/update/:id',updateBlog);
module.exports={
   BlogRoutes:router
}