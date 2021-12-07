import react, {useState} from 'react'
import { Image } from 'react-bootstrap'
import BgPentagon from '../images/BgPentagon.svg';
/* Icon component */
import Icon from './Icon'
/* All SVG icons */
import CssIconSettings from './IconSettings';


const Pentagram = () => {
    
    return(
        <div className='position-relative'>
            <Image src={BgPentagon} width="429" height="413" className="d-block mx-auto "alt="pentagon_pattern" fluid/>
            
            {CssIconSettings.map( (icon,index) => {
                return(
                    <Icon settings={icon} key={index}></Icon>
                )   
            })}
            
        </div>
    )
}

export default Pentagram