import react from 'react'
import { Image } from 'react-bootstrap'


const Icon = ( {settings} ) => {
    /* Icon SVG */
    const svg = settings.svgImage;
    /* CSS Icon settings  */
    const translateX = settings.transform.translateX;
    const boxShadowInset = settings.boxShadow.inset;
    const boxShadowDefault = settings.boxShadow.default;
    const borderColor = settings.borderColor;
    const positionTop = settings.position.top;
    const positionBottom = settings.position.bottom;
    const positionLeft = settings.position.left;
    const positionRight = settings.position.right;

    console.log(positionTop,positionBottom,positionLeft,positionRight)
    
    console.log(settings)
    const styleIcon = 
        {
            top: `${positionTop}`, 
            bottom: `${positionBottom}`,
            left: `${positionLeft}`,
            right: `${positionRight}`,
            transform: `translateX(${translateX})`,
            border: `20px solid ${borderColor}`,
            borderRadius: '50%', 
            width: '150px', 
            height: '150px',
            boxShadow: `${boxShadowDefault}`
        }

    const styleIconBg = 
        {
            borderRadius:'50%', 
            width: '100%', 
            height: '100%',
            backgroundColor: 'rgba(255,255,250)',
            boxShadow: `${boxShadowInset}`
        }
   
   return(
       <div style={styleIcon} className='position-absolute'>
           <div style={styleIconBg}>
               <Image src={svg} className="d-block mx-auto py-4"/>
           </div>
       </div>
   ) 
}

export default Icon