import AppActionType from './AppActionType'

const init = {
    isLoading: false
}

const AppReducer = (state = init, {type}) =>{
    switch(type){
        case AppActionType.showLoader:
            return{
                ...state,
                isLoading: true
            }
        case AppActionType.hideLoader:
            return{
                ...state,
                isLoading: false
            }    
            default: return state
    }
}

export default AppReducer