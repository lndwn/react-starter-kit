import * as React from 'react'

export const useDocumentTitle = (title?: string) => {
  const [documentTitle, setDocumentTitle] = React.useState<string | undefined>(
    title
  )

  React.useEffect(() => {
    if (title) setDocumentTitle(title)
  }, [title])

  React.useEffect(() => {
    if (documentTitle) document.title = documentTitle
  }, [documentTitle])
}
