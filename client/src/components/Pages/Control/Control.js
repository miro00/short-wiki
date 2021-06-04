import './Control.scss'
import AddUser from '../../Basic/AddUser/AddUser'
import Tabs from '../../Basic/controls/Tabs/Tabs'

export default function Control() {
  return(
    <div className="Control">
      <h1>Управление сайтом</h1>
      <Tabs component={<AddUser/>} />
    </div>
  )
}