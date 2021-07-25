import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { editProfile } from "../actions/authAction";
import { URL } from '../config/constants';
import { getToken } from '../utils/index';

function Edit() {

    const [n, newName] = useState(
        {
            fname: "",
            lname: ""

        }
    );
    const history = useHistory();
    const dispatch = useDispatch();

    function handleChange(event) {
        // console.log(event.target.value);
        const { name, value } = event.target;
        newName(preValue => {
            return {
                ...preValue,
                [name]: value
            };
        });


    }

    function updateInfo(event) {

        fetch(URL + 'editProfile', {
            method: "PUT",
            body: JSON.stringify({
                first_name: n.fname,
                last_name: n.lname

            }),
            headers: { "Content-Type": "application/json", "Authorization": "Bearer" + getToken() }


        }).then(res => res.json())
            .then(res => {

                dispatch(editProfile(res.user));
                history.push('/home');
            })


        event.preventDefault();


    }

    return (


        <div className="container">
            <h1>Edit Profile</h1>
            <form onSubmit={updateInfo}>
                <input onChange={handleChange} type="text" name="fname" value={n.fname} placeHolder="New FName" ></input>
                <input onChange={handleChange} type="text" name="lname" value={n.lname} placeHolder="New LName" ></input>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default Edit;