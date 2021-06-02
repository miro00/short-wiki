import './Article.scss'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MDEditor from '@uiw/react-md-editor'
import { Person, CalendarToday, Edit, Delete } from '@material-ui/icons'
import Navigation from '../../Basic/Navigation/Navigation'
import UserServiceData from '../../../services/users.service'

export default function Article(props) {
  const [author, setAuthor] = useState("")
  const location = useLocation()

  useEffect(() => {
  let cleanupFunction = false
  const fetchData = async (id) => {
    try {
      await UserServiceData.getById(id)
        .then((res) => {
          if (!cleanupFunction) setAuthor(res.data[0])
        })
    } catch (e) {
      console.error(e.message);
    }
  }
    fetchData(props.author)
    return () => cleanupFunction = true
  }, [props.author])

  const confirmDelete = () => {
    // TODO: сделать удаление статьи
  }

  return(
    <article className="Article">
      <Navigation />
      <h1>{props.title}</h1>
      <div className="article-head">
        <time dateTime={props.date} className="article-head_date">
          <CalendarToday />
          {new Intl.DateTimeFormat().format(new Date(props.date))}
        </time>
        <div className="article-head_author">
          <Person />
          {author.user_login}
        </div>
        <div className="article-options">
          <Link to={`${location.pathname}/edit`} className="article-options__btn" title="Изменить статью"><Edit /></Link>
          <div className="article-options__btn" onClick={confirmDelete} title="Удалить статью"><Delete /></div>
      </div>
      </div>
      <div className="article-content">
        <MDEditor.Markdown source={props.content}/>
      </div>

    </article>
  )
}
