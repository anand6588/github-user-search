import { 	SEARCH_REQUESTED,
			SEARCH_RESULT_RECEIVED
		} from '../actions/UserSearchActions.js'


const UserSearchReducer		=	( state = { query : "" } , action ) => {
	
	switch( action.type )
	{
		case SEARCH_REQUESTED:
			return { 
		        ...state,
		        query		: action.search.query,
		        isFetching 	: true
	      	}
		case SEARCH_RESULT_RECEIVED:
			return { 
		        ...state,
		        data : action.result,
		        isFetching 	: false
	      	}
	    default:
	    	return state;
	}
};


export default UserSearchReducer;