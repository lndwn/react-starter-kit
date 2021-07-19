import { act, renderHook } from '@testing-library/react-hooks'
import { useFetch } from './use-fetch'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

const server = setupServer(
  rest.post('https://host.tld/foo/bar', (req, res, ctx) =>
    res(ctx.json(req.body))
  )
)
describe('use-fetch', () => {
  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' })
  })

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => {
    server.close()
  })

  test('ideal - sends request', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<{ foo: string[] }>('https://host.tld/foo/bar', {
        init: {
          body: JSON.stringify({
            foo: ['bar', 'baz'],
          }),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      })
    )

    await waitForNextUpdate()

    expect(result.current.responseBody).toMatchObject({
      foo: ['bar', 'baz'],
    })
  })

  test('ideal - parses response body using option', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<{ foo: string[] }>('https://host.tld/foo/bar', {
        init: {
          body: JSON.stringify({
            foo: ['bar', 'baz'],
          }),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
        parseAs: 'text',
      })
    )

    await waitForNextUpdate()

    expect(result.current.responseBody).toEqual('{"foo":["bar","baz"]}')
  })

  test('error - can be cancelled', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<{ foo: string[] }>('https://host.tld/foo/bar', {
        init: {
          body: JSON.stringify({
            foo: ['bar', 'baz'],
          }),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      })
    )

    act(() => {
      result.current.controller.abort()
    })

    await waitForNextUpdate()

    expect(result.current.responseError?.name).toEqual('AbortError')
  })

  test('loading - updates loading state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<{ foo: string[] }>('https://host.tld/foo/bar', {
        init: {
          body: JSON.stringify({
            foo: ['bar', 'baz'],
          }),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      })
    )

    expect(result.current.isLoading).toBeTruthy()

    await waitForNextUpdate()

    expect(result.current.isLoading).toBeFalsy()
  })
})
