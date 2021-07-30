import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState } from "react";
import { useEffect } from "react";
import { URL } from './../config/constants';
import { getToken, getTimezone } from "./../utils";
import ScheduleDialogue from "../Components/ScheduleDialogue";
import moment from "moment";


const useStyles = makeStyles({
    root: {
        marginTop: 5,
    },
    boldName: {
        fontWeight: 'bold'
    }
});


function Schedules() {
    const classes = useStyles();
    const auth = useSelector((state) => state.authReducer)
    const [rows, setRows] = useState([])
    const [openSchedule, setOpenSchedule] = useState(false)
    const [scheduleEditData, setSechduleEditData] = useState({})
    const currentTimezone = getTimezone();

    const onDelete = () => {
        fetch(URL + 'deleteschedule/' + scheduleEditData.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + getToken()
            },
        }).then(res => res.json())
            .then((response) => {
                getSchedule()
            })
    }

    useEffect(() => {
        console.log(auth);
        // get list of schedules
        getSchedule()

    }, [])

    const getSchedule = () => {
        fetch(URL + 'schedule', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + getToken()
            }
        }).then(res => res.json())
            .then((response) => {


                setRows(response.schedules)
            })
    }
    const onEdit = (scheduleFormData) => {

        fetch(URL + 'updateschedule/' + scheduleEditData.id, {
            method: "PUT",
            headers: {
                "Content-Type": "applicaiton/json",
                "Authorization": "Bearer " + getToken()
            },
            body: JSON.stringify({
                'title': scheduleFormData.title,
                'meeting_time': scheduleFormData.meetingTime,
                'description': scheduleFormData.description,
            })
        }).then(res => res.json)
            .then((response) => {
                getSchedule()
            })
    }


    return (
        <div>
            <Container className={classes.root} >
                <Typography variant="h5" component="h5" >Schedules</Typography>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.boldName} > Friend Name </TableCell>
                                <TableCell className={classes.boldName} > Title </TableCell>
                                <TableCell className={classes.boldName} > Time </TableCell>
                                <TableCell className={classes.boldName} > Status </TableCell>
                                <TableCell className={classes.boldName} > Actions </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell >{auth.user.id == row.friend_id ? `${row.user_data[0].first_name} ${row.user_data[0].last_name}` : `${row.friend_user[0].first_name} ${row.friend_user[0].last_name}`}</TableCell>
                                    <TableCell >{row.title}</TableCell>
                                    <TableCell >{row.meeting_time_as_timezone}</TableCell>
                                    <TableCell>{row.message}</TableCell>
                                    <TableCell >
                                        {
                                            row.status == true ? <Button variant="contained" color="primary"
                                                onClick={() => {
                                                    setOpenSchedule(true)
                                                    setSechduleEditData(row)
                                                }}

                                            >
                                                Edit
                                            </Button> : ''
                                        }
                                        <Button variant="outlined" color="danger"
                                            onClick={() => {
                                                setSechduleEditData(row)
                                                onDelete()
                                            }}
                                        >
                                            Delete
                                        </Button></TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
                {openSchedule && <ScheduleDialogue isEdit={true} editData={scheduleEditData} openDialog={openSchedule} closeDialog={() => {
                    setOpenSchedule(false)
                }} saveDialog={(scheduleData) => {
                    onEdit(scheduleData)
                    setOpenSchedule(false)
                }} />}
            </Container>
        </div >


    )

}

export default Schedules;