const router = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

router.get('/', async (req, res) => {
  const allBlogs = await Blog.find({}).populate('user', { username: 1, name: 1, id: 1 })

  res.json(allBlogs.map(b => b.toJSON()))
})

router.post('/', async (req, res) => {
  const userNumberOne = await User.findOne({})

  const blog = await new Blog(req.body)
  blog.user = userNumberOne._id

  const newBlogPost = await blog.save()
  userNumberOne.blogs = userNumberOne.blogs.concat(newBlogPost._id)
  await userNumberOne.save()

  res.status(201).json(newBlogPost)
})

// 4.13
router.delete('/:id', async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id)
  res.status(204).end()
})

module.exports = router
