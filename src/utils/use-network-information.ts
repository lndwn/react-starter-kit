import { useEffect, useState } from 'react'

interface Connection {
  downlink?: number
  downlinkMax?: number
  effectiveType?: string
  rtt?: number
  saveData?: boolean
  type?: string
}

export const useNetworkInformation = () => {
  const [connection, setConnection] = useState<Connection | null>(null)
  const handleChange = () => {
    setConnection({
      downlink: navigator?.connection?.downlink,
      downlinkMax: navigator?.connection?.downlinkMax,
      effectiveType: navigator?.connection?.effectiveType,
      rtt: navigator?.connection?.rtt,
      saveData: navigator?.connection?.saveData,
      type: navigator?.connection?.type,
    })
  }

  useEffect(() => {
    setConnection({
      downlink: navigator?.connection?.downlink,
      downlinkMax: navigator?.connection?.downlinkMax,
      effectiveType: navigator?.connection?.effectiveType,
      rtt: navigator?.connection?.rtt,
      saveData: navigator?.connection?.saveData,
      type: navigator?.connection?.type,
    })
    navigator.connection?.addEventListener('change', handleChange)
    return () => {
      navigator.connection?.removeEventListener('change', handleChange)
    }
  }, [])

  return connection
}
