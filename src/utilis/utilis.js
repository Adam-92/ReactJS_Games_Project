
 export const  presentationOfPicks = async (ref) => {
        /* ref to DOM container of picks */
        const picks =  ref.current.children;

        /* Create Promises for each pick */
        const pentagramImg = () => new Promise (resolve => {
              setTimeout( () => {
                 picks[0].classList.add('animation-pentagram')
                 resolve()
              }, 500)
        }) 
        const scissors = () => new Promise( resolve => {
                setTimeout( () => {
                    picks[1].classList.add('animation-presentation-icons')
                    resolve()
                }, 1000)
            }
        )
        const paper = () => new Promise ( resolve => {
                setTimeout( ()=> {
                    picks[3].classList.add('animation-presentation-icons')
                    resolve()
                }, 700)
            }
        )
        const rock = () => new Promise ( resolve => {
            setTimeout( () => {
                picks[5].classList.add('animation-presentation-icons')
                resolve()
            }, 700)
        })
        const lizard = () => new Promise ( resolve => {
            setTimeout( () => {
                picks[2].classList.add('animation-presentation-icons')
                resolve()
            }, 700)
        })
        const spock = () => new Promise ( resolve => {
            setTimeout( () => {
                picks[4].classList.add('animation-presentation-icons')
                resolve()
            }, 700)
        })
        /* Remove animation after finished presentation */
        const removeAnimation = (picks) => {
            return new Promise ( resolve => {
                for(let i=1; i<picks.length; i++){
                    picks[i].classList.add('opacity-100')
                    picks[i].classList.remove('animation-presentation-icons')
                    picks[i].classList.add('animation')
                    picks[i].classList.add('pointer')
                }
                picks[0].classList.remove('animation-pentagram')
                picks[0].classList.add('opacity-100')        
                resolve()
            })
        }
        /* Start the procedure */
        const pent   =  await pentagramImg()
        const first  =  await scissors()
        const second =  await paper()
        const third  =  await rock()
        const four   =  await lizard()
        const five   =  await spock()
        const animation = await removeAnimation(picks)
        
    }

  
export  const challangePresentation = async (refMyPick,refComputerPick,refResult,refPlayAgain)  => {
        
       /* Ref's to animation DOM's */
        const myPickDOM = refMyPick.current.nextSibling
        const computerPickDOM = refComputerPick.current.nextSibling;
        const resultDOM = refResult.current
        const playAgainDOM = refPlayAgain.current
    
        /* Create Promises for each pick */
        const myPick = (time) => new Promise( (resolve) => {
            setTimeout( () => {
                myPickDOM.animate([
                    { transform: 'scale(0)',opacity: 0 },
                    { transform: 'scale(1)', opacity: 1}
                ],{
                    duration: time,
                    fill: 'forwards',
                })
                resolve()
            }, time)
        })

        const computerPick = (time) => new Promise( (resolve) => {
            setTimeout( () => {
                computerPickDOM.animate([
                    { transform: 'scale(0)', opacity: 0},
                    { transform: 'scale(1)', opacity: 1}
                ],{
                    duration: time,
                    fill: 'forwards'
                })
                resolve()
            }, time)
        })

        const result = (time) => new Promise( (resolve) => {
            setTimeout( () => {
                resultDOM.animate([
                    { transform: 'scale(0)', opacity: 0},
                    { transform: 'scale(1)', opacity: 1}
                ],{
                    duration: time,
                    fill: 'forwards'
                })
                resolve()
            }, time)
        })

        const btnRestart = (time) => new Promise( (resolve) => {
            setTimeout( () => {
                playAgainDOM.animate([
                    { transform: 'scale(0)', opacity: 0, pointerEvents: 'none'},
                    { transform: 'scale(1)', opacity: 1, pointerEvents: 'auto'},
                ], {
                    duration: time,
                    fill: 'forwards'
                })
                resolve()
            }, time)
        })

        const leftSide = await myPick(500)
        const rightSide = await computerPick(500)
        const showResult = await result(500)
        const tryAgainButton = await btnRestart(500)
    }

/* Generate the random number in range 1-5 */ 
const generateNumber = () => {
    return Math.round(Math.random() * (5 - 1) + 1)
}

/* Logic of the game */
const logic = (yourPick) => {
        let computerPick = generateNumber()
        let result = ''

        /* Computer pick - explanation
           1-lizard, 2-scissors, 3-rock, 4-spock, 5-paper 
        */

        if(yourPick.includes('lizard-icon') && computerPick === 4)  { result = 'You Win!' } 
        if(yourPick.includes('lizard-icon') && computerPick === 5)  { result = 'You Win!' }
        if(yourPick.includes('lizard-icon') && computerPick === 3)  { result = 'You Lose!'}
        if(yourPick.includes('lizard-icon') && computerPick === 2)  { result = 'You Lose!' }
        if(yourPick.includes('lizard-icon') && computerPick === 1)  { result = `Draw!`} 
    
        if(yourPick.includes('spock-icon') && computerPick === 4)  { result = 'Draw!' } 
        if(yourPick.includes('spock-icon') && computerPick === 5)  { result = 'You Lose!' }
        if(yourPick.includes('spock-icon') && computerPick === 3)  { result = 'You Win!'}
        if(yourPick.includes('spock-icon') && computerPick === 2)  { result = 'You Win!' }
        if(yourPick.includes('spock-icon') && computerPick === 1)  { result = `You Lose!`} 
    
        if(yourPick.includes('scissors-icon') && computerPick === 4)  { result = 'You Lose!' } 
        if(yourPick.includes('scissors-icon') && computerPick === 5)  { result = 'You Win!' }
        if(yourPick.includes('scissors-icon') && computerPick === 3)  { result = 'You Lose!'}
        if(yourPick.includes('scissors-icon') && computerPick === 2)  { result = 'Draw!' }
        if(yourPick.includes('scissors-icon') && computerPick === 1)  { result = `You Win!`}
        
        if(yourPick.includes('rock-icon') && computerPick === 4)  { result = 'You Lose!' } 
        if(yourPick.includes('rock-icon') && computerPick === 5)  { result = 'You Lose!' }
        if(yourPick.includes('rock-icon') && computerPick === 3)  { result = 'Draw!'}
        if(yourPick.includes('rock-icon') && computerPick === 2)  { result = 'You Win!' }
        if(yourPick.includes('rock-icon') && computerPick === 1)  { result = `You Win!`} 
        
        if(yourPick.includes('paper-icon') && computerPick === 4)  { result = 'You Win!' } 
        if(yourPick.includes('paper-icon') && computerPick === 5)  { result = 'Draw!' }
        if(yourPick.includes('paper-icon') && computerPick === 3)  { result = 'You Win!'}
        if(yourPick.includes('paper-icon') && computerPick === 2)  { result = 'You Lose!' }
        if(yourPick.includes('paper-icon') && computerPick === 1)  { result = `You Lose!`} 

        return{
            computerPick,
            result
        }
    }

export default logic