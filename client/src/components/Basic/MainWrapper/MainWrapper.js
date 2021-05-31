import "./MainWrapper.scss";
import {useState, useEffect} from 'react'
import CategoriesDataService from '../../../services/categories.service'
import SubcategoriesDataService from '../../../services/subcategories.service'
import ArticleDataService from '../../../services/articles.service'
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";

export default function MainWrapper() {
  
  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState([])
  const [articles, setArticles] = useState([])
 
  useEffect(() => {
    const fetchCategories = () => {
      CategoriesDataService.getAll()
          .then((res) => {
            setCategories(res.data)
          })
    }
  
    const fetchSubcategories = () => {
      SubcategoriesDataService.getAll()
          .then((res) => {
            setSubcategories(res.data)
          })
    }
  
    const fetchArticles = async () => {
      ArticleDataService.getAll()
          .then((res) => {
            setArticles(res.data)
          })
    }
  
    fetchCategories()
    fetchSubcategories()
    fetchArticles()
  }, [])


  return (
    <div className="main">
      <div className="container">
        <div className="main-wrapper">
          <Sidebar categories={categories} subcategories={subcategories} />
          <Content categories={categories} subcategories={subcategories} articles={articles} />
        </div>
      </div>
    </div>
  );
}

