export const apiUrl =
	process.env.NODE_ENV !== 'production'
		? 'https://young-taiga-80393.herokuapp.com/api'
		: 'http://localhost:5000/api'

export const LOCAL_STORAGE_TOKEN_NAME = 'vinh-yeah'