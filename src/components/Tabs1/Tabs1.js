import './Tabs1.scss'
import { useState } from 'react'

const Tabs1 = ({tabs, colorType}) => {

  const [selected, setSelected] = useState(0)

  return (
    <div className="Tabs1">
      {tabs.map((tab, index) => (
        <div className={selected === index ? `tab-item selected-${colorType} selected` : `tab-item`} onClick={() => setSelected(index)}>{tab}</div>
      ))}
    </div>
  )
}

export default Tabs1
