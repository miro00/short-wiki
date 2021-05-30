import './Sidebar.scss';
import SidebarListItem from './SidebarItem';
import { useState, useEffect } from 'react'

import CategoriesDataService from '../../../services/categories.service'

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
