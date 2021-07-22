import React from "react";
import { Container, Typography, Grid } from '@material-ui/core'
import { useState } from "react";
import { useEffect } from "react";
import { getToken } from "../utils";
import { URL } from './../config/constants';
import ContactCard from "../Components/ContactCard";

function Users(props) {
    const [users, setUsers] = useState([]);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        getUsers()
    }, [])

    function getUsers() {
        fetch(URL + 'users', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + getToken()
            }

        }).then(res => res.json())
            .then((res) => {

                if (res && res.users) {
                    setUsers(res.users);
                    setFriends(res.friends);
                }
            })


    }
    function scheduleCall() {



    }
    function connectUser(id) {
        fetch(URL + 'getConnect', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer" + getToken()
            },
            body: JSON.strigify({
                friendId: id,

            })
        }).then(res => res.json())
            .then(() => {
                getUsers()
            })


    }

    return (
        <Container>
            <Typography gutterBottom variant="h3" style={{ color: 'black' }} component="h2">
                Friends
            </Typography>
            <Grid container spacing={4} >
                {friends.map((item) => {
                    return <Grid item xs={12} md={3} >
                        <ContactCard name={item.username} user={item} friendConnect={false} makeSchedule={true} scheduleCall={scheduleCall} />
                    </Grid>
                })}
            </Grid>
            <Typography gutterBottom variant="h3" style={{ color: 'black' }} component="h2">
                Users
            </Typography>
            <Grid container spacing={4} >
                {users.map((item) => {
                    return <Grid item xs={12} md={3} >
                        <ContactCard name={item.username} user={item} friendConnect={true} makeSchedule={false} connectUser={connectUser} />
                    </Grid>
                })}
            </Grid>
        </Container>
    );
}

export default Users;
