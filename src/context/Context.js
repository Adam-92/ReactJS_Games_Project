import React, {useContext} from 'react'

const AppContext = React.createContext();

const AppProvider = ( {children}) => {
    return(
        <AppContext.Provider value={
            'helloFromContext'
        }>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {useGlobalContext, AppProvider, AppContext}