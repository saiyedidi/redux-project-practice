import { createStore } from "redux"
const intialState = {
    balance:0,
    fullName: '',
    mobile: null,
};
function accountReducer(state = intialState, action) {


    switch (action.type) {
        case 'deposit':
            return { ...state, balance:state.balance + +action.payload }
        case 'withdraw':
            return { ...state, balance:state.balance - +action.payload }
        case 'mobileUpdate':
            return { ...state, mobile:action.payload }
        case 'nameUpdate':
            return { ...state, fullName: action.payload }
        case 'reset':
            return intialState    
        default:
            return state
    }

    // if(action.type == 'deposit'){
    //     return { ...state, balance:state.balance + action.payload }
    // }else if(action.type=='withdraw'){
    //     return { ...state, balance:state.balance - action.payload }
    // }else if(action.type=='nameUpdate'){
    //     return { ...state, fullName: action.payload }
    // }else if(action.type == 'mobileUpdate'){
    //     return { ...state, mobile:action.payload }  
    // }else{
    //     return state
    // }


}

const store = createStore(accountReducer)
export default store
// console.log(store.getState())
// store.dispatch({ type:'deposit', payload: 1000 })
// console.log(store.getState())
// store.dispatch({ type:'withdraw', payload: 10 })
// console.log(store.getState())
// store.dispatch({ type:'mobileUpdate', payload: 9618868238 })
// console.log(store.getState())
// store.dispatch({ type: 'nameUpdate', payload: 'sai' })
// console.log(store.getState())
