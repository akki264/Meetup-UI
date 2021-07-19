const initialState = {
    users: []
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {

        case 'auth/register': {
            return {
                ...state,
                users: []
            }
        }
        default: return state
    }


}