import * as React from 'react'

/**
 * simple hook allowing setting the html document title
 */
export const useDocumentTitle = (title: string) => {
  React.useEffect(() => {
    document.title = title
  }, [title])
}
