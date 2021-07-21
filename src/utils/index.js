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

const getToken = () => {

    return localStorage.getItem('token')
}
export {

    setLogin,
    setLogout,
    isLogin,
    getToken
}