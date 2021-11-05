import { useEffect, useState } from 'react'

export const usePermissions = (permission: PermissionDescriptor) => {
  const [status, setStatus] = useState<PermissionStatus | null>(null)

  const query = async (permission: PermissionDescriptor) => {
    try {
      const status = await navigator.permissions.query(permission)
      setStatus(status)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    query(permission)
  }, [])

  return status
}
