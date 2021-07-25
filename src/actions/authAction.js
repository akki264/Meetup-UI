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

const editProfile = (payload) => {

    return {
        type: 'auth/editProfile',
        payload
    }

}

export {

    login,
    logout,
    editProfile
}


