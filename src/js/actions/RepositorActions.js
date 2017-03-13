export const REPOS_REQUESTED	=	"REPOS_REQUESTED"
export const REPOS_RECEIVED		=	"REPOS_RECEIVED"

export const requestRepos 		=	repo 	=> ({
	type : REPOS_REQUESTED,
	repo
})

export const reposReceived 		=	repo 	=> ({
	type : REPOS_RECEIVED,
	repo
})