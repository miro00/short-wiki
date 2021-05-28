import '../scss/App.scss';
import Header from './Header';
import MainWrapper from './MainWrapper';
import { useEffect, useState } from 'react'
import UserDataService from '../services/users.service'
import { AppContext } from '../context'

export default function App() {

  const [loginStatus, setLoginStatus] = useState("")

  useEffect(() => {
    UserDataService.getLogin()
      .then((res) => {
        if (res.data.loggedIn) {
          setLoginStatus({
            loggedIn: true,
            id: res.data.user[0].id_user,
            username: res.data.user[0].user_login
          })
        } else {
          setLoginStatus({
            loggedIn: false
          })
        }
      })
  }, [])
 

  return (
    <div className="App">
      <AppContext.Provider value={{loginStatus}}>
        <Header />
        <MainWrapper />
      </AppContext.Provider>
    </div>
  );
}
