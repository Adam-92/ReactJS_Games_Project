import {useRef} from 'react'
import {useGlobalContext} from './context/Context'
import MyNavbar from './navbar/MyNavbar'
import MyContainer from './container/MyContainer'

const App = () => {
  /* Use global context */
  const data = useGlobalContext()
  const [check, setCheck] = React.useState(false)
  const refContainer = useRef(null)

  React.useEffect(()=>{
    setCheck(true)
    return () => {
      setCheck
    }
  })

  return(
    <>
      <MyNavbar/>
      <MyContainer/>
    </>
  )

};

export default App;
