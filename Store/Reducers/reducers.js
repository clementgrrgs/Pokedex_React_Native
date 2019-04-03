import { combineReducers } from 'redux'
import toggleGotcha from './gotchaReducer'
import toggleUser from './loginReducer'

export default combineReducers({
    toggleGotcha,
    toggleUser
})
