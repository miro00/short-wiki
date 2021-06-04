import './AddUser.scss'
import { useState } from 'react'
import SelectInput from '../controls/SelectInput/SelectInput'

export default function AddUser() {

  const [choosenGroup, setChoosenGroup] = useState("") 

  const groups = [
    {
      id: 0,
      title: "Администратор"
    },
    {
      id: 1,
      title: "Пользователь"
    }
  ]

  return (
    <form className="AddUser">
      <div className="form-items">
        <div className="form-item">
          <input type="text" placeholder="Логин"/>
        </div>
        <div className="form-item">
          <input type="password" placeholder="Пароль"/>
        </div>
        <div className="form-item">
          <SelectInput
            id="selectUserGroup"
            defaultValue={0}
            defaultTitle="Выберите группу пользователя"
            items={groups}
            setValue={(val) => setChoosenGroup(val)}
          />
        </div>
        <div className="form-item">
          <label htmlFor=""></label>
          <button type="submit">Добавить пользователя</button>
        </div>
      </div>
    </form>
  )
}