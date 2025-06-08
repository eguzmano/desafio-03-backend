import pool from '../../db/config.js'

// get
export const getPostsModel = async () => {
  const sqlQuery = { text: 'SELECT * FROM posts' }
  const result = await pool.query(sqlQuery)
  return result.rows
}

// post
export const createPostModel = async ({ titulo, img, descripcion }) => {
  const sqlQuery = {
    text: 'INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *',
    values: [titulo, img, descripcion]
  }
  const result = await pool.query(sqlQuery)
  return result.rows[0]
}
