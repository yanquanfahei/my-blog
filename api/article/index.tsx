import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { AnchorHeading, IArticle, IArticleDetail } from './type'
import remarkHeadings, { Heading } from '@/utils/remark-headings'
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import {visit} from 'unist-util-visit'

const blogDataPath = path.join(process.cwd(), '/blog-data')

export const getArticleList = () => {
  const fileNames = fs.readdirSync(blogDataPath)
  const articleList: IArticle[] = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(blogDataPath, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult: Omit<IArticle, 'id'> = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })


  return articleList.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export const getAllArticlePaths = () => {
  const fileNames = fs.readdirSync(blogDataPath)
  
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export const getArticleDetail: (id: string) => Promise<IArticleDetail> = async (id: string) => {
  const fullPath = path.join(blogDataPath, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  
  const matterResult: Omit<IArticle, 'id'> = matter(fileContents)
  const content = matterResult.content

  const processor = unified()
  .use(remarkParse)
  .use(remarkStringify)
  .use(remarkHeadings)

  const vfile = await processor.process(content);
  const { headings } = vfile.data;

  return {
    id,
    ...matterResult.data,
    headings,
    mdContent: content
  }
}