import React from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router"
import { useHttp } from "../hooks/http.hook"
import { AuthContext } from "../context/AuthContext"
import { Loader } from "../components"
import { MOOD_DESCRIPTION } from "../constants"

export interface INote {
  date: Date
  comment: string
  mood: number
}

interface RouteParameters {
  id?: string
}

const NotePage: React.FunctionComponent = () => {
  const history = useHistory()
  const { token } = React.useContext(AuthContext)
  const { request, isLoading } = useHttp()
  const { id } = useParams<RouteParameters>()
  const [note, setNote] = React.useState<INote | undefined>()

  const fetchData = React.useCallback(async () => {
    try {
      const data = await request(`/api/note/${id}`, "GET", undefined, {
        Authorization: `Bearer ${token}`,
      })
      setNote(data)
    } catch {
      // TODO
    }
  }, [token, id, request])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleHistoryClick = React.useCallback(() => {
    history.push("/note/list")
  }, [history])

  if (isLoading || !note) {
    return <Loader />
  }

  return (
    <div>
      <button onClick={handleHistoryClick}>History</button>
      <h1>NotePage</h1>
      <p>{note?.comment || "Нет комментария"}</p>
      <p>{note?.date}</p>
      <p>{MOOD_DESCRIPTION[note?.mood]}</p>
    </div>
  )
}

export default NotePage
