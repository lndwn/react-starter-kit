import * as React from 'react'
import { useFetch } from 'utils/use-fetch'

export const App = () => {
  const thing = useFetch(
    'https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty',
    {}
  )
  return <>Hello World</>
}
