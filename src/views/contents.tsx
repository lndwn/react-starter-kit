import { useRef } from 'react'
import { WithIntersectionObserver } from 'utils/use-intersection-observer'
import { usePrefersColorScheme } from 'utils/use-prefers-color-scheme'
import { useNetworkInformation } from 'utils/use-network-information'
import { ContainerQueriesProvider } from 'enhancers/container-queries-provider'
import { Container, Flex } from './cq-container'

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
                <Flex px={1} smColor="blue" mdColor="red" lgColor="green">
                  I&apos;m inside a container query!
                </Flex>
              </li>
            </>
          )}
        </WithIntersectionObserver>
      </ul>
    </ContainerQueriesProvider>
  )
}
