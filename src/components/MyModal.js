import {Modal,Button} from 'react-bootstrap'
import {ReactComponent as ImageRulesBonus} from '../images/ImageRulesBonus.svg'

/* Explain the rules - Modal */
const MyModal = ( props) => {

    return(
        <Modal {...props} size="lg" aria-labelledby='contained-modal-title-vcenter' centered>
          <Modal.Body>
            <ImageRulesBonus width='90%' height="100%" viewBox="-50 0 400 340"/>
          </Modal.Body>
          <Modal.Footer className='p-0'>
              <Button onClick={props.onHide} size="lg" className='me-2 spacing'>SKIP</Button>
          </Modal.Footer>
        </Modal>
    )
}

export default MyModal