import './CreateCategoryForm.scss'
import { useState } from 'react'
import CategoryDataService from '../../../services/categories.service'
import SelectInput from '../../Basic/controls/SelectInput/SelectInput'

export default function CreateCategoryForm(props) {

  const [subcategoryName, setSubcategoryName] = useState("")
  const [subcategoryURL, setSubcategoryURL] = useState("")
  const [selectCategory, setSelectCategory] = useState("")
  // const [categoryURL, setCategoryURL] = useState("")

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
            <SelectInput
              defaultValue={0}
              defaultTitle="Выберите категорию"
              items={props.categories}
              id="createSubcategory_select" // FIXME: придумать нормальный id
              setValue={(id) => {
                  setSelectCategory(id)
                }
              }
            />
          </div>
          <div className="form-item">
            <label htmlFor="categoryTitle">Название подкатегории</label>
            <input type="text" name="categoryTitle" placeholder="Например: Статьи"
              onChange={(e) => setSubcategoryName(e.target.value)} />
          </div>
          <div className="form-item">
            <label htmlFor="categoryURL">URL подкатегории</label>
            <input type="text" name="categoryURL" placeholder="Например: react/articles"
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
