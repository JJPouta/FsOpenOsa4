const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('totalikes count', () => {
  // Testataan useampaa blogia
  test('multiBlog', () => {
    const multiBlogs = [{ _id: '5a422a851b54a676234d17f7', title: 'React patterns', author: 'Michael Chan', url: 'https://reactpatterns.com/', likes: 7, __v: 0 },
      { _id: '5a422aa71b54a676234d17f8', title: 'Go To Statement Considered Harmful', author: 'Edsger W. Dijkstra', url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html', likes: 5, __v: 0 },
      { _id: '5a422b3a1b54a676234d17f9', title: 'Canonical string reduction', author: 'Edsger W. Dijkstra', url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html', likes: 12, __v: 0 }]

    const result = listHelper.totalLikes(multiBlogs)

    expect(result).toBe(24)
  })

  test('singleBlog', () => {
    const singleBlog = [
      { _id: '5x6', title: 'How to make cat videos', author: 'Nelson P', url: 'cats.nz', likes: 555, __v: 0 }]

    const result = listHelper.totalLikes(singleBlog)

    expect(result).toBe(555)
  })
})

describe('favorite blog', () => {
  test('multiBlog', () => {
    const multiBlogs = [{ _id: '5a422a851b54a676234d17f7', title: 'React patterns', author: 'Michael Chan', url: 'https://reactpatterns.com/', likes: 7, __v: 0 },
      { _id: '5a422aa71b54a676234d17f8', title: 'Go To Statement Considered Harmful', author: 'Edsger W. Dijkstra', url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html', likes: 5, __v: 0 },
      { _id: '5a422b3a1b54a676234d17f9', title: 'Canonical string reduction', author: 'Edsger W. Dijkstra', url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html', likes: 12, __v: 0 }]

    const result = listHelper.favoriteBlog(multiBlogs)

    expect(result).toEqual({ title: multiBlogs[2].title, author: multiBlogs[2].author, likes: multiBlogs[2].likes })
  })

  test('NegativeBlogs', () => {
    const duoBlogNegative = [
      { _id: '5x6', title: 'How to not make cat videos', author: 'Nelson Q', url: 'catsnot.to', likes: -10, __v: 0 }, { _id: '577x6o', title: 'How to make cat videos', author: 'Nelson P', url: 'cats.nz', likes: -2, __v: 0 }]

    const result = listHelper.favoriteBlog(duoBlogNegative)

    expect(result).toEqual({ title: duoBlogNegative[1].title, author: duoBlogNegative[1].author, likes: duoBlogNegative[1].likes })
  })
})
