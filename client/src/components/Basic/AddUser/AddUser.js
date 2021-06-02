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
          <label htmlFor="">Логин</label>
          <input type="text" />
        </div>
        <div className="form-item">
          <label htmlFor="">Пароль</label>
          <input type="text" />
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