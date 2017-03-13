import { createStore , applyMiddleware } from 'redux'
import reducers from '../reducers'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import Sagas from '../saga'

const ConfigureStore		=	() => {
	
	const sagaMiddleware 	=	createSagaMiddleware();
	
	const middleware 		= 	[ sagaMiddleware , createLogger() ];

	const store = createStore( reducers, applyMiddleware( ...middleware ) );
	
	sagaMiddleware.run( Sagas );

	return store;
}

export default ConfigureStore;