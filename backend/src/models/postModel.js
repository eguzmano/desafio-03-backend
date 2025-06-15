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

// put
export const updatePostModel = async ({ titulo, img, descripcion, likes, id }) => {
  const sqlQuery = {
    text: 'UPDATE posts SET titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5 RETURNING *',
    values: [titulo, img, descripcion, likes, id]
  }
  const result = await pool.query(sqlQuery)
  return result.rows
}

// delete
export const deletePostModel = async (id) => {
  const sqlQuery = {
    text: 'DELETE FROM posts WHERE id = $1',
    values: [id]
  }
  const result = await pool.query(sqlQuery)
  return result.rows
}
