import './AddArticle.scss'

import { useState, useEffect, useContext } from 'react'
import MDEditor from '@uiw/react-md-editor'
import CategoriesDataService from '../../../services/categories.service'
import SubcategoriesDataService from '../../../services/subcategories.service'
import ArticleDataService from '../../../services/articles.service'
import { AppContext } from '../../../context'
import CreateCategoryForm from './CreateCategoryForm'
import CreateSubcategoryForm from './CreateSubcategoryForm'

import SelectInput from '../../Basic/controls/SelectInput/SelectInput'

export default function AddArticle() {

  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState([])
  const [showCatForm, setshowCatForm] = useState(false)
  const [showSubcatForm, setShowSubcatForm] = useState(false)

  useEffect(() => {
    let cleanupFunction = false
    const fetchCategories = async () => {
      try {
        await CategoriesDataService.getAll()
          .then((res) => {
            if (!cleanupFunction) {
              let items = []
              let item = {}
              res.data.forEach(data => {
                item = {
                  id: data.id_category,
                  title: data.category_name
                }
                items.push(item)
              })
              setCategories(items)
            }
          })
      } catch (e) {
        console.error(e.message)
      }
    }

    fetchCategories()
    return () => cleanupFunction = true
  }, [])

  const selectCategory = (value) => {
    SubcategoriesDataService.getByParentId(value)
      .then((res) => {
        let item = {}
        let items = []
        res.data.forEach(data => {
          item = {
            id: data.id_subcategory,
            title: data.subcategory_name
          }
          items.push(item)
        })
        setSubcategories(items)
      })
  }


  const [articleTitle, setArticleTitle] = useState("")
  const [articleCategory, setArticleCategory] = useState("")
  const [articleUrl, setArticleUrl] = useState("")
  const [articleContent, setArticleContent] = useState("")
  const { loginStatus } = useContext(AppContext)

  const createArticle = (e) => {
    e.preventDefault()
    let articleData = {
      article_title: articleTitle,
      article_url: articleUrl,
      article_category: articleCategory,
      article_content: articleContent,
      article_author: loginStatus.id
    }
    ArticleDataService.create(articleData)
      .then((res) => {
        if (res.status === 200) {
          window.location.reload()
        }
      })
  }

  const showCreateCategoryForm = (val) => {
    setshowCatForm(val)
  }

  const showCreateSubcategoryForm = (val) => {
    setShowSubcatForm(val)
  }

  if (showCatForm || showSubcatForm) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  return(
    <div className="AddArticle">
      {showCatForm ? <CreateCategoryForm updateData={showCreateCategoryForm} /> : null}
      {showSubcatForm ? <CreateSubcategoryForm updateData={showCreateSubcategoryForm} categories={categories} /> : null}
      <h1>Добавить запись</h1>
      <form onSubmit={createArticle} className="article-form">
        <div className="form-items">
          <div className="form-item">
            <SelectInput
              id="selectCategory"
              defaultValue={0}
              defaultTitle="Выберите категорию"
              items={categories}
              setValue={selectCategory}
            />
            <div className="btn createSubcategory" onClick={showCreateCategoryForm}>+</div>
          </div>
          <div className="form-item">
            <SelectInput
              id="selectSubcategory"
              defaultValue={0}
              defaultTitle="Выберите подкатегорию"
              items={subcategories}
              setValue={(val) => setArticleCategory(val)}
            />
            <div className="btn createSubcategory" onClick={showCreateSubcategoryForm}>+</div>
          </div>
          <div className="form-item">
            <label htmlFor="">Название статьи</label>
            <input type="text" name=""
              placeholder="Например: Тестовая статья"
              onChange={(e) => setArticleTitle(e.target.value)}
            />
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
