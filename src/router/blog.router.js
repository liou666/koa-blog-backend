/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-03-27 19:51:16
 * @LastEditors: Liou
 * @LastEditTime: 2022-03-27 20:58:07
 */
const router = require('koa-router')({ prefix: '/v1/blog' })

const {
  getBlogList,
  updateBlogList,
  createBlog,
  deleteBlog,
  getBlogDetail,
  getBlogLabels,
} = require('../controller/blog.controller')

router.get('/list', getBlogList)
router.put('/list/:blogId/', updateBlogList)
router.post('/list', createBlog)
router.delete('/list/:blogId/', deleteBlog)
router.get('/list/:blogId/', getBlogDetail)

router.get('/label', getBlogLabels)

module.exports = router
