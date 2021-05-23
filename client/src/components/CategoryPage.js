import '../scss/CategoryPage.scss'
import { useState, useEffect } from 'react'
import { useRouteMatch, useParams } from 'react-router-dom'
import CategoriesDataService from '../services/categories.service'

export default function CategoryPage() {
  let { path, url } = useRouteMatch()
  let { category } = useParams()
  
  const [categoryData, setCategoryData] = useState([])
  
  useEffect(() => {
    CategoriesDataService.getByUrl(category)
      .then((res) => {
        setCategoryData(res)
      })
  }, [])

  return (
    <section className="CategoryPage">
      {/* <h1>{category}</h1> */}
    </section>
  )
}