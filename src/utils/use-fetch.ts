import * as React from 'react'
import { useInterval } from './use-interval'

interface UseFetchOptions {
  init: RequestInit
  parseAs?: 'json' | 'text' | 'blob' | 'arrayBuffer'
  poll?: boolean
  interval?: number
}

export const useFetch = <ResBody>(url: string, options: UseFetchOptions) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [response, setResponse] = React.useState<Response | null>(null)
  const [responseBody, setResponseBody] = React.useState<ResBody | null>(null)
  const [responseError, setResponseError] = React.useState<Error | null>(null)
  const [bodyError, setBodyError] = React.useState<Error | null>(null)
  const controller = React.useMemo(() => new AbortController(), [url])
  const request = React.useMemo(
    () => new Request(url, { ...options.init, signal: controller.signal }),
    [url]
  )

  const getResponse = async () => {
    try {
      setIsLoading(true)
      setResponse(await fetch(request))
    } catch (err) {
      setIsLoading(false)
      setResponseError(err)
    }
  }

  React.useEffect(() => {
    getResponse()
  }, [url])

  useInterval(() => getResponse(), {
    interval: options?.interval ?? 5000,
    isEnabled: options?.poll ?? false,
  })

  const getBody = async () => {
    if (response) {
      try {
        setResponseBody(await response[options?.parseAs ?? 'json']())
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        setBodyError(err)
      }
    }
  }

  React.useEffect(() => {
    getBody()
  }, [response])

  return {
    isLoading,
    response,
    responseBody,
    responseError,
    bodyError,
    controller,
  }
}
