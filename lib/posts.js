import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts')

export async function getPostData(slug) {
  const fullPath = path.join(POSTS_DIRECTORY, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  }
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')

    const fullPath = path.join(POSTS_DIRECTORY, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      slug,
      ...matterResult.data,
    }
  })

  return allPostsData.sort((a, b) => (b.date < a.date ? -1 : 1))
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY)

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    }
  })
}
