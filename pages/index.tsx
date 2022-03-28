import { useEffect } from 'react'
import type { NextPage } from 'next'
import Router from 'next/router'

const Index: NextPage = ({  }) => {
  useEffect(() => {
    Router.replace('/article')
  })
  return (
   <></>
  )
}

export default Index
