import './SelectInput.scss'
import { useState, useRef, useEffect } from 'react'

export default function SelectInput(props) {
  const [visible, setVisible] = useState(false)
  const node = useRef()

  const handleClickOutside = (e) => {
    if (node.current && node.current.contains(e.target)) return
    setVisible(false)
  }

  useEffect(() => {
    if (visible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }

  }, [visible])

  const searchInput = document.querySelector('.select-search input')
  const selectedOption = document.getElementById(props.id)
  const optionsList = document.querySelectorAll('.option')

  const showDropDown = () => {
    setVisible(!visible)
    if (!visible) {
      setTimeout(() => {
        searchInput.focus()
      }, 0)
    }
  }

  const selectOption = (e) => {
    selectedOption.innerHTML = e.target.innerHTML
    optionsList.forEach(option => {
      option.classList.remove('selected')
    })
    e.target.classList.add('selected')
    setVisible(false)
    props.setValue(e.target.dataset.optionId)
  }

  const filterList = (e) => {
    let searchQuery = e.target.value.toLowerCase()
    optionsList.forEach(option => {
      if (option.innerText.toLowerCase().indexOf(searchQuery) !== -1) {
        option.style.display = 'block'
      } else {
        option.style.display = 'none'
      }
    })
  }

  return(
    <div className="SelectInput" ref={node}>
      <div className="select" id={props.id} onMouseDown={showDropDown}>{props.defaultTitle}</div>
      <div className={`drop${visible ? " visible" : ""}`}>
        <div className="select-search">
          <input type="text" autoComplete="off" placeholder="Поиск" onChange={filterList} />
        </div>
        <ul className="options">
          <li className="option disabled selected" data-option-id={props.defaultValue}>{props.defaultTitle}</li>
          {props.items.map(item => (
            <li className="option" data-option-id={item.id} key={item.id} onClick={selectOption}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
