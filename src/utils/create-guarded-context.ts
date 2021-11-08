import {
  createContext as createReactContext,
  useContext as useReactContext,
} from 'react'

export const createContext = <C extends unknown | null>() => {
  const context = createReactContext<C | undefined>(undefined)
  const useContext = () => {
    const value = useReactContext(context)
    if (value === undefined) {
      throw new Error('Consumer must be inside a Provider with a value')
    }
    return value
  }

  const WithContextValue = (props: {
    children: (provided: C) => JSX.Element
  }) => props.children(useContext())

  return [useContext, context.Provider, WithContextValue] as const
}
