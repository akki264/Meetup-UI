import React from "react";
import { Link, useLocation } from 'react-router-dom';


function Home() {


    function editProfile() {


    }
    function usersPage() {


    }

    return (
        <div className="home">
            <h1>Welcom Akshay</h1>
            <h3 onClick={editProfile}><Link to="/editprofile" style={{
                textDecoration: 'none',
                color: 'cornflowerblue',
                fontSize: 'larger'
            }} >Edit Profile</Link></h3>

            <h3 onClick={usersPage}><Link to="/users" style={{
                textDecoration: 'none',
                color: 'cornflowerblue',
                fontSize: 'larger'
            }}>Users</Link></h3>


        </div>


    )

}

export default Home;