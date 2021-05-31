import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SubcategoriesDataService from '../../../services/subcategories.service'

export default function CategoryBlock(props) {

  const [subcategories, setSubcategories] = useState([])

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

    fetchSubcategories(props.id)
    
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
        0
      </div>
    </Link>
  )
}