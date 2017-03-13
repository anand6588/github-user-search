import { combineReducers } from 'redux'
import UserSearchReducer from './UserSearchReducer'
import UserReducer from './UserReducer'
import RepoReducer from './RepositorReducer'


export default combineReducers( { UserSearchReducer , UserReducer , RepoReducer } )