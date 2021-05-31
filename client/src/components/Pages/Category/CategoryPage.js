import './CategoryPage.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import SubcategoriesDataService from '../../../services/subcategories.service'

export default function CategoryPage(props) {
  const [subcategories, setSubcategories] = useState([])

  useEffect(() => {
    SubcategoriesDataService.getByParentId(props.id)
      .then((res) => {
        setSubcategories(res.data)
      })

  }, [props.id])

  return (
    <section className="CategoryPage">
      <h1>{props.title}</h1>
      <ol>
        {subcategories.map(subcategory => (
          <li key={subcategory.id_subcategory}>
            <Link to={`/${props.url}/${subcategory.subcategory_url}`}>
              {subcategory.subcategory_name}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
