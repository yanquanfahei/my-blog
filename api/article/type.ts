import type { IHeading } from 'remark-heading-anchor'

// 文章列表项类型定义
export interface IArticle {
  id: string;
  date: string;
  title: string;
  description: string;
  cover: string;
  [propName: string]: any
}

// 文章详情数据接口
export interface IArticleDetail extends IArticle {
  headings: IHeading[];
  mdContent: string;
}