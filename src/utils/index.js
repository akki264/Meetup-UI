import { LocalSeeOutlined } from "@material-ui/icons";

const isLogin = () => {
    if (localStorage.getItem('isLogin') == "true") {
        return true;
    }
    return false;
}

const setLogin = (token, user) => {

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    return localStorage.setItem('isLogin', true)
}

const setLogout = () => {

    localStorage.setItem('token', '');
    return localStorage.setItem('isLogin', false)
}
const getCurrentUser = () => {
    try {
        const currentUser = localStorage.getItem('user');
        return JSON.parse(currentUser);
    } catch {
        return {};
    }
}
const updateUser = (user) => {

    localStorage.setItem('user', JSON.stringify(user));




}
const getTimezone = () => {

    return localStorage.getItem('timezone')
}
const updateTimezone = (tz) => {
    localStorage.setItem('timezone', tz);
}
const getToken = () => {

    return localStorage.getItem('token')
}
export {

    setLogin,
    setLogout,
    isLogin,
    getToken,
    getCurrentUser,
    updateUser,
    updateTimezone,
    getTimezone
}