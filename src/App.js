import './reset.scss'
import Button1 from './components/Button1/Button1'
import Button2 from './components/Button2/Button2'
import TextInput1 from './components/TextInput1/TextInput1'

function App() {
  return (
    <div className="App">
      <Button1 />
      <Button2 />
      <TextInput1 placeholder={'Hello world!'} />
    </div>
  )
}

export default App
