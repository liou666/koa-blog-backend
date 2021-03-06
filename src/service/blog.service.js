/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-03-27 19:59:19
 * @LastEditors: Liou
 * @LastEditTime: 2022-03-27 21:10:45
 */
const exec = require('../db/mysql')

class BlogServer {
  async getBlogList({ title, pageNum = 1, pageSize = 10 }) {
    const params = []
    let sql = `SELECT * FROM blogs `
    if (title) {
      params.push(`%${title}%`)
      sql += ` WHERE title LIKE ? `
    }
    sql += ` ORDER BY create_time DESC LIMIT ? OFFSET ? `
    params.push(...[pageSize, (pageNum - 1) * pageSize])
    const blogData = await exec(sql, params)
    const result = await exec('SELECT COUNT(*) AS total FROM blogs')
    return { data: blogData, ...result[0] }
  }

  async updateBlogList({ blogId, blogData: { title, content, author, subTitle, label } }) {
    const sql = `UPDATE blogs SET title= ?,content=?,author=?,subTitle=?,label=? where id= ?;`
    const row = await exec(sql, [title, content, author, subTitle, label, blogId])
    return !!row.affectedRows
  }

  async createBlog({ title, author = null, content, subTitle = null, label = null }) {
    const sql = `INSERT INTO blogs (title,content,author,sub_title,label) VALUES (?,?,?,?,?)`
    const row = await exec(sql, [title, content, author, subTitle, label])
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

  async getBlogLabels() {
    const params = []
    const sql = `SELECT * FROM blogs`
    const row = await exec(sql, params)
    const labels = row.reduce((pre, cur) => {
      const temp = {
        name: '',
        children: [],
      }
      const { label } = cur
      if (!label) {
        return pre
      }
      const curSort = { title: cur.title, id: cur.id, sub_title: cur.sub_title }
      temp.name = label
      temp.children.push(curSort)
      const index = pre.findIndex((item) => item.name === label)
      if (index > -1) {
        pre[index].children.push(curSort)
      } else {
        pre.push(temp)
      }
      return pre
    }, [])
    return labels
  }

  async uploadBlog() { }
}

module.exports = new BlogServer()
