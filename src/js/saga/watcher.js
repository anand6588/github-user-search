import { takeLatest } from 'redux-saga/effects'
import { SEARCH_REQUESTED }  from '../actions/UserSearchActions'
import { USER_REQUESTED }  from '../actions/UserActions'
import { REPOS_REQUESTED }  from '../actions/RepositorActions'
import * as UserSearchSaga from './UserSearchSaga'
import * as UserSaga from './UserSaga'
import * as RepoSaga from './RepositorSaga'

export function* doUserSearch() 
{
	yield takeLatest( SEARCH_REQUESTED , UserSearchSaga.doSearch );
}

export function* fetchUser()
{
	yield takeLatest( USER_REQUESTED , UserSaga.getUser );
}

export function* fetchRepo()
{
	yield takeLatest( REPOS_REQUESTED , RepoSaga.getRepo );
}