import { call, put } from 'redux-saga/effects'
import { receiveSearchResult }  from '../actions/UserSearchActions'
import * as XhrHandler from '../xhr/XhrHandler'

export function* doSearch( reducer )
{
	const url 	=	"https://api.github.com/search/users?q="+reducer.search.query;

	try
	{
		const user	=	yield call( XhrHandler.get , url );
		
		yield put( receiveSearchResult( user ) );
	}
	catch( e )
	{
		console.error( e );
	}	
}