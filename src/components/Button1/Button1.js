import './Button1.scss'

const Button1 = ({filled, colorType, label}) => {
  const btnClass = filled ? `Button1-${colorType}` : `Button1-outline-${colorType}`
  return (
    <button className={['Button1', btnClass].join(' ')}>{label}</button>
  )
}

export default Button1
