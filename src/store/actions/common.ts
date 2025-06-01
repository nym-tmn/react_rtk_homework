// Sync

export const setIsLoading = (actionType: string) => ({
	type: actionType,
})

export const setResourse = <T>(actionType: string, resourse: T) => ({
	type: actionType,
	payload: resourse,
})

export const setError = (actionType: string, errorMessage: string) => ({
	type: actionType,
	payload: errorMessage,
})