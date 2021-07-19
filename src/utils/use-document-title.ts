import * as React from 'react'
import { useLocation } from 'react-router'

export const useDocumentTitle = (title: string) => {
  const location = useLocation()
  React.useLayoutEffect(() => {
    document.title = title
  }, [location.pathname, title])
}

interface WithDocumentTitleProps {
  title: string
}

export const WithDocumentTitle = (props: WithDocumentTitleProps) => {
  useDocumentTitle(props.title)
  return null
}
