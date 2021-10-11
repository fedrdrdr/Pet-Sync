import { combineReducers } from 'redux'

import usersReducer from './usersReducer'
import feedReducer from './feedReducer'
import analysesReducer from './analysesReducer'
import petsReducer from './petReducer'

const rootReducer = combineReducers({
  usersReducer,
  analysesReducer,
  feedReducer,
  petsReducer,
})

export default rootReducer
