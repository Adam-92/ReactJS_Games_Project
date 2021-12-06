import react, {useState} from 'react'
import { Image } from 'react-bootstrap'
import BgPentagon from '../images/BgPentagon.svg';
/* Icon component */
import Icon from './Icon'
/* Icon SVG */
import IconScissors from '../images/IconScissors.svg'

const Pentagram = () => {

    const [iconsSVG, setIconsSVG] = useState([
        {
            name: IconScissors,
            PositionTop: '',
            PositionBottom: ''
        }
    ]);

    return(
        <div className='position-relative'>
            <Image src={BgPentagon} className="d-block mx-auto "alt="pentagon_pattern" fluid/>
            <Icon iconSVG={iconsSVG[0].name} positon={iconsSVG[0].PositionTop}></Icon>
        </div>
    )
}

export default Pentagram