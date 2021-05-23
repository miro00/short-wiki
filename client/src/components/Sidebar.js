import '../scss/Sidebar.scss';
import Search from "./Search";
import SidebarListItem from './SidebarListItem';
import { useState, useEffect } from 'react'

import CategoriesDataService from '../services/categories.service'

function Sidebar() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    CategoriesDataService.getAll()
      .then((res) => {
        setCategories(res.data)
      })
  }, [])

  return (
    <div className="sidebar-wrap">
      <aside className="sidebar">
        <Search />
        <ul className="menu-list">
          {categories.map(category => (
            <SidebarListItem 
              key={category.id_category} 
              title={category.category_name}
              url={category.category_url} 
              subcategories={category.subcategories}
            />
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar;