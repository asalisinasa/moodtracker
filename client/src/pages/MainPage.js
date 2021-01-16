import React from 'react'
import { useHistory } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components'
import { EMood, MOOD_DESCRIPTION, DEFAULT_MOOD } from '../constants'

const MainPage = () => {
  const history = useHistory()
  const { loading, request, error, clearError } = useHttp()
  const [form, setForm] = React.useState(DEFAULT_MOOD)
  const { token } = React.useContext(AuthContext)

  const handleChange = React.useCallback((event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    clearError()
  }, [clearError, form])

  const handleSubmitClick = React.useCallback(async () => {
    try {
      const data = await request('/api/note/create', 'POST', { ...form }, { Authorization: `Bearer ${token}` })
      setForm(DEFAULT_MOOD)
      history.push(`/note/${data.note._id}`)
    } catch (error) {

    }
  }, [request, form, token, history])

  return (
    <React.Fragment>
      {loading ? <Loader /> : <React.Fragment>
        <h1>Как дела?</h1>
        <h2>{MOOD_DESCRIPTION[form.mood]}</h2>
        <input type="range" id="mood" name="mood"
          min={EMood.TERRIBLE} max={EMood.AMAZING} value={form.mood}
          onChange={handleChange}
          step="1" />
        <textarea id="comment" name="comment" value={form.comment} placeholder="Мысли" onChange={handleChange} />
        <button onClick={handleSubmitClick}>Сохранить</button>
        <div>{error}</div>
      </React.Fragment>}
    </React.Fragment>
  )
}

export default MainPage
