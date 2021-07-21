import React, { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import PrivateRoute from "./Components/PrivateRoute";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";

function App() {
    const [contacts, setContacts] = useState([]);
    function addNote(contact) {
        setContacts((prevNotes) => {
            return [...prevNotes, contact];
        });
    }
    function letsDelete(id) {
        setContacts((prevNotes) => {
            return prevNotes.filter((newItem, index) => {
                return index !== id;
            });
        });
    }


    return (

        <Router>
            <div>
                <Header />

                <Footer />


                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/register">
                        <Register onSub={addNote} />
                    </Route>
                    <PrivateRoute path="/edit" Component={Edit} />
                    <PrivateRoute path="/home" Component={Home} />
                    <PrivateRoute path="/users" Component={Users} />



                    <Route path="/users">
                        {contacts.map((newNote, index) => {
                            return (
                                <Users
                                    key={index}
                                    id={index}
                                    onDelete={letsDelete}
                                    fname={newNote.fName}
                                    lname={newNote.lName}
                                    email={newNote.email}
                                    password={newNote.password}
                                />

                            );
                        })}
                    </Route>
                </Switch>
            </div>
        </Router >
    );
}

export default App;
