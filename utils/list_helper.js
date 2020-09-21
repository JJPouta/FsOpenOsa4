
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

// console.log(totalLikes([{ likes: 5 }, { likes: 10 }]))

module.exports = { dummy, totalLikes }
