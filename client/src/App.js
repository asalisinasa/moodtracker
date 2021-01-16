import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Loader } from './components'

function App() {
  const { token, userId, login, logout, isReady } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!isReady) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{ token, userId, login, logout }}>
      <Router>
        <div>
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
