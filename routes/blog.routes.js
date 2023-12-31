const { CreateNewBlog, GetAllBlogs } = require('../controllers/blog.controller');
const router=require('express').Router();

router.post('/create',CreateNewBlog);
router.post('/list/:value',GetAllBlogs);
module.exports={
   BlogRoutes:router
}