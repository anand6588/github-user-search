import { USER_REQUESTED, USER_RECEIVED } from '../actions/UserActions.js'

const UserReducer	=	( state = { isFetched 	: false, data : {} } , action )	=> {
	switch( action.type )
	{
		case USER_REQUESTED:
			return { 
		        ...state,
		        data		: {},
		        id 			: action.id,
		        isFetched 	: false
	      	}
		case USER_RECEIVED:
			return { 
		        ...state,
		        data 		: action.user,
		        id 			: action.user.login, 
		        isFetched 	: true
	      	}
	    default:
	    	return state;
	}
}

export default UserReducer;