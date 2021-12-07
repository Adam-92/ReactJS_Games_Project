import IconScissors from '../images/IconScissors.svg'
import IconLizard from '../images/IconLizard.svg'
import IconPaper from '../images/IconPaper.svg'
import IconSpock from '../images/IconSpock.svg'
import IconRock from '../images/IconRock.svg'

const CssIconSettings = [
{
    svgImage: IconScissors,
    position: {
        top: '-10%',
        bottom: '0%',
        left: '50%',
        right: '0',
    },
    transform: {
        translateX: '-50%'
    },
    boxShadow: {
        inset: 'rgb(221 221 222) 0px 8px 0px -1px inset',
        default: 'rgb(187 128 19) 0px 7px 0px -1px' 
    },
    borderColor: '#ffc107'

},
{
    svgImage: IconLizard,
    position: {
        top: '75%',
        bottom: '0%',
        left: '32%',
        right: '0%',
    },
    transform: {
        translateX: '0%'
    },
    boxShadow: {
        inset: 'rgb(221 221 222) 0px 8px 0px -1px inset',
        default: 'hsl(261, 72%, 65%) 0px 7px 0px -1px' 
    },
    borderColor: 'hsl(261, 58%, 53%)'
},
{
    svgImage: IconPaper,
    position: {
        top: '18%',
        bottom: '0%',
        left: '62%',
        right: '0%',
    },
    transform: {
        translateX: '0%'
    },
    boxShadow: {
        inset: 'rgb(221 221 222) 0px 8px 0px -1px inset',
        default: 'hsl(230, 58%, 53%) 0px 7px 0px -1px' 
    },
    borderColor: 'hsl(230, 89%, 62%)'
},
{
    svgImage: IconSpock,
    position: {
        top: '18%',
        bottom: '0%',
        left: '25%',
        right: '0%',
    },
    transform: {
        translateX: '0%'
    },
    boxShadow: {
        inset: 'rgb(221 221 222) 0px 8px 0px -1px inset',
        default: 'hsl(209, 58%, 53%) 0px 7px 0px -1px' 
    },
    borderColor: 'hsl(189, 59%, 53%)'
},
{
    svgImage: IconRock,
    position: {
        top: '75%',
        bottom: '0%',
        left: '55%',
        right: '0%',
    },
    transform: {
        translateX: '0%'
    },
    boxShadow: {
        inset: 'rgb(221 221 222) 0px 8px 0px -1px inset',
        default: 'hsl(349, 58%, 53%) 0px 7px 0px -1px' 
    },
    borderColor: 'hsl(349, 71%, 52%)'
}

]

export default CssIconSettings