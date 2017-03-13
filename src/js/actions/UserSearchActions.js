export const SEARCH_REQUESTED 			= 'SEARCH_REQUESTED'
export const SEARCH_RESULT_RECEIVED		= 'SEARCH_RESULT_RECEIVED'
export const SEARCH_FAILED				= 'SEARCH_FAILED'

export const searchRequest = search => ({
	  type: SEARCH_REQUESTED,
	  search
})

export const receiveSearchResult = result => {
	return{
	  type: SEARCH_RESULT_RECEIVED,
	  result
	}
}

export const searchFailed = search => {
	return{
	  type: SEARCH_FAILED,
	  search
	}
}