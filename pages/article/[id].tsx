import type { NextPage } from "next";
import { getAllArticlePaths, getArticleDetail } from '../../api/article'
import MarkDown from '@/components/MarkDown';
import { IArticleDetail } from "api/article/type";
import cls from 'classnames'
import { useState } from "react";

const ArticleDetail:NextPage<IArticleDetail> = ({ mdContent, headings }) => {
  const [activePoint, setActivePoint] = useState('')

  return (
    <div className="flex container mx-auto justify-around mt-6">
      <div className="flex-1 mr-8 mode-bg mode-text-color rounded-md py-3 px-6">
        <MarkDown mdContent={ mdContent } />
      </div>
      <div className="hidden md:block mode-bg px-3 py-2 mode-text-color rounded-md shrink-0">
        <div className="border-b border-slate-300 dark:border-slate-50/[0.06] py-1">目录</div>
        <ul className="py-1">
          { headings.map((item, i) => {
            return (
              <li
                className={cls({
                  'ml-4': item.depth === 3,
                  'text-sky-500': activePoint === item.id
                })}
                key={i}
              >
                <a 
                  href={`#${item.id}`}
                  onClick={() => setActivePoint(item.id)}
                >{ item.value }</a>
              </li>
            )
          }) }
        </ul>
      </div>
    </div>
  )
}


export default ArticleDetail

export async function getStaticPaths() {
  const paths = getAllArticlePaths()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: {params: { id: string }}) {
  const data = await getArticleDetail(params.id)

  return {
    props: {
      ...data
    }
  }
}