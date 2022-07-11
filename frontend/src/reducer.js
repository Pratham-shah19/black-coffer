import check from './check.json'

export const initialState  = {
    data:check
};


export const actionTypes = {
    type:"APPLY_FILTERS",
};

const reducer = (state,action)=>{
    switch(action.type){
        case actionTypes.type:
            return {
                ...state,
               data:action.data,
                
            };
        default :
            return state;
    }
};

export default reducer;