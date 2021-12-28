import React, {useEffect, useState} from 'react'
import { Image } from 'react-bootstrap'
import BgPentagon from '../images/BgPentagon.svg'
/* All SVG icons */
import {ReactComponent as IconLizard} from '../images/IconLizard.svg'
import {ReactComponent as IconPaper} from '../images/IconPaper.svg' 
import {ReactComponent as IconRock }from '../images/IconRock.svg'
import {ReactComponent as IconSpock} from '../images/IconSpock.svg'
import {ReactComponent as IconScissors} from '../images/IconScissors.svg'

const Pentagram = React.memo(({selectPick}) => {
    
    let animation = {
        icon1: false,
        icon2: false,
        icon3: false,
        icon4: false,
        icon5: false
    }

    /* Select you pick */
    const selectYourPick = (e) => {
        const name = e.target.className;
        selectPick(name)
    }
    
    const iconsPresentation = () => {

    }

    useEffect( () => {
        iconsPresentation()
    },[])



    return(
        <div className='position-relative'>
            <Image src={BgPentagon}  className="d-block mx-auto size animation-pentagram" alt="pentagon_pattern" fluid/>
            <div className={`scissors-icon animation `} onClick={(e)=>selectYourPick(e)} >
                 <IconScissors className="pe-none presentation" width='100%' height='100%'viewBox="2 -11 50 77"/>
            </div>
            <div className={`lizard-icon animation `} onClick={(e)=>selectYourPick(e)}>
                 <IconLizard className="pe-none presentation" width='100%' height='100%'viewBox='8 -12 50 85'/>
            </div>
            <div className={`paper-icon animation `} onClick={ (e)=>selectYourPick(e) }>
                 <IconPaper className="pe-none presentation" width='100%' height='100%'viewBox='2 -11 50 80'/>
             </div>
            <div className={`spock-icon animation `} onClick={ (e)=>selectYourPick(e) }>
                <IconSpock className="pe-none presentation" width='100%' height='100%'viewBox='-6 -11 50 80'/>
            </div>
            <div className={`rock-icon animation `} onClick={ (e)=>selectYourPick(e) } >
                <IconRock className="pe-none presentation" width='100%' height='100%'viewBox='2 -16 50 75'/>
            </div>
        </div>
    )
})

export default Pentagram