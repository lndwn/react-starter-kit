import React from 'react'

/**
 * simple hook allowing setting the html document title
 * @param {string} title - the title to set
 */
export const useDocumentTitle = (title: string) => {
  React.useEffect(() => {
    if (document?.title) {
      document.title = title
    }
  }, [title])
}
