import SelectInput from '../../Basic/controls/SelectInput/SelectInput'
import { useState, useEffect } from 'react'
import CategoriesDataService from '../../../services/categories.service'

export default function TestPage() {

  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

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

  console.log(selectedCategory);

  const selectCategory = (val) => {
    setSelectedCategory(val)
  }
  return(
    <div className="TestPage">
      <SelectInput
        defaultValue={0}
        defaultTitle='Выберите категорию'
        items={categories}
        setValue={selectCategory}
      />
    </div>
  )
}
