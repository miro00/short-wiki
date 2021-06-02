import './Content.scss';

import { Switch, Route } from 'react-router-dom'
import { useContext } from 'react'

import Home from '../../Pages/Home/Home'
import AddArticle from '../../Pages/AddArticle/AddArticle'
import EditArticle from '../../Pages/EditArticle/EditArticle'
import CategoryPage from '../../Pages/Category/CategoryPage'
import SubcategoryPage from '../../Pages/Subcategory/SubcategoryPage'
import Article from '../../Pages/Article/Article'
import NotFound from '../../Pages/404/404'

import TestPage from '../../Pages/TestPage/TestPage'
import Control from '../../Pages/Control/Control'
import { AppContext } from '../../../context';

export default function Content(props) {
  const { loginStatus } = useContext(AppContext)
  return (
    <main className="content">
      <div className="content-container">
          <Switch>
            <Route exact path="/">
              <Home categories={props.categories} subcategories={props.subcategories} />
            </Route>
            {loginStatus.loggedIn ? 
            <Route exact path="/add-article">
              <AddArticle />
            </Route>
            : null}
            {loginStatus.loggedIn ? 
              props.articles.map(article => (
                <Route exact path={`/:category/:subcategory/${article.article_url}/edit`} key={article.id_article}>
                  <EditArticle article={article} />
                </Route>
              ))
            : null}
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
            
            {loginStatus.loggedIn && loginStatus.user_group === 1 ? ( // Страницы доступные для администрации
            <>
              <Route exact path='/control'>
                <Control />
              </Route>
              <Route exact path='/test'>
                <TestPage/>
              </Route>
            </> 
            ) : <></>}

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
      </div>
    </main>
  )
}
