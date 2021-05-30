import './CreateCategoryForm.scss'
import { useState } from 'react'
import CategoryDataService from '../../../services/categories.service'

export default function CreateCategoryForm(props) {

  const [categoryName, setCategoryName] = useState("")
  const [categoryURL, setCategoryURL] = useState("")

  const createCategory = (e) => {
    e.preventDefault()
    CategoryDataService.createCategory({category_name: categoryName, category_url: categoryURL})
      .then((res) => {
        window.location.reload()
      })
  }

  return(
    <div className="popup" onClick={(e) => {
        if (e.target.classList.contains('popup')) {
          props.updateData(false)
        }
      }
    }>
      <form className="CreateCategoryForm" onSubmit={createCategory}>
        <h2>Добавить категорию</h2>
        <div className="form-items">
          <div className="form-item">
            <label htmlFor="categoryTitle">Название категории</label>
            <input type="text" name="categoryTitle" placeholder="Например: React.js"
              onChange={(e) => setCategoryName(e.target.value)} />
          </div>
          <div className="form-item">
            <label htmlFor="categoryURL">URL категории</label>
            <input type="text" name="categoryURL" placeholder="Например: react"
              onChange={(e) => setCategoryURL(e.target.value)}/>
          </div>
          <div className="form-item">
            <button type="submit">Сохранить</button>
          </div>
        </div>
      </form>
    </div>
  )
}
