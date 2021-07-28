import React, { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Schedules from "./pages/Schedules";
import PrivateRoute from "./Components/PrivateRoute";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";

function App() {

    // function letsDelete(id) {
    //     setContacts((prevNotes) => {
    //         return prevNotes.filter((newItem, index) => {
    //             return index !== id;
    //         });
    //     });
    // }


    return (

        <Router>
            <div>
                <Header />




                <Switch>
                    <Route path="/" exact>
                        <Login />
                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>
                    <PrivateRoute path="/editprofile" component={Edit} />
                    <PrivateRoute path="/home" component={Home} />
                    <PrivateRoute path="/users" component={Users} />
                    <PrivateRoute path="/schedules" component={Schedules} />
                    {/* <PrivateRoute path="/logout" component={Logout} /> */}


                    <Route path="/users">


                        <Users />
                    </Route>




                </Switch>
                <Footer />
            </div>
        </Router >
    );
}

export default App;
