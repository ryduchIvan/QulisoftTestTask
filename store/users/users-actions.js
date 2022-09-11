export const LOAD_ITEMS = "LOAD_ITEMS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_USERS = "SET_GOODS";
const setLoading = () => ({
	type: SET_LOADING
})

const setError = (error) => ({
	type: SET_ERROR,
	payload: error
})
const setUsers = (users) => ({
	type: SET_USERS,
	payload: users
})
export const loadUsers = () => (dispatch) => {
	dispatch(setLoading())
	fetch("https://api.unsplash.com/photos/?client_id=822X0T2OXybRn_kWMceRtYU_MdBBPlYikZjOqKcJOhU")
		.then(response => response.json())
		.then(data => dispatch(setUsers(data)))
		.catch(error => dispatch(setError(error.message)));
}
