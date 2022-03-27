import { useRef } from 'react'
import { WithIntersectionObserver } from 'utils/use-intersection-observer'
import { usePrefersColorScheme } from 'utils/use-prefers-color-scheme'
import { useNetworkInformation } from 'utils/use-network-information'
import {
  ContainerQueriesProvider,
  Container,
} from 'enhancers/container-queries-provider'
import { Inline } from 'components/layout'

export const Contents = () => {
  const liRefs = useRef<HTMLLIElement[]>([])

  const networkInformation = useNetworkInformation()
  return (
    <ContainerQueriesProvider defaults={{ sm: 200, md: 300, lg: 400 }}>
      <ul>
        <WithIntersectionObserver refs={liRefs}>
          {(isIntersecting) => (
            <>
              <li ref={(element) => element && liRefs.current.push(element)}>
                usePrefersColorScheme
                <pre>
                  prefers-color-scheme:{' '}
                  {JSON.stringify(usePrefersColorScheme(), null, 2)}
                </pre>
              </li>
              <li ref={(element) => element && liRefs.current.push(element)}>
                useIntersectionObserver
                <pre>
                  isIntersecting: {(isIntersecting ?? [])?.[1]?.toString()}
                </pre>
              </li>
              <li ref={(element) => element && liRefs.current.push(element)}>
                useNetworkInformation
                <pre>
                  networkInformation:{' '}
                  {JSON.stringify(networkInformation, null, 2)}
                </pre>
              </li>
              <li ref={(element) => element && liRefs.current.push(element)}>
                GitRevisionPlugin
                <pre>
                  {JSON.stringify(
                    {
                      commit: process.env.COMMITHASH,
                      changedAt: process.env.LASTCOMMITDATETIME,
                      branch: process.env.BRANCH,
                      version: process.env.VERSION,
                    },
                    null,
                    2
                  )}
                </pre>
              </li>
              <li>
                <Container
                  breakpoints={{ sm: 200, md: 400, lg: 600 }}
                  css={{
                    '.sm': { color: 'blue' },
                    '.md': { color: 'red' },
                    '.lg': { color: 'green' },
                  }}>
                  {({ containerRef, ...rest }) => (
                    <Inline ref={containerRef} {...rest}>
                      asdf
                    </Inline>
                  )}
                </Container>
              </li>
            </>
          )}
        </WithIntersectionObserver>
      </ul>
    </ContainerQueriesProvider>
  )
}
