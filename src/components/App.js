import {useState} from 'react'
import {useGlobalContext} from './context/Context'
import MyNavbar from './navbar/MyNavbar'
import MyContainer from './container/MyContainer'

const App = () => {
  /* Use global context */
  const data = useGlobalContext()
  /* InputValue */
  const [value,setValue] = useState('')
 
  return(
    <>
      <MyNavbar value={value} setValue={setValue} />
      <MyContainer value={value} />
    </>
  )

};

export default App;
