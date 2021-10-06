import AppActionType from './AppActionType'


export const showLoader = ()=>{
    return{
        type: AppActionType.showLoader
    }
}

export const hideLoader = ()=>{
    return{
        type: AppActionType.hideLoader
    }
}