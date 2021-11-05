import { useEffect, useMemo, useState } from 'react'
import { useInterval } from './use-interval'

interface UseFetchOptions {
  init: RequestInit
  poll?: boolean
  interval?: number
}

export const useFetch = <ResBody>(url: string, options: UseFetchOptions) => {
  const [isLoading, setIsLoading] = useState(true)
  const [response, setResponse] = useState<Response | null>(null)
  const [responseBody, setResponseBody] = useState<ResBody | null>(null)
  const [responseError, setResponseError] = useState<Error | null>(null)
  const [bodyError, setBodyError] = useState<Error | null>(null)
  const controller = useMemo(() => new AbortController(), [url])
  const request = useMemo(
    () => new Request(url, { ...options.init, signal: controller.signal }),
    [url]
  )

  const getResponse = async () => {
    try {
      setIsLoading(true)
      setResponse(await fetch(request))
    } catch (err) {
      setResponseError(err)
    } finally {
      setIsLoading(false)
    }
  }

  const getBody = async () => {
    if (response) {
      try {
        setResponseBody(await response.json())
        setIsLoading(false)
      } catch (err) {
        setBodyError(err)
      } finally {
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    getBody()
  }, [response])

  useEffect(() => {
    getResponse()
  }, [url])

  useInterval(getResponse, {
    interval: options?.interval ?? 5000,
    isEnabled: options?.poll ?? false,
  })

  useEffect(() => {
    return () => {
      controller.abort()
    }
  }, [])

  return {
    isLoading,
    response,
    responseBody,
    responseError,
    bodyError,
    controller,
  }
}
