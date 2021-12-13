import { Image } from 'react-bootstrap'
import BgPentagon from '../images/BgPentagon.svg';
/* All SVG icons */
import {ReactComponent as IconLizard} from '../images/IconLizard.svg';
import {ReactComponent as IconPaper} from '../images/IconPaper.svg'; 
import {ReactComponent as IconRock }from '../images/IconRock.svg';
import {ReactComponent as IconSpock} from '../images/IconSpock.svg';
import {ReactComponent as IconScissors} from '../images/IconScissors.svg';

const Pentagram = ({selectPick}) => {
    
    const selectYourPick = (e) => {
        const name = e.target.className;
        selectPick(name)
    }
    
    return(
        <div className='position-relative'>
            <Image src={BgPentagon}  className="d-block mx-auto size" alt="pentagon_pattern" fluid/>
                <div className='scissors-icon' onClick={ (e)=>selectYourPick(e) }>
                    <IconScissors className="pe-none" width='100%' height='100%'viewBox="2 -11 50 77"/>
                </div>
                <div className='lizard-icon' onClick={ (e)=>selectYourPick(e) }>
                    <IconLizard className="pe-none" width='100%' height='100%'viewBox='8 -12 50 85'/>
                </div>
                <div className='paper-icon' onClick={ (e)=>selectYourPick(e) }>
                    <IconPaper className="pe-none" width='100%' height='100%'viewBox='2 -11 50 80'/>
                </div>
                <div className='spock-icon' onClick={ (e)=>selectYourPick(e) }>
                    <IconSpock className="pe-none" width='100%' height='100%'viewBox='-6 -11 50 80'/>
                </div>
                <div className='rock-icon'onClick={ (e)=>selectYourPick(e) } >
                    <IconRock className="pe-none" width='100%' height='100%'viewBox='2 -16 50 75'/>
                </div>
        </div>
    )
}

export default Pentagram