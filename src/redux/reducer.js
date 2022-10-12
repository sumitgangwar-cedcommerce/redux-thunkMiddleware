
export const dataReducer = (state={data : {}} , action)=>{
    switch (action.type){
        case 'saveData' :
            return {...state , data : action.payload}
        default : return state
    }
}