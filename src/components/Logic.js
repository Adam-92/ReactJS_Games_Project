const Logic = (yourPick) => {

   let result = '';
   let points = '';
   let computerPick = Math.round(Math.random() * (5 - 1) + 1);
    
    /* computerPick
       1-lizard, 2-scissors, 3-rock, 4-spock, 5-paper 
    */
    if(yourPick === 'lizard-icon' && computerPick === 4)  { result = 'You Win!' } 
    if(yourPick === 'lizard-icon' && computerPick === 5)  { result = 'You Win!' }
    if(yourPick === 'lizard-icon' && computerPick === 3)  { result = 'You Lose!'}
    if(yourPick === 'lizard-icon' && computerPick === 2)  { result = 'You Lose!' }
    if(yourPick === 'lizard-icon' && computerPick === 1)  { result = `Draw!`} 

    if(yourPick === 'spock-icon' && computerPick === 4)  { result = 'Draw!' } 
    if(yourPick === 'spock-icon' && computerPick === 5)  { result = 'You Lose!' }
    if(yourPick === 'spock-icon' && computerPick === 3)  { result = 'You Win!'}
    if(yourPick === 'spock-icon' && computerPick === 2)  { result = 'You Win!' }
    if(yourPick === 'spock-icon' && computerPick === 1)  { result = `You Lose!`} 

    if(yourPick === 'scissors-icon' && computerPick === 4)  { result = 'You Lose!' } 
    if(yourPick === 'scissors-icon' && computerPick === 5)  { result = 'You Win!' }
    if(yourPick === 'scissors-icon' && computerPick === 3)  { result = 'You Lose!'}
    if(yourPick === 'scissors-icon' && computerPick === 2)  { result = 'Draw!' }
    if(yourPick === 'scissors-icon' && computerPick === 1)  { result = `You Win!`}
    
    if(yourPick === 'rock-icon' && computerPick === 4)  { result = 'You Lose!' } 
    if(yourPick === 'rock-icon' && computerPick === 5)  { result = 'You Lose!' }
    if(yourPick === 'rock-icon' && computerPick === 3)  { result = 'Draw!'}
    if(yourPick === 'rock-icon' && computerPick === 2)  { result = 'You Win!' }
    if(yourPick === 'rock-icon' && computerPick === 1)  { result = `You Win!`} 
    
    if(yourPick === 'paper-icon' && computerPick === 4)  { result = 'You Win!' } 
    if(yourPick === 'paper-icon' && computerPick === 5)  { result = 'Draw!' }
    if(yourPick === 'paper-icon' && computerPick === 3)  { result = 'You Win'}
    if(yourPick === 'paper-icon' && computerPick === 2)  { result = 'You Lose!' }
    if(yourPick === 'paper-icon' && computerPick === 1)  { result = `You Lose!`} 

   return{
        computerPick,
        result
    }    
}

export default Logic