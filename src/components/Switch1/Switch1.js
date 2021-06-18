import './Switch1.scss'
import { useState } from 'react'

const Switch1 = ({isOn, colorType}) => {

  console.log(colorType)

  const [activated, setActivated] = useState(false)

  return (
    <label className={`Switch1 switch-${colorType}`}>
      <input type="checkbox" checked={ activated === isOn ? '' : 'checked' } onChange={() => setActivated(!activated)} />
      <span class="slider round"></span>
    </label>
  )
}

export default Switch1
