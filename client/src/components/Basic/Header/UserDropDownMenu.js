import './DropDownMenu.scss'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserDataService from '../../../services/users.service'
import { AppContext } from '../../../context'

export default function UserDropDownMenu(props) {

  const  { loginStatus } = useContext(AppContext)

  function logOutEvent() {
    localStorage.removeItem('token')
    window.location.reload()
    // UserDataService.logOut(props.userId)
    //   .then((res) => {
    //     if (res) {
    //       window.location.reload()
    //     }
    //   })
  }

  return (
    <div className="dropDownMenu">
      <div className="dropDownMenu-items">
        {loginStatus.user_group === 1 ? 
        <Link to="/control" className="dropDownMenu-item" style={{color: '#000'}} >
          Админ-панель
        </Link>
        : null}
        <div className="dropDownMenu-item">
          Аккаунт
        </div>
        <div className="dropDownMenu-item" onClick={logOutEvent}>
          Выход
        </div>
      </div>
    </div>
  )
}
