import './Sidebar.scss';
import SidebarListItem from './SidebarItem';

export default function Sidebar(props) {

  const displayCategories = (props) => {
    if (props.categories.length > 0) {
      return (
        <ul className="menu-list">
          {props.categories.map(category => (
            <SidebarListItem
              key={category.id_category}
              id={category.id_category}
              title={category.category_name}
              url={category.category_url}
            />
          ))}
        </ul>   
      )
    } else {
      return (<div className="categories-empty">Категории не найдены</div>)
    }
  }
  return (
    <div className="sidebar-wrap">
      <aside className="sidebar">
        {displayCategories(props)}
      </aside>
    </div>
  )
}

