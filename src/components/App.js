import { Container,Col,Row } from 'react-bootstrap'
import ResultTable from './ResultTable'
import Pentagram from './Pentagram.js'
import Icon from './Icon'

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
          <Col style={{marginTop: '10rem'}} >
            <Pentagram/>
          </Col>
        </Row>
      </Container>
    </>
  )

};

export default App;
