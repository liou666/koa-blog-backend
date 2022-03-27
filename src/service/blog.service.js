/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-03-27 19:59:19
 * @LastEditors: Liou
 * @LastEditTime: 2022-03-27 21:10:45
 */
const exec = require('../db/mysql')

class BlogServer {
  async getBlogList({ title, pageNum = 1, pageSize = 3 }) {
    const params = []
    let sql = `SELECT * FROM blogs`
    if (title) {
      params.push(`%${title}%`)
      sql += ` WHERE title LIKE ? `
    }
    sql += ` LIMIT ? OFFSET ?`
    params.push(...[pageSize, (pageNum - 1) * pageSize])
    const row = await exec(sql, params)
    return row
  }

  async updateBlogList({ blogId, blogData: { title, content } }) {
    const sql = `UPDATE blogs SET title= ?,content=? where id= ?;`
    const row = await exec(sql, [title, content, blogId])
    return !!row.affectedRows
  }

  async createBlog({ title, author, content }) {
    const sql = `INSERT INTO blogs (title,content,author) VALUES (?,?,?)`
    const row = await exec(sql, [title, author, content])
    return !!row.affectedRows
  }

  async deleteBlog(id) {
    const sql = `DELETE FROM blogs WHERE id = ? `
    const row = await exec(sql, [id])
    return !!row.affectedRows
  }

  async getBlogDetail(id) {
    const sql = `SELECT * FROM blogs WHERE id= ? `
    const row = await exec(sql, [id])
    return row.length ? row[0] : row
  }
}

module.exports = new BlogServer()
