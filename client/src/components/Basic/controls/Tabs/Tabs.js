import './Tabs.scss'

export default function Tabs(props) {
  const openTab = (e) => {

    if (!e.target.classList.contains('.active')) {
      document.querySelectorAll('.tab-link').forEach(tablink => {
        tablink.classList.remove('active')
      })
      e.target.classList.add('active')
      document.querySelectorAll('.tab').forEach(tab => {
        tab.style.display = 'none'
      })
      let tabLinkId = e.target.getAttribute('data-tablink-id');
      document.querySelector(`.tab[data-tab-id="${tabLinkId}"]`).style.display = 'block'
    }

  }
  return (
    <div className="Tabs">
      <div className="tabs-links">
        <div className="tab-link active" onClick={openTab} data-tablink-id={1}>Добавление пользователя</div>
        <div className="tab-link" onClick={openTab} data-tablink-id={2}>Опция2</div>
        <div className="tab-link" onClick={openTab} data-tablink-id={3}>Опция3</div>
      </div>
      <div className="tabs-list">
        <div className="tab" data-tab-id="1" style={{display: "block"}}>
          {props.component}
        </div>
        <div className="tab" data-tab-id="2" style={{display: "none"}}>
          
        </div>
        <div className="tab" data-tab-id="3" style={{display: "none"}}>
          
        </div>
      </div>
    </div>
  )
}