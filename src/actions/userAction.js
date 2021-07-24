import { URL } from './../config/constants';
import { getToken } from './../utils'
const getUser = () => {

    return (dispatch) => {
        dispatch({
            type: "USER_LOADING",
            message: "wait users are loading"
        })
        // api call
        fetch(URL + 'users', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + getToken()
            }

        }).then(res => res.json())
            .then((res) => {

                if (res && res.users) {
                    dispatch({
                        type: "USER_SUCCESS",
                        users: res.users,
                        friends: res.friends
                    })
                }
            })
    }
}

export { getUser }