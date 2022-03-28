import type { Heading } from '@/utils/remark-headings'

// 文章列表项类型定义
export interface IArticle {
  id: string;
  date: string;
  title: string;
  description: string;
  cover: string;
  [propName: string]: any
}

export type AnchorHeading = Heading & { id: string }

// 文章详情数据接口
export interface IArticleDetail extends IArticle {
  headings: AnchorHeading[];
  mdContent: string;
}