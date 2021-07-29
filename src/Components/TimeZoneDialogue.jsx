import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';

import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import moment from 'moment';
import validMomentTimezones from './TimeZoneArray';
import DialogActions from '@material-ui/core/DialogActions';


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
function TimeZoneDialogue(props) {
    const classes = useStyles();
    const [timezone, setTimezone] = useState("");
    const timezoneArray = validMomentTimezones;

    const handleChange = e => {

        const { name, value } = e.target;
        setTimezone({
            ...timezone,
            [name]: value
        })
    }

    return (
        <Dialog
            fullWidth={"md"}
            maxWidth={"md"}
            aria-labelledby="max-width-dialog-title"
            open={props.openDialog}
            onClose={props.closeDialog}

        >
            <DialogTitle id="max-width-dialog-title">Select Timezone </DialogTitle>
            <div className={classes.centerClass}>
                <DialogContent>
                    <form noValidate>
                        <div>
                            <FormControl className={classes.FormControl}>
                                <InputLabel htmlFor="demo-dialog-native">Timezones</InputLabel>
                                <Select
                                    native
                                    value="timezone"
                                    onChange={handleChange}
                                    input={<Input id="demo-dialog-native" />}
                                >

                                    {timezoneArray.map((tz) => (

                                        <option value={tz}>{tz}</option>
                                    ))}

                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </FormControl>
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        props.saveDialog(timezone)
                    }} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={props.closeDialog} color="primary">
                        Ok
                    </Button>
                </DialogActions>

            </div>



        </Dialog>

    )
}

export default TimeZoneDialogue
