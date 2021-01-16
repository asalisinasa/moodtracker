import React from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components'

const ListPage = () => {
  const { token } = React.useContext(AuthContext)
  const { request, loading } = useHttp()
  const [notes, setNotes] = React.useState(null)

  const fetchData = React.useCallback(async () => {
    try {
      const data = await request(`/api/note`, 'GET', null,
        { Authorization: `Bearer ${token}` })
      setNotes(data)
    } catch (error) {

    }
  }, [token, request])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  if (loading || !notes) {
    return <Loader />
  }

  return (
    <div>
      <h1>ListPage</h1>
      <ul>
        {notes.map((item, key) =>
          <li key={key}>
            <h2>{item.mood}</h2>
            <p>{item.comment}</p>
            <p>{item.date}</p>
          </li>)
        }
      </ul>
    </div>
  )
}

export default ListPage
