export const apiUrl =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:5000/api'
		: 'https://traditional-music-web-server.onrender.com/api'

//'http://localhost:5000/api'
//'https://traditional-music-web-server.onrender.com/api'
export const LOCAL_STORAGE_TOKEN_NAME = 'vinh-yeah'