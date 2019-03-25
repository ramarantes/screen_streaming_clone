import {actionTypes} from '../actions/consts'


const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    userName: null,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.SIGN_IN:
            return {...state, isSignedIn: true, ...action.payload};
        case actionTypes.SIGN_OUT:
            return {...state, isSignedIn: false, userId:null};
        default:
            return state;
    }
}