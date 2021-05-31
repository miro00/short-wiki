import './SubcategoryPage.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ArticlesDataService from '../../../services/articles.service'
import CategoriesDataService from '../../../services/categories.service'

export default function SubcategoryPage(props) {
  const [articles, setArticles] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    let isMounted = true
    const fetchArticles = async (id) => {
      try {
        await ArticlesDataService.getByCatId(id)
          .then((res) => {
            if (isMounted) setArticles(res.data)
          })
      } catch (e) {
        console.error(e.message)
      }
    }


    fetchArticles(props.id)
    return () => isMounted = false
    
  }, [props.id, props.parent])

  useEffect(() => {
    let isMounted = true

    const fetchCategories = async (id) => {
      try {
        await CategoriesDataService.getById(id)
          .then((res) => {
            if (isMounted) setCategories(res.data[0])
          })
      } catch (e) {
        console.error(e.message)
      }
    }

    fetchCategories(props.parent)
    return () => isMounted = false

  }, [props.parent])

  return (
    <section className="SubcategoryPage">
      <h1>{props.title}</h1>
      <ol>
        {articles.map(article => (
          <li key={article.id_article}>
            <Link to={`/${categories.category_url}/${props.url}/${article.article_url}`}>
              {article.article_title}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
