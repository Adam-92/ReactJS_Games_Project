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
          <Col sm={1} className="d-flex ms-sm-auto">
            <Button size='lg' className='btn-custom'>RULES</Button>
          </Col>
        </Row>
      </Container>
    </>
  )

};

export default App;
