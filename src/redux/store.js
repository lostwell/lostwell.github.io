import { combineReducers, createStore } from "redux"

import themeReducer from './reducers/theme/themeSlice'

const store = createStore(combineReducers({
  theme: themeReducer,
}))

export default store