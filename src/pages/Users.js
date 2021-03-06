import React from "react";
import { Container, Typography, Grid } from '@material-ui/core'
import { useState } from "react";
import { useEffect } from "react";
import { getToken } from "../utils";
import { URL } from './../config/constants';
import ContactCard from "../Components/ContactCard";
import ScheduleDialogue from "../Components/ScheduleDialogue";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions/userAction";
import moment from 'moment';

function Users(props) {

    const [openSchedule, setOpenSchedule] = useState(false);
    const [scheduleFriendId, setScheduleFriendId] = useState(null);
    const history = useHistory();

    const dispatch = useDispatch();
    const storeUser = useSelector((state) => {
        console.log(state);
        return state.userReducer

    });
    useEffect(() => {
        getUsers()
    }, [])



    function getUsers() {
        // fetch(URL + 'users', {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": "Bearer " + getToken()
        //     }

        // }).then(res => res.json())
        //     .then((res) => {

        //         if (res && res.users) {
        //             setUsers(res.users);
        //             setFriends(res.friends);
        //         }
        //     })
        dispatch(getUser());


    }


    function connectUser(id, unFriend = false) {
        fetch(URL + 'getConnect', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer" + getToken()
            },
            body: JSON.stringify({
                friendId: id,
                unFriend

            })
        }).then(res => res.json())
            .then(() => {
                getUsers()
            })


    }
    function scheduleAdd(scheduleData) {
        fetch(URL + 'addschedule', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + getToken()
            },
            body: JSON.stringify({
                "friend_id": scheduleFriendId,
                "title": scheduleData.title,
                "meeting_time": moment(scheduleData.meetingTime).format('yyyy-MM-DD hh:mm:ss'),

                "description": scheduleData.description
            })
        }).then(res => res.json())
            .then(() => {
                history.push('/schedules')
            })
    }

    return (
        <Container>
            <Typography gutterBottom variant="h5" style={{ color: '#13a2f5' }} component="h2">
                Friends
            </Typography>
            <Grid container spacing={4} >
                {storeUser.friends.map((item) => {
                    return <Grid item xs={12} md={3} >
                        <ContactCard name={item.first_name + " " + item.last_name}
                            user={item}
                            showScheduleBtn={true}
                            unFriendBtn={true}
                            scheduleCall={() => {
                                setOpenSchedule(true);
                                setScheduleFriendId(item.friend_id);
                            }}
                            unFriend={() => {
                                connectUser(item.id, true)
                            }} />
                    </Grid>
                })}
            </Grid>

            <Typography gutterBottom variant="h5" style={{ color: '#13a2f5' }} component="h2">
                Users
            </Typography>
            <Grid container spacing={4} >
                {storeUser.users.map((item) => {
                    return <Grid item xs={12} md={3} >
                        <ContactCard name={item.first_name + " " + item.last_name} user={item} unFriendBtn={false} showConnectBtn={true}
                            connectUser={() => {
                                connectUser(item.id)
                            }} />
                    </Grid>
                })}
            </Grid>
            <ScheduleDialogue openDialog={openSchedule}
                closeDialog={() => { setOpenSchedule(false) }}
                saveDialog={(scheduleForm) => {
                    scheduleAdd(scheduleForm)
                }} />
        </Container>
    );
}


export default Users;
