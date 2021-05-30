import './SubcategoryPage.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ArticlesDataService from '../../../services/articles.service'

export default function SubcategoryPage(props) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    ArticlesDataService.getByCatId(props.id)
      .then((res) => {
        setArticles(res.data)
      })
  }, [props.id])

  return (
    <section className="SubcategoryPage">
      <h1>{props.title}</h1>
      <ol>
        {articles.map(article => (
          <li key={article.id_article}>
            <Link to={`/${props.url}/${article.article_url}`}>
              {article.article_title}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
