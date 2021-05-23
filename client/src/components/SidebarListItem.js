import React from 'react';
import { Link } from 'react-router-dom'

export default class SidebarListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
      subcategories: []
    }

    this.showSubMenu = this.showSubMenu.bind(this)
  }

  showSubMenu() {
    this.setState(state => ({
      collapsed: !state.collapsed
    }))
  }

  render() {
    const subcategories = this.props.subcategories;
    let state = false
    if (subcategories !== undefined) {
      state = true
    } else {
      state = false
    }

    return (
      <li className={`menu-list__item ${this.state.collapsed ? "collapsed" : ""}`} onClick={this.showSubMenu}>
        <div className="menu__link">
          <Link to={`/${this.props.url}`}>{this.props.title}</Link>
          {(!state) ? "" : (
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59 16.58L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.58Z"/>
              </svg>
            </div>
            )
          }
        </div>
        {(!state) ? "" : 
          (
          <ul className="submenu-list">
            {subcategories.map(subcategory => (
              <li className="submenu-list__item" key={subcategory.id_subcategory}>
                <Link to={`/${subcategory.subcategory_url}`} className="submenu__link">{subcategory.subcategory_name}</Link>
              </li>
            ))}
          </ul>   
          )
        } 
      </li>
    )
  }
}
