const login = payload => {

    return {
        type: 'auth/login',
        payload
    }
}

const logout = () => {

    return {

        type: 'auth/logout',

    }
}

export {

    login,
    logout
}


