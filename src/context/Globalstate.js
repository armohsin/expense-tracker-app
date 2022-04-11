import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import AppReducer from "./AppReducer";


//creating initiating  state
const initialState = {
    transactions:[
       {id:"1", description:"Income 1",transactionAmount:1000},
       {id:"2", description:"Expense 1",transactionAmount:-620},
       {id:"3", description:"Expense 2",transactionAmount:-6500},
       {id:"4", description:"Income 2",transactionAmount:98700},
       {id:"5", description:"Expense 3",transactionAmount:-956}
    ]
}

//crerating global context
export const Globalcontext = createContext(initialState);

//creating provider for context
export const Globalprovider= ({children}) => {

    const [state] = useReducer(AppReducer, initialState)

    return(
        <Globalcontext.Provider value={{transactions:state.transactions}}>
            {children}
        </Globalcontext.Provider> )
}