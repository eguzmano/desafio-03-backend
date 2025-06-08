import { getPostsModel, createPostModel } from '../models/postModel.js'

export const getPosts = async (req, res) => {
  try {
    const posts = await getPostsModel()
    res.json({ posts })
  } catch (error) {
    req.json({ message: 'Error en la solicitud', error })
  }
}

export const createPost = async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body
    const newPost = await createPostModel({ titulo, img, descripcion })
    res.json({ post: newPost })
  } catch (error) {
    console.error(error)
  }
}
