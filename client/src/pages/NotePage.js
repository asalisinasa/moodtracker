import React from 'react'
import { useParams } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components'
import { MOOD_DESCRIPTION } from '../constants'

const NotePage = () => {
  const { token } = React.useContext(AuthContext)
  const { request, loading } = useHttp()
  const { id } = useParams()
  const [note, setNote] = React.useState(null)

  const fetchData = React.useCallback(async () => {
    try {
      const data = await request(`/api/note/${id}`, 'GET', null,
        { Authorization: `Bearer ${token}` })
      setNote(data)
    } catch (error) {

    }
  }, [token, id, request])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  if (loading || !note) {
    return <Loader />
  }

  console.log(note)
  return (
    <div>
      <h1>NotePage</h1>
      <p>{note.comment || 'Нет комментария'}</p>
      <p>{note.date}</p>
      <p>{MOOD_DESCRIPTION[note.mood]}</p>
    </div>
  )
}

export default NotePage
