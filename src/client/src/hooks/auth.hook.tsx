import React from "react"

const STORAGE_NAME = "userData"

interface IUseAuth {
  login: AnyFunction
  logout: AnyFunction
  token: NullableId
  userId: NullableId
  isReady: boolean
}

export const useAuth: () => IUseAuth = () => {
  const [token, setToken] = React.useState(null)
  const [isReady, setIsReady] = React.useState(false)
  const [userId, setUserId] = React.useState(null)

  const login = React.useCallback(
    ({ userId: incomingUserId, token: incomingToken }) => {
      setToken(incomingToken)
      setUserId(incomingUserId)
      localStorage.setItem(
        STORAGE_NAME,
        JSON.stringify({
          userId: incomingUserId,
          token: incomingToken,
        })
      )
    },
    []
  )

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
  }, [userId, token, login])

  return { login, logout, token, userId, isReady }
}
