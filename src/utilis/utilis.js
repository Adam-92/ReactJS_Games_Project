
 export const  presentationOfPicks = async (ref) => {
        /* ref to DOM container of picks */
        const picks =  ref.current.children;

        /* Create Promises for each pick */
        const pentagramImg = () => new Promise (resolve => {
              setTimeout( () => {
                 picks[0].classList.add('animation-pentagram')
                 resolve()
              }, 700)
        }) 
        const scissors = () => new Promise( resolve => {
                setTimeout( () => {
                    picks[1].classList.add('animation-presentation-icons')
                    resolve()
                }, 700)
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
                }
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
