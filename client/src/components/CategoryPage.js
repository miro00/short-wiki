import '../scss/CategoryPage.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import CategoriesDataService from '../services/categories.service'

export default function CategoryPage(props) {
  const [subcategories, setSubcategories] = useState([])

  useEffect(() => {
    CategoriesDataService.getByParent(props.id)
      .then((res) => {
        setSubcategories(res.data)
      })

  }, [props.id])

  return (
    <section className="CategoryPage">
      <h1>{props.title}</h1>
      <ol>
        {subcategories.map(subcategory => (
          <li key={subcategory.id_category}>
            <Link to={`/${subcategory.category_url}`}>
              {subcategory.category_name}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}