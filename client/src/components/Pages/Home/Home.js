import './Home.scss'

import CategoryBlock from './CategoryBlock'

export default function Home(props) {

  return (
    <div className="Home">
      <h1>Категории</h1>
      <div className="categories">
        <div className="categories-header">
          <div className="categories-header__item">Название</div>
          <div className="categories-header__item"><span>Кол-во подкатегорий</span></div>
          <div className="categories-header__item"><span>Кол-во статей</span></div>
        </div>
        {props.categories.map(category => (
         <CategoryBlock key={category.id_category} id={category.id_category} title={category.category_name} url={category.category_url} />
        ))}
      </div>
    </div>
  )
}
