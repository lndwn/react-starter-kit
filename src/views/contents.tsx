import { useState } from 'react'
import { WithIntersectionObserver } from 'utils/use-intersection-observer'
import { usePrefersColorScheme } from 'utils/use-prefers-color-scheme'
import { useNetworkInformation } from 'utils/use-network-information'

export const Contents = () => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const intersectionObserverCallback: IntersectionObserverCallback = (e) => {
    const [entry] = e
    if (entry.isIntersecting) setIsIntersecting(true)
    else setIsIntersecting(false)
  }

  const networkInformation = useNetworkInformation()
  return (
    <ul>
      <li>
        usePrefersColorScheme
        <pre>
          prefers-color-scheme:{' '}
          {JSON.stringify(usePrefersColorScheme(), null, 2)}
        </pre>
      </li>
      <WithIntersectionObserver callback={intersectionObserverCallback}>
        {({ ref }) => (
          <li ref={ref}>
            useIntersectionObserver
            <pre>isIntersecting: {isIntersecting.toString()}</pre>
          </li>
        )}
      </WithIntersectionObserver>
      <li>
        useNetworkInformation
        <pre>
          networkInformation: {JSON.stringify(networkInformation, null, 2)}
        </pre>
      </li>
    </ul>
  )
}
