import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import AppReducer from "./AppReducer";


//creating initiating  state
const initialState = {
    transaction:[
       {id:"1", description:"Income 1",transaction:1000},
       {id:"2", description:"Expense 1",transaction:-620},
       {id:"3", description:"Expense 2",transaction:-6500},
       {id:"4", description:"Income 2",transaction:98700},
       {id:"5", description:"Expense 3",transaction:-956}
    ]
}

//crerating global context
export const Globalcontext = createContext(initialState);

//creating provider for context
export const Globalprovider= ({children}) => {

     const [state,dispatch] = useReducer(AppReducer, initialState)

    return(
        <Globalcontext.Provider value={{transactions:state.transaction}}>
            {children}
        </Globalcontext.Provider> )
}