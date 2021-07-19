import * as React from 'react'

/**
 * createGuardedContext includes a default undefined check
 * such that no undefined checked will be required
 * and no default values are needed
 */
export const createGuardedContext = <C extends unknown | null>() => {
  const guardedContext = React.createContext<C | undefined>(undefined)
  const useGuardedContext = () => {
    const value = React.useContext(guardedContext)
    if (value === undefined) {
      throw new Error('Consumer must be inside a Provider with a value')
    }
    return value
  }

  return [useGuardedContext, guardedContext.Provider] as const
}
