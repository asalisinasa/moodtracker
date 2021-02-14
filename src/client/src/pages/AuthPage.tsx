import React from "react"
import { useHttp } from "../hooks/http.hook"
import { AuthContext } from "../context/AuthContext"

const AuthPage: React.FunctionComponent = () => {
  const { login } = React.useContext(AuthContext)
  const { isLoading, request, error, clearError } = useHttp()
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  })

  const handleChange = React.useCallback(
    (event) => {
      clearError()
      setForm({ ...form, [event.target.name]: event.target.value })
    },
    [form, clearError]
  )

  const handleRegisterClick = async () => {
    try {
      await request("/api/auth/register", "POST", { ...form })
    } catch {
      // TODO
    }
  }

  const handleLoginClick = React.useCallback(async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form })
      login && login({ userId: data.userId, token: data.token })
    } catch {
      // TODO
    }
  }, [form, request, login])

  return (
    <div>
      <h1>Mood Tracker</h1>
      <div>
        <h2>Авторизуйтесь</h2>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Введите email"
          onChange={handleChange}
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Введите пароль"
          onChange={handleChange}
        />
        <button onClick={handleLoginClick} disabled={isLoading}>
          Войти
        </button>
        <button onClick={handleRegisterClick} disabled={isLoading}>
          Регистрация
        </button>
        {error && <h3>{error}</h3>}
      </div>
    </div>
  )
}

export default AuthPage
