import {combineReducers} from 'redux'
import auth from './auth'
import message from './message'
import page from './page'

export const rootReducer = combineReducers({
  auth,
  message,
  page
})


export type RootState = ReturnType<typeof rootReducer>