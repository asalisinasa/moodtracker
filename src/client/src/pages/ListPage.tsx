import React from "react"
import { useHttp } from "../hooks/http.hook"
import { AuthContext } from "../context/AuthContext"
import { Loader } from "../components"
import { INote } from "./NotePage"

const ListPage: React.FunctionComponent = () => {
  const { token, logout } = React.useContext(AuthContext)
  const { request, isLoading } = useHttp()
  const [notes, setNotes] = React.useState<INote[] | undefined>()

  const fetchData = React.useCallback(async () => {
    try {
      const data = await request(`/api/note`, "GET", undefined, {
        Authorization: `Bearer ${token}`,
      })
      setNotes(data)
    } catch {
      // TODO
    }
  }, [token, request])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  if (isLoading || !notes) {
    return <Loader />
  }

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>ListPage</h1>
      {notes && (
        <ul>
          {notes.map((item, key) => (
            <li key={key}>
              <h2>{item.mood}</h2>
              <p>{item.comment}</p>
              <p>{item.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListPage
