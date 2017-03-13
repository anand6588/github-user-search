import { call, put } from 'redux-saga/effects'
import { userReceived }  from '../actions/UserActions'
import * as XhrHandler from '../xhr/XhrHandler'

export function* getUser( reducer )
{
	const url 	=	"https://api.github.com/users/"+reducer.user.id;

	try
	{
		const user	=	yield call( XhrHandler.get , url );

		yield put( userReceived( user ) );
	}
	catch( e )
	{
		console.error( e );
	}	
}