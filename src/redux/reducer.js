import {combineReducers} from 'redux'

function dataReducer(state=[],action){
  switch(action.type){
    case 'DATA' : return action.data

    default : return state
  }
}

function getUserReducer(state={},action){
  switch(action.type){
    case "GITHUBUSER": return action.content
    case "SEARCH": return action.content
    default: return state
  }
}
const rootReducer=combineReducers({
  data:dataReducer,
  user:getUserReducer
})
export default rootReducer
