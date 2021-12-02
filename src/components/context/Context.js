import React, {useContext,useState,useEffect} from 'react'

const AppContext = React.createContext();

const AppProvider = ( {children}) => {
    
    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    const getGames = async () =>{
        try{
            const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                    "x-rapidapi-key": "e3e72a906bmshaf3b0535207fd50p197a61jsn1f124151d645"
                }
            })
            console.log(response);
            if(!response.ok){
                throw Error(response.statusText)
            }else{
                /* All Games */
                const games = await response.json()
                /* Assign fetch games to data */
                setData(games)
            }
           
        }catch(err){
            setError(err)
        }
    }

    
    useEffect( () => {
        getGames()
    },[])

    console.log(data);
    console.log(error)
    

    
    
    
    
    
    return(
        <AppContext.Provider value={
            data
        }>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {useGlobalContext, AppProvider, AppContext}