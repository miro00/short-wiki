import './EditArticle.scss'

import MDEditor from '@uiw/react-md-editor'
import ArticleDataService from '../../../services/articles.service'

export default function EditArticle(props) {

  const createArticle = (e) => {
    e.preventDefault()
    let articleData = {
      article_title: document.querySelector('input[name="article-title"]').value,
      article_url: document.querySelector('input[name="article-url"]').value,
      article_content: document.querySelector('textarea').value,
    }
    ArticleDataService.update(props.article.id_article, articleData)
      .then((res) => {
        if (res.status === 200) {
          window.location.reload()
        }
      })
  }


  return (
    <div className="EditArticle">
      <h1>Изменить запись</h1>
      <form onSubmit={createArticle} className="article-form">
        <div className="form-items">
          <div className="form-item">
            <label htmlFor="article-title">Название статьи</label>
            <input type="text" name="article-title"
              placeholder="Например: Тестовая статья"
              defaultValue={props.article.article_title}
            />
          </div>
          <div className="form-item">
            <label htmlFor="article-url">URL статьи</label>
            <input type="text" name="article-url"
              defaultValue={props.article.article_url}
              placeholder="Например: testovaya_statja"             
            />
          </div>
          <div className="form-item">
            <label htmlFor="">Текст статьи</label>
            <MDEditor value={props.article.article_content} />
          </div>
          <div className="form-item">
            <button type="submit">Сохранить</button>
          </div>
        </div>
      </form>
    </div>
  )
}