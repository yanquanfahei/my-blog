import React from 'react'
import type { NextPage } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import HeadingComponent from './components/HeadingComponent'

interface IProps {
  mdContent: string;
}

const MarkDown: NextPage<IProps> = ({ mdContent }) => {

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: HeadingComponent,
        h2: HeadingComponent,
        h3: HeadingComponent,
        h4: HeadingComponent,
        h5: HeadingComponent,
        h6: HeadingComponent,
      }}
      includeElementIndex
    >
      { mdContent }
    </ReactMarkdown>
  )
}


export default MarkDown