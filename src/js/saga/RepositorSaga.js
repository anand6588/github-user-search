import { call, put } from 'redux-saga/effects'
import { reposReceived }  from '../actions/RepositorActions'
import * as XhrHandler from '../xhr/XhrHandler'

export function* getRepo( reducer )
{
	const url 		=	"https://api.github.com/users/"+reducer.repo.id+"/repos";

	try
	{
		const repo	=	yield call( XhrHandler.get , url );

		yield put( reposReceived( repo ) );
	}
	catch( e )
	{
		console.error( e );
	}	
}