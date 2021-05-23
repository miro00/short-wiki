import '../scss/Home.scss'

import { useState, useEffect } from 'react'

import CategoriesDataService from '../services/categories.service'
import CategoryBlock from './CategoryBlock'

export default function Home() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    CategoriesDataService.getAll()
      .then((res) => {
        setCategories(res.data)
      })
  }, [])
  
  return (
    <div className="Home">
      <h1>Категории</h1>
      <div className="categories">
        {categories.map(category => (
         <CategoryBlock key={category.id_category} title={category.category_name} url={category.category_url} />
        ))}
      </div>
    </div>
  )
}