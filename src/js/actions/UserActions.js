export const USER_REQUESTED		=	"USER_REQUESTED"
export const USER_RECEIVED		=	"USER_RECEIVED"

export const requestUser 	=	user 	=> ({
	type : USER_REQUESTED,
	user
})

export const userReceived 	=	user 	=> ({
	type : USER_RECEIVED,
	user
})