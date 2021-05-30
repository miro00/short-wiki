import './SignInForm.scss'

import { useState } from 'react'

import UserDataService from '../../../services/users.service'

export default function SignInForm() {

  const [userLogin, setUserLogin] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [errorStatus, setErrorStatus] = useState("")

  const login = (e) => {
    e.preventDefault()
    UserDataService.login({userLogin: userLogin, userPassword: userPassword})
      .then((res) => {
        if (res.data.message) {
          setErrorStatus(res.data.message)
        } else {
          window.location.reload()
          setErrorStatus("")
        }
      })
  }

  return (
    <form className="SignInForm" onSubmit={login}>
      <div className="form-title">
        Вход в аккаунт
      </div>
      {errorStatus === "" ? "" :
        <div className="form-error">
          <div className="form-error_icon">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 13H11V7H13V13ZM13 17H11V15H13V17ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V2Z"/>
            </svg>
          </div>
          <span className="form-error_title">{errorStatus}</span>
        </div>
      }
      <div className="form-items">
        <div className="form-item">
          <label htmlFor="userLogin">Логин</label>
          <input type="text" name="userLogin"
          onChange={(e) => {
            setUserLogin(e.target.value)
          }} />
        </div>
        <div className="form-item">
          <label htmlFor="userPassword">Пароль</label>
          <input type="password" name="userPassword"
          onChange={(e) => {
            setUserPassword(e.target.value)
          }}
          />
        </div>
        <div className="form-item">
          <button type="submit">Войти</button>
        </div>
      </div>
    </form>
  )
}
