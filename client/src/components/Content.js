import {
  Switch,
  Route,
} from 'react-router-dom'
import '../scss/Content.scss';

import Home from './Home'
import AddArticle from './AddArticle'
import CategoryPage from './CategoryPage'

export default function Content() {
  return (
    <main className="content">
      <div className="content-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/add-article">
              <AddArticle />
            </Route>
            <Route exact path="/:category">
              <CategoryPage />
            </Route>
          </Switch>
      </div>
    </main>
  )
}
