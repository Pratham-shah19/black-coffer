import React, { createContext, useContext, useReducer } from 'react';
import { initialState } from './reducer';


const stateContext = createContext(initialState);
export const StateProvider = ({reducer,initialState,children})=>{
    return(<stateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </stateContext.Provider>)
}
export const useStateValue = ()=>{
     return useContext(stateContext)};