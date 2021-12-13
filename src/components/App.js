import {useState} from 'react'
import { Container,Col,Row,Button} from 'react-bootstrap'
import ResultTable from './ResultTable'
import Pentagram from './Pentagram'
import MyModal from './MyModal'
import Challange from './Challenge'

const App = () => {

  /* Control of the modal */
  const [modalShow, setModalShow] = useState(false)
  const modalOff = () => setModalShow(false)
  
  /*Picks*/
  const [yourPick, setYourPick] = useState('')
  const [computerPick, setComputerPick] = useState('')
  
  const selectPick = (name) => setYourPick(name)


  return(
    <>
      <Container fluid='xl' className='h-100'>
        <Row className='justify-content-around align-items-center h-100'>
          <Col sm={8} className='align-self-start align-self-sm-center mt-1 mt-sm-0'>
            <ResultTable />
          </Col>
          {/* Display if the condition is met */}
          <Col xs={12} className={`${!yourPick && 'd-none'}`}>
            <Challange selectPick={selectPick} yourPick={yourPick} computerPick={computerPick} />
          </Col>
          <Col xs={12} className={`mt-lg-5 ${yourPick && 'd-none'}`}>
            <Pentagram selectPick={selectPick}/>
          </Col>
          <Col xs={4} sm={3} className='mx-auto ms-lg-auto me-lg-0 mt-sm-5 mt-xxl-3'>
            <Button className='btn-custom text-center' 
                    onClick={()=>setModalShow(true)}>
              RULES
            </Button>
          </Col>
        </Row>
        <MyModal show={modalShow} onHide={modalOff}/>
      </Container>
    </>
  )

     {/* <Container>
        <Row>
          <Col sm={8} className="offset-sm-2 mt-5">
            <ResultTable />
          </Col>
        </Row>
        <Row>
          <Col style={{marginTop: '6rem'}}>
            {yourPick ? 
              <Challange yourPick={yourPick} computerPick={computerPick} /> 
                : 
              <Pentagram/>}
          </Col>
        </Row>
        <Row>
          <Col className={`d-flex ${yourPick && 'margin'}`}>
            <Button size='lg' 
                    className='btn-custom ms-sm-auto' 
                    onClick={()=>setModalShow(true)}>
              RULES
            </Button>
          </Col>
        </Row>
        
        <MyModal show={modalShow} onHide={modalOff}/>
      </Container> */}  
};

export default App;
