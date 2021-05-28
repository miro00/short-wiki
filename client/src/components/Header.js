import '../scss/Header.scss';

import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import Search from "./Search";
import SignInForm from './SignInForm'
import UserDropDownMenu from './UserDropDownMenu'
import { AppContext } from '../context';

export default function Header() {

  const [showForm, setShowForm] = useState(false)
  const [showDropDown, setDropDown] = useState(false)

  const { loginStatus } = useContext(AppContext)

  function showFormEvent() {
    setShowForm(!showForm)
  }

  function showDropDownEvent() {
    setDropDown((!showDropDown))
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap">
          <Link to="/" className="logo">
            ShortWiki
          </Link>
          <Search />
          <div className="account">
            {loginStatus.loggedIn ? 
            <div className="user">
              <Link to="/add-article" className="btn add-article">+</Link>
              <span className="user-username" onClick={showDropDownEvent}>{loginStatus.username}</span>
              <div className="user-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L12 15L17 10H7Z"/>
                </svg>
              </div>
            </div>
            : 
            <div className="sign-in" onClick={showFormEvent}>Вход</div>
            }
            { showForm ? <SignInForm /> : null }
            { showDropDown ? <UserDropDownMenu userId={loginStatus.id} /> : null }
          </div>
        </div>
      </div>
    </header>
  )
}
