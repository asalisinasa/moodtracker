import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Loader } from './components'
import { theme, GlobalStyle } from './styled'

function App() {
  const { token, userId, login, logout, isReady } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!isReady && isAuthenticated) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{ token, userId, login, logout }}>
      <ThemeProvider theme={theme}>
        <Router>
          {routes}
        </Router>
        <GlobalStyle />
      </ThemeProvider>
    </AuthContext.Provider>
  )
}

export default App
