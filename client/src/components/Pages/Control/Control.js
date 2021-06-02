import './Control.scss'
import AddUser from '../../Basic/AddUser/AddUser'

export default function Control() {
  return(
    <div className="Control">
      <h1>Управление сайтом</h1>
      <div className="Control-tabs">
        <div className="Control-tab">
          <AddUser/>
        </div>
      </div>
    </div>
  )
}