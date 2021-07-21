import { isLogin, setLogout, setLogin } from "../utils/index"

const initialState = {
    isLogin: isLogin() ? true : false,
    user: []

}

export default function authReducer(state = initialState, action) {

    switch (action.type) {

        case 'auth/login': {
            setLogin(action.payload.token, action.payload.user);
            return {
                ...state,
                isLogin: true,
                user: action.payload.user
            }
        }
        case 'auth/logout': {
            setLogout();
            return {
                ...state,
                isLogin: false,
                user: []
            }
        }
        default: return state

    }
}
