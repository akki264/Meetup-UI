import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles"
import moment from "moment-timezone";
import { getToken, getTimezone } from "./../utils";

const useStyles = makeStyles((theme) => ({

    form: {
        display: 'flex',
        flexDirection: 'columns',
        margin: 'auto',
        justifyContent: 'center',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: "150px",
        width: "70%"
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
    buttonGroup: {
        marginTop: theme.spacing(3),
    },
    buttonScd: {
        marginLeft: theme.spacing(1),
    },
    centerClass: {

        alignItems: 'center',
        display: 'flex'
    }

}));

export default function ScheduleDialogue(props) {
    const classes = useStyles();

    const [scheduleForm, setScheduleForm] = useState({});
    const currentTimezone = getTimezone();

    const onValueChange = (event) => {
        const { name, value } = event.target;
        setScheduleForm({
            ...scheduleForm,
            [name]: value
        })
    }
    useEffect(() => {
        console.log(props.editData)
        if (props.isEdit) {
            setScheduleForm({
                meetingTime: props.editData.meeting_time ? moment(props.editData.meeting_time).tz(currentTimezone).format('yyyy-MM-DDThh:mm:ss') : '',
                title: props.editData.title,
                description: props.editData.description,
            })
        } else {
            setScheduleForm({
                meetingTime: '',
                title: '',
                description: '',

            })
        }
    }, []);

    return (
        <Dialog
            fullWidth={"md"}
            maxWidth={"md"}
            aria-labelledby="max-width-dialog-title"
            open={props.openDialog}
            onClose={props.closeDialog}

        >
            <DialogTitle id="max-width-dialog-title">Add Schedule</DialogTitle>
            <div className={classes.centerClass}>

                <DialogContent >
                    <form noValidate>
                        <div>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    id="datetime-local"
                                    label="Schedule Date and Time"
                                    type="datetime-local"
                                    defaultValue={new Date()}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    name="meetingTime"
                                    value={scheduleForm.meetingTime}
                                    onChange={onValueChange}

                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    id="title"
                                    label="Title"
                                    type="text"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    name="title"
                                    value={scheduleForm.title}
                                    onChange={onValueChange}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    id="Discription"
                                    label="Discription"
                                    type="text"
                                    rows={2}
                                    multiline
                                    rowsMax={6}
                                    name="description"
                                    value={scheduleForm.description}
                                    onChange={onValueChange}
                                />
                            </FormControl>
                        </div>
                    </form>
                    <div className={classes.buttonGroup}>
                        <Button onClick={() => {
                            console.log(scheduleForm);
                            if (scheduleForm.meetingTime != '' && scheduleForm.title != '' && scheduleForm.description != '') {
                                props.saveDialog(scheduleForm)
                            }
                        }} className={classes.buttonScd} variant="contained" color="primary" >
                            Save
                        </Button>
                        <Button onClick={props.closeDialog} className={classes.buttonScd} variant="contained" color="primary">Close</Button>
                    </div>

                </DialogContent>
            </div>

        </Dialog >


    );
}