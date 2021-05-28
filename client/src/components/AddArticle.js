import '../scss/AddArticle.scss'

import { useState, useEffect } from 'react'
import MDEditor from '@uiw/react-md-editor'
import CategoriesDataService from '../services/categories.service'
import ArticleDataService from '../services/articles.service'

export default function AddArticle() {

  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState([])

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

    fetchCategories()    
    return () => cleanupFunction = true
  }, [])

  const selectCategory = (value) => {
    CategoriesDataService.getByParent(value)
      .then((res) => {
        setSubcategories(res.data)
      })
  }

 

  const [articleTitle, setArticleTitle] = useState("")
  const [articleCategory, setArticleCategory] = useState("")
  const [articleUrl, setArticleUrl] = useState("")
  const [articleContent, setArticleContent] = useState("")

  const createArticle = (e) => {
    e.preventDefault()
    let articleData = {
      article_title: articleTitle,
      article_url: articleUrl,
      article_category: articleCategory,
      article_content: articleContent,
      article_author: 1 // FIXME: ИЗМЕНИТЬ НА ДИНАМИКУ
    }
    ArticleDataService.create(articleData)
      .then((res) => {
        if (res.status === 200) {
          window.location.reload()
        }
      })
  }

  return(
    <div className="AddArticle">
      <h1>Добавить запись</h1>
      <form onSubmit={createArticle}>
        <div className="form-items">
          <div className="form-item">
            <label htmlFor="">Название статьи</label>
            <input type="text" name="" 
              placeholder="Например: Тестовая статья" 
              onChange={(e) => setArticleTitle(e.target.value)} 
            />
          </div>
          <div className="form-item">
            <select defaultValue="0" onChange={(e) => selectCategory(e.target.value)}>
            <option disabled value="0">Выберите категорию</option>
              {categories.map(category => (
                <option value={category.id_category} key={category.id_category}>
                  {category.category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-item">
            <select onChange={(e) => setArticleCategory(e.target.value)} defaultValue="0">
              <option disabled value="0">Выберите подкатегорию</option>
              {subcategories.map(subcategory => (
                <option value={subcategory.id_category} key={subcategory.id_category}>
                  {subcategory.category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="">URL статьи</label>
            <input type="text" name="" 
              placeholder="Например: testovaya_statja"
              onChange={(e) => setArticleUrl(e.target.value)}  
            />
          </div>
          <div className="form-item">
            <label htmlFor="">Текст статьи</label>
            <MDEditor value={articleContent} onChange={setArticleContent} />
          </div>
          <div className="form-item">
            <button type="submit">Сохранить</button>
          </div>
        </div>
      </form>
    </div>
  )
}