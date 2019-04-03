import {createStore} from "redux";
//import reducer from './Reducers/reducers'
import toggleUser from './Reducers/loginReducer'


export default createStore(toggleUser)