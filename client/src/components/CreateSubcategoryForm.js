import '../scss/CreateCategoryForm.scss'
import { useState } from 'react'
import CategoryDataService from '../services/categories.service'

export default function CreateCategoryForm(props) {

  const [subcategoryName, setSubcategoryName] = useState("")
  const [subcategoryURL, setSubcategoryURL] = useState("")
  const [selectCategory, setSelectCategory] = useState("")
  const [categoryURL, setCategoryURL] = useState("")


  const getCategoryURL = (e) => {
    setCategoryURL(e.target[e.target.selectedIndex].getAttribute('data-url'))
  }

  const createSubcategory = (e) => {
    e.preventDefault()
    CategoryDataService.createSubcategory({
      category_name: subcategoryName,
      category_url: subcategoryURL,
      category_parent: selectCategory
    }).then((res) => {
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
      <form className="CreateCategoryForm" onSubmit={createSubcategory}>
        <h2>Добавить подкатегорию</h2>
        <div className="form-items">
          <div className="form-item">
            <select defaultValue="0" onChange={(e) => {
                setSelectCategory(e.target.value)
                getCategoryURL(e)
              }
            }>
              <option disabled value="0">Выберите категорию</option>
                {props.categories.map(category => (
                  <option value={category.id_category} key={category.id_category} data-url={category.category_url}>
                    {category.category_name}
                  </option>
                ))}
              </select>
          </div>
          <div className="form-item">
            <label htmlFor="categoryTitle">Название подкатегории</label>
            <input type="text" name="categoryTitle" placeholder="Например: Статьи"
              onChange={(e) => setSubcategoryName(e.target.value)} />
          </div>
          <div className="form-item">
            <label htmlFor="categoryURL">URL подкатегории</label>
            <input type="text" name="categoryURL" placeholder="Например: react/articles"
              key={categoryURL} 
              defaultValue={`${categoryURL}/`}
              onChange={(e) => setSubcategoryURL(e.target.value)}/>
          </div>
          <div className="form-item">
            <button type="submit">Сохранить</button>
          </div>
        </div>
      </form>
    </div>
  )
}