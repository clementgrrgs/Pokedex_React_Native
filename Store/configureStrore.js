import {createStore} from "redux";
import toggleUser from './Reducers/loginReducer'


export default createStore(toggleUser)