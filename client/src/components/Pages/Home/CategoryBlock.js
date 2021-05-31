import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CategoriesDataService from '../../../services/categories.service'
import SubcategoriesDataService from '../../../services/subcategories.service'

export default function CategoryBlock(props) {

  const [subcategories, setSubcategories] = useState([])
  const [articlesCount, setArticlesCount] = useState("")

  useEffect(() => {
    let isMounted = true
    const fetchSubcategories = async (id) => {
      try {
        await SubcategoriesDataService.getByParentId(id)
          .then((res) => {
            if (isMounted) setSubcategories(res.data)
          })
      } catch (e) {
        console.error(e.message)
      }
    }

    const fetchCategories = async (id) => {
      try {
        await CategoriesDataService.getArticles(id)
          .then((res) => {
            if (isMounted) setArticlesCount(res.data.length)
          })
      } catch (e) {
        console.error(e.message)
      }
    }

    fetchSubcategories(props.id)
    fetchCategories(props.id)

    return () => isMounted = false
    
  }, [props.id])

  return (
    <Link to={props.url} className="category">
      <div className="category-item category-title">
        {props.title}
      </div>
      <div className="category-item">
        {subcategories.length}
      </div>
      <div className="category-item">
        {articlesCount}
      </div>
    </Link>
  )
}