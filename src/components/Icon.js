import react from 'react'
import { Image } from 'react-bootstrap'


const Icon = ( {iconSVG, position} ) => {

   const styleIcon = {
       top: '-10%', 
       left: '50%',
       transform: 'translateX(-50%)',
       border: '13px solid orange', 
       borderRadius: '50%', 
       width: '120px', 
       height: '120px'
    }

    const styleIconBg = 
        {
            borderRadius:'50%', 
            width: '100%', 
            height: '100%',
            backgroundColor: 'rgba(255,255,250)',
            boxShadow: 'inset 0px 12px 9px -6px rgba(206, 208, 208, 1)'
        }
   
   return(
       <div style={styleIcon} className='position-absolute'>
           <div style={styleIconBg}>
               <Image src={iconSVG} className="d-block mx-auto py-3"/>
           </div>
       </div>
   ) 
}

export default Icon