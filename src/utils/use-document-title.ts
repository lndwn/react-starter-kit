import * as React from 'react'

/**
 * simple hook allowing setting the html document title
 */
export const useDocumentTitle = (title: string, retainOnUnmount = false) => {
  const defaultTitle = React.useRef(document.title)

  React.useEffect(() => {
    document.title = title
  }, [title])

  React.useEffect(() => {
    return () => {
      if (!retainOnUnmount) {
        document.title = defaultTitle.current
      }
    }
  }, [])
}
