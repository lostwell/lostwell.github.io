import { combineReducers, createStore } from "redux"

import themeReducer from './reducers/theme/themeSlice'
import toggleStateReducer from './reducers/theme/toggleStateSlice'

const store = createStore(combineReducers({
  theme: themeReducer,
  toggleState: toggleStateReducer,
}))

export default store