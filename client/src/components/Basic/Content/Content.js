import {
  Switch,
  Route,
} from 'react-router-dom'
import './Content.scss';

import Home from '../../Pages/Home/Home'
import AddArticle from '../../Pages/AddArticle/AddArticle'
import EditArticle from '../../Pages/EditArticle/EditArticle'
import CategoryPage from '../../Pages/Category/CategoryPage'
import SubcategoryPage from '../../Pages/Subcategory/SubcategoryPage'
import Article from '../../Pages/Article/Article'

import TestPage from '../../Pages/TestPage/TestPage'

export default function Content(props) {

  return (
    <main className="content">
      <div className="content-container">
          <Switch>
            <Route exact path="/">
              <Home categories={props.categories} subcategories={props.subcategories} />
            </Route>
            <Route exact path="/add-article">
              <AddArticle />
            </Route>
            {props.categories.map(category => (
              <Route exact path={`/${category.category_url}`} key={category.id_category}>
                <CategoryPage id={category.id_category} title={category.category_name} url={category.category_url} />
              </Route>
            ))}
            {props.subcategories.map(subcategory => (
              <Route exact path={`/:category/${subcategory.subcategory_url}`} key={subcategory.id_subcategory}>
                <SubcategoryPage id={subcategory.id_subcategory} parent={subcategory.subcategory_parent} title={subcategory.subcategory_name} url={subcategory.subcategory_url}/>
              </Route>
            ))}
            {props.articles.map(article => (
              <Route exact path={`/:category/:subcategory/${article.article_url}`} key={article.id_article}>
                <Article id={article.id_article}
                  title={article.article_title}
                  url={article.article_url}
                  content={article.article_content}
                  date={article.article_date}
                  author={article.article_author}
                />
              </Route>
            ))}
            {props.articles.map(article => (
              <Route exact path={`/:category/:subcategory/${article.article_url}/edit`} key={article.id_article}>
                <EditArticle article={article} />
              </Route>
            ))}
            <Route exact path='/test'>
              <TestPage/>
            </Route>
          </Switch>
      </div>
    </main>
  )
}
