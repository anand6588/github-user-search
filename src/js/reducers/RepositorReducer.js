import { REPOS_REQUESTED, REPOS_RECEIVED } from '../actions/RepositorActions'

const RepoReducer	=	( state = { isFetched 	: false } , action )	=> {
	switch( action.type )
	{
		case REPOS_REQUESTED:
			return { 
		        ...state,
		        data		: undefined,
		        id 			: action.id,
		        isFetched 	: false
	      	}
		case REPOS_RECEIVED:
			return { 
		        ...state,
		        data 		: action.repo,
		        isFetched 	: true
	      	}
	    default:
	    	return state;
	}
}

export default RepoReducer;