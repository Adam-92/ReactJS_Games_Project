import { Image } from 'react-bootstrap'
import BgPentagon from '../images/BgPentagon.svg';
/* Icon Single component */
import Icon from './Icon'
/* All SVG icons */
import {ReactComponent as IconLizard} from '../images/IconLizard.svg';
import {ReactComponent as IconPaper} from '../images/IconPaper.svg'; 
import {ReactComponent as IconRock }from '../images/IconRock.svg';
import {ReactComponent as IconSpock} from '../images/IconSpock.svg';
import {ReactComponent as IconScissors} from '../images/IconScissors.svg';

const Pentagram = () => {
    
    return(
        <div className='position-relative'>
            <Image src={BgPentagon}  className="d-block mx-auto size" alt="pentagon_pattern" fluid/>
                <Icon className='scissors-icon'>
                    <IconScissors width='100%' height='100%'viewBox="2 -11 50 75" />
                </Icon>
                <Icon className='lizard-icon' >
                    <IconLizard width='100%' height='100%'viewBox='8 -10 50 80'/>
                </Icon>
                <Icon className='paper-icon' >
                    <IconPaper width='100%' height='100%'viewBox='2 -11 50 80'/>
                </Icon>
                <Icon className='spock-icon' >
                    <IconSpock width='100%' height='100%'viewBox='-6 -11 50 80'/>
                </Icon>
                <Icon className='rock-icon' >
                    <IconRock width='100%' height='100%'viewBox='2 -16 50 75'/>
                </Icon>
        </div>
    )
}

export default Pentagram