
// Palauttaa aina luvun 1 (jos param = array)
const dummy = (blogs) => {
  if (Array.isArray(blogs)) { return 1 } else { return 0 }
}

// Blogien likejen yhteenlaskettu lkm
const totalLikes = (blogs) => {
  const reducer = (acc, item) => {
    return acc + item.likes
  }
  const likeCount = blogs.reduce(reducer, 0)

  return likeCount
}

const favoriteBlog = (blogs) => {
  const maxBlog = blogs.reduce(function (prev, current) {
    return (prev.likes > current.likes) ? prev : current
  })
  return { title: maxBlog.title, author: maxBlog.author, likes: maxBlog.likes }
}

module.exports = { dummy, totalLikes, favoriteBlog }
