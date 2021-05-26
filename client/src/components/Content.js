import {
  Switch,
  Route,
} from 'react-router-dom'
import '../scss/Content.scss';
import { useState, useEffect } from 'react'

import CategoriesDataService from '../services/categories.service'
import ArticleDataService from '../services/articles.service'

import Home from './Home'
import AddArticle from './AddArticle'
import CategoryPage from './CategoryPage'
import SubcategoryPage from './SubcategoryPage'
import Article from './Article'

export default function Content() {

  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState([])
  const [articles, setArticles] = useState([])

  useEffect(() => {
    let cleanupFunction = false

    const fetchCategories = async () => {
      try {
        await CategoriesDataService.getAll()
          .then((res) => {
            if (!cleanupFunction) setCategories(res.data)
          })
      } catch (e) {
        console.error(e.message)
      }
    }

    const fetchSubcategories = async () => {
      try {
        await CategoriesDataService.getSubCategories()
          .then((res) => {
            if (!cleanupFunction) setSubcategories(res.data)
          })
      } catch (e) {
        console.error(e.message)
      }
    }

    const fetchArticles = async () => {
      try {
        await ArticleDataService.getAll()
          .then((res) => {
            if (!cleanupFunction) setArticles(res.data)
          })
      } catch (e) {
        console.error(e.message)
      }   
    }

    fetchCategories()
    fetchSubcategories()
    fetchArticles()

    return () => cleanupFunction = true

  }, [])

  // useEffect(() => {
  //   CategoriesDataService.getAll()
  //     .then((res) => {
  //       setCategories(res.data)
  //     })
  //   CategoriesDataService.getSubCategories()
  //     .then((res) => {
  //       setSubcategories(res.data)
  //     })
  //   ArticleDataService.getAll()
  //     .then((res) => {
  //       setArticles(res.data)
  //     })
  // }, [])

  return (
    <main className="content">
      <div className="content-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/add-article">
              <AddArticle />
            </Route>
            {categories.map(category => (
              <Route exact path={`/${category.category_url}`} key={category.id_category}>
                <CategoryPage id={category.id_category} title={category.category_name} url={category.category_url} />
              </Route>
            ))}
            {subcategories.map(subcategory => (
              <Route exact path={`/${subcategory.category_url}`} key={subcategory.id_category}>
                <SubcategoryPage id={subcategory.id_category} title={subcategory.category_name} url={subcategory.category_url} />
              </Route>
            ))}
            {articles.map(article => (
              <Route exact path={`/:category/:subcategory/${article.article_url}`} key={article.id_article}>
                <Article id={article.id_article} 
                  title={article.article_title} 
                  url={article.article_url} 
                  content={article.article_content} 
                  date={article.article_date}
                  author={article.article_author}
                />
              </Route>
            ))}
          </Switch>
      </div>
    </main>
  )
}
