import './DropDownMenu.scss'
import UserDataService from '../../../services/users.service'

export default function UserDropDownMenu(props) {

  function logOutEvent() {
    UserDataService.logOut(props.userId)
      .then((res) => {
        if (res) {
          window.location.reload()
        }
      })
  }

  return (
    <div className="dropDownMenu">
      <div className="dropDownMenu-items">
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
