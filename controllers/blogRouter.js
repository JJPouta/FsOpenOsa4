const router = require('express').Router()
const Blog = require('../models/blog')

router.get('/', async (req, res) => {
  const allBlogs = await Blog.find({})
  res.json(allBlogs)
})

router.post('/', async (req, res) => {
  const blog = new Blog(req.body)
  const newBlogPost = await blog.save()
  res.status(201).json(newBlogPost)
})

// 4.13
router.delete('/:id', async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id)
  res.status(204).end()
})

module.exports = router
