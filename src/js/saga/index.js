import { fork } from 'redux-saga/effects';

import * as Sagas from './watcher';

export default function* allSagas() 
{
	let sagasForkArr	=	[];
	
	for( let sagaFunc in Sagas )
	{
		if( Sagas.hasOwnProperty( sagaFunc ) )
			sagasForkArr.push( fork( Sagas[sagaFunc] ) )
	}
	
	yield sagasForkArr;
}