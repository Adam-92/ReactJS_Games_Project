import {ReactComponent as IconLizard} from '../images/IconLizard.svg';
import {ReactComponent as IconPaper} from '../images/IconPaper.svg'; 
import {ReactComponent as IconRock }from '../images/IconRock.svg';
import {ReactComponent as IconSpock} from '../images/IconSpock.svg';
import {ReactComponent as IconScissors} from '../images/IconScissors.svg';
import {Row, Col, Button} from 'react-bootstrap'

const Challange = ({ yourPick, computerPick, selectPick }) =>{

   console.log(yourPick)

    return(
      <Row>
         <Col xs={{span: 6, order: 1}} sm={{span: true,order: 1}} className='ms-sm-5'>
            <h3 className='text-center mb-5'>
               YOUR PICK
            </h3>  
{/*             {yourPick === 'lizard-icon' &&
               <div className={`${yourPick} pick mx-auto`}>
                  <IconLizard width='100%' height='100%' viewBox='-6 -18 80 100' />
                </div>
            }
            {yourPick === 'spock-icon' &&
               <div className={`${yourPick} pick mx-auto`}>
                  <IconSpock width='100%' height='100%' viewBox='-6 -18 80 100' />
               </div>
            }
            {yourPick === 'rock-icon' &&
               <div className={`${yourPick} pick mx-auto`}>
                  <IconRock width='100%' height='100%' viewBox='-6 -18 80 100' />
               </div>
            }
            {yourPick === 'scissors-icon' &&
               <div className={`${yourPick} pick mx-auto`}>
                  <IconScissors width='100%' height='100%' viewBox='-6 -18 80 100' />
               </div>
            }
            {yourPick === 'paper-icon' &&
               <div className={`${yourPick} pick mx-auto`}>
                  <IconPaper width='100%' height='100%' viewBox='-6 -18 80 100' />
               </div>
            } */}
         </Col>

         <Col xs={{order: 3}} sm={{span: true, order: 2}} className='d-flex flex-column justify-content-center align-items-center'>
            <p className='result'>YOU WIN!</p>
            <Button variant='light' className='fs-3 px-5' onClick={selectPick('')}>
               PLAY AGAIN
            </Button>
         </Col>
         <Col xs={{span: 6,order: 2}} sm={{span: true, order: 3}} className='me-sm-5'>
            <h3 className='text-center mb-5'>
               COMPUTER PICK
            </h3>  
            <div className="lizard-icon pick mx-auto">
               <IconLizard width='100%' height='100%' viewBox='-6 -18 80 100' />
            </div>
         </Col>
      </Row>
    )
}

export default Challange