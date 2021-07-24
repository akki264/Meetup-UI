const initialState = {
    users: [],
    isLoading: false,
    message: '',
    friends: []
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {

        case 'USER_LOADING': {
            return {
                ...state,
                isLoading: true,
                message: action.message
            }
        }
        case 'USER_SUCCESS': {
            return {
                ...state,
                users: action.users,
                friends: action.friends,
                isLoading: false
            }
        }
        default: return state
    }


}