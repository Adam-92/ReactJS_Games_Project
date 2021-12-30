import React, {useEffect, useRef} from 'react'
import { Image } from 'react-bootstrap'
import BgPentagon from '../images/BgPentagon.svg'
/* All SVG icons */
import {ReactComponent as IconLizard} from '../images/IconLizard.svg'
import {ReactComponent as IconPaper} from '../images/IconPaper.svg' 
import {ReactComponent as IconRock }from '../images/IconRock.svg'
import {ReactComponent as IconSpock} from '../images/IconSpock.svg'
import {ReactComponent as IconScissors} from '../images/IconScissors.svg'

const Pentagram = React.memo(({selectPick}) => {
 
    const transition = useRef(null)
    
    /* Select you pick */
    const selectYourPick = (e) => {
        const name = e.target.className;
        selectPick(name)
    }
    
    /* Loop over DOM to gather the div's with picks for creating async animation */

    const selectProperChildrenToTransition = (ref) => {
        const numberOfChilds = ref.current.childElementCount;
        const children = ref.current.children;
        let selectDomWithAnimationClass = [];
        for(let i=0;  i<numberOfChilds; i++){
            if(children[i].classList.contains('animation')){
                selectDomWithAnimationClass.push(children[i])
            }
        }
        console.log(selectDomWithAnimationClass)
        return selectDomWithAnimationClass;
    }


    const presentationOfPicks = async () => {
        const picks = selectProperChildrenToTransition(transition);
       
        /* Create Promises for each pick */
        const scissors = () => new Promise( resolve => {
                setTimeout( () => {
                    picks[0].classList.add('animation-presentation-icons')
                    resolve()
                }, 2500 )
            }
        )
        const paper = () => new Promise ( resolve => {
                setTimeout( ()=> {
                    picks[2].classList.add('animation-presentation-icons')
                    resolve()
                }, 1000 )
            }
        )
        const rock = () => new Promise ( resolve => {
            setTimeout( () => {
                picks[4].classList.add('animation-presentation-icons')
                resolve()
            }, 1000)
        })
        const lizard = () => new Promise ( resolve => {
            setTimeout( () => {
                picks[1].classList.add('animation-presentation-icons')
                resolve()
            },1000)
        })
        const spock = () => new Promise ( resolve => {
            setTimeout( () => {
                picks[3].classList.add('animation-presentation-icons')
                resolve()
            },1000)
        })

        const removeAnimation = (picks) => {
            return new Promise ( resolve => {
                for(let i=0; i<picks.length; i++){
                    picks[i].classList.add('opacity-100')
                    picks[i].classList.remove('animation-presentation-icons')
                    picks[i].classList.add('animation')
                }
                resolve()
            })
        }

        const first  =  await scissors()
        const second =  await paper()
        const third  =  await rock()
        const four   =  await lizard()
        const five   =  await spock()
        const animation = await removeAnimation(picks)
        
    }

    
    useEffect( () => {
        presentationOfPicks()
    },[])

    return(
        <div className='position-relative' ref={transition}>
            <Image src={BgPentagon}  className="d-block mx-auto size animation-pentagram" alt="pentagon_pattern" fluid/>
            <div className={`scissors-icon animation `} onClick={(e)=>selectYourPick(e)} >
                 <IconScissors className="pe-none " width='100%' height='100%'viewBox="2 -11 50 77"/>
            </div>
            <div className={`lizard-icon animation `} onClick={(e)=>selectYourPick(e)}>
                 <IconLizard className="pe-none " width='100%' height='100%'viewBox='8 -12 50 85'/>
            </div>
            <div className={`paper-icon animation `} onClick={ (e)=>selectYourPick(e) }>
                 <IconPaper className="pe-none " width='100%' height='100%'viewBox='2 -11 50 80'/>
             </div>
            <div className={`spock-icon animation `} onClick={ (e)=>selectYourPick(e) }>
                <IconSpock className="pe-none " width='100%' height='100%'viewBox='-6 -11 50 80'/>
            </div>
            <div className={`rock-icon animation `} onClick={ (e)=>selectYourPick(e) } >
                <IconRock className="pe-none " width='100%' height='100%'viewBox='2 -16 50 75'/>
            </div>
        </div>
    )
})

export default Pentagram