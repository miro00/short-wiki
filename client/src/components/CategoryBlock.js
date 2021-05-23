import { useState } from 'react'

export default function CategoryBlock(props) {
  const [iconExists, setIconExists] = useState(false)

  fetch(`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${props.url}.svg`)
    .then((res) => {
      if (!res.ok) {
        return setIconExists(false)
      } else {
        setIconExists(true)
      }
    })

  return (
    <div className="category">
      {iconExists ? 
        <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${props.url}.svg`} alt="" className="category-logo" />
      : null }
      <div className="category-title">
        {props.title}
      </div>
    </div>
  )
}