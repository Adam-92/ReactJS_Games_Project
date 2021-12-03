import {useState, useRef} from 'react'
import {useGlobalContext} from './context/Context'
import MyNavbar from './navbar/MyNavbar'
import MyContainer from './container/MyContainer'

const App = () => {
  /* Use global context */
  const data = useGlobalContext()
  /* Ref to input value from the MyNavbar*/
  const inputRef = useRef(null)
  /* inputValue */
  const [value,setValue] = useState('')
 
  return(
    <>
      <MyNavbar value={value} setValue={setValue} />
      <MyContainer value={value} />
    </>
  )

};

export default App;
