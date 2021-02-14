import React from "react"

function noop() {}

interface IAuthContext {
  token: NullableId
  userId: NullableId
  login: (parameters: { userId: NullableId; token: NullableId }) => void
  logout: () => void
  isAuthenticated: boolean
}

export const AuthContext = React.createContext<Partial<IAuthContext>>({
  token: null,
  userId: null,
  login: noop,
  logout: noop,
  isAuthenticated: false,
})
