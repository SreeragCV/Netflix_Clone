import { createContext, useState } from "react";

export const ResultContext= createContext(null);

function Context({children}) {
    const [movie, setMovie] = useState('');
    return(
        <ResultContext.Provider value={{movie, setMovie}}>
            {children}
        </ResultContext.Provider>
    )
}


export default Context;