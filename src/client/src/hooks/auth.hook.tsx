import React from 'react'

const STORAGE_NAME = 'userData'

export const useAuth = () => {
  const [token, setToken] = React.useState(null)
  const [isReady, setIsReady] = React.useState(false)
  const [userId, setUserId] = React.useState(null)

  const login = React.useCallback(({ userId, token }) => {
    setToken(token)
    setUserId(userId)

    localStorage.setItem(STORAGE_NAME, JSON.stringify({
      userId,
      token
    }))
  }, [])

  const logout = React.useCallback(() => {
    setToken(null)
    setUserId(null)
    localStorage.removeItem(STORAGE_NAME)
  }, [])

  React.useEffect(() => {
    const storageName = localStorage.getItem(STORAGE_NAME)

    if (storageName) {
      const data = JSON.parse(storageName)

      if (data && data.token) {
        login({ token: data.token, userId: data.userId })
      }
      setIsReady(true)
    }
  }, [login])

  return { login, logout, token, userId, isReady }
}
