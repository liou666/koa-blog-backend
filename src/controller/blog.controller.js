/* eslint-disable node/no-unsupported-features/es-syntax */
/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-03-27 19:56:03
 * @LastEditors: Liou
 * @LastEditTime: 2022-03-27 21:11:49
 */
const blogServer = require('../service/blog.service')
const { SucceedModel, ErrorModel } = require('../model/response.model')

class BlogController {
  async getBlogList(ctx) {
    const res = await blogServer.getBlogList(ctx.query)
    ctx.body = new SucceedModel(res)
  }

  async updateBlogList(ctx) {
    const res = await blogServer.updateBlogList({
      ...ctx.params,
      ...ctx.request.body,
    })
    ctx.body = res ? new SucceedModel('更新成功') : new ErrorModel('更新失败')
  }

  async createBlog(ctx) {
    const res = await blogServer.createBlog(ctx.request.body)
    ctx.body = res ? new SucceedModel('创建成功') : new ErrorModel('创建失败')
  }

  async deleteBlog(ctx) {
    const res = await blogServer.deleteBlog(ctx.params.blogId)
    ctx.body = res ? new SucceedModel('删除成功') : new ErrorModel('删除失败')
  }

  async getBlogDetail(ctx) {
    const res = await blogServer.getBlogDetail(ctx.params.blogId)
    ctx.body = new SucceedModel(res)
  }
}

module.exports = new BlogController()
