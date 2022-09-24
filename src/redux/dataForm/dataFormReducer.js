import initialState from "./initialState";


const dataFormReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'DEVS_ADDED':
            return {
                ...state,
                devs : payload
            };
        case 'DELETE_DEVS':
            return {
                ...state,
                devs : payload
            }
    
        default:
            return state;
    }
}

export default dataFormReducer;