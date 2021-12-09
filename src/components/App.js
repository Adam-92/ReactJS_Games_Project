import { Container,Col,Row,Button } from 'react-bootstrap'
import ResultTable from './ResultTable'
import Pentagram from './Pentagram.js'

const App = () => {

  return(
    <>
      <Container>
        <Row>
          <Col sm={8} className="offset-sm-2 mt-5">
            <ResultTable />
          </Col>
        </Row>
        <Row>
          <Col style={{marginTop: '6rem'}} >
            <Pentagram/>
          </Col>
        </Row>
        <Row>
          <Col sm={1} className="offset-5 mt-5 mt-sm-0 offset-sm-11">
            <Button size='lg' className='btn-custom'>RULES</Button>
          </Col>
        </Row>
      </Container>
    </>
  )

};

export default App;
