import { Image } from 'react-bootstrap'

/* Single Icon Component */

/* <Image src={svg} className={`d-block mx-auto  ${className}`}/> */
const Icon = ( {children, className} ) => {   
   return(
        <div className={className}>
            {children}
        </div> 
   ) 
}

export default Icon