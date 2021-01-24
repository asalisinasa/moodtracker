import React from 'react'

function noop() { }

interface IAuthContext {
    token: string | null
    userId: string | null
    login: (params: { userId: string, token: string }) => void
    logout: () => void
    isAuthenticated: boolean
}

export const AuthContext = React.createContext<Partial<IAuthContext>>({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})
