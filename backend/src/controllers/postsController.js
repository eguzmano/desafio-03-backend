import { getPostsModel, createPostModel, updatePostModel, deletePostModel } from '../models/postModel.js'

export const getPosts = async (req, res) => {
  try {
    const posts = await getPostsModel()
    res.json({ posts })
  } catch (error) {
    res.json({ message: 'Error en la solicitud', error })
  }
}

export const createPost = async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body
    const newPost = await createPostModel({ titulo, img, descripcion })
    res.json({ post: newPost })
  } catch (error) {
    res.json({ message: 'Error al crear el post', error })
  }
}

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const { titulo, img, descripcion, likes } = req.body
    const post = await updatePostModel({ titulo, img, descripcion, likes, id })
    res.json({ post })
  } catch (error) {
    res.json({ message: 'Error al actualizar el post', error })
  }
}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await deletePostModel(id)
    res.json({ post })
  } catch (error) {
    res.json({ message: 'Error al eliminar el post', error })
  }
}
