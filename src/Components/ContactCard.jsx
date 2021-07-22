import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';

import IconButton from '@material-ui/core/IconButton';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DeleteIcon from '@material-ui/icons/Schedule';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function ContactCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader

                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <DeleteIcon />
                    </IconButton>
                }
                title={props.name}
                subheader={props.email}


            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to friends">
                    <GroupAddIcon />
                </IconButton>
                {/* <IconButton aria-label="call schedule">
                    <ScheduleIcon />
                </IconButton> */}


            </CardActions>



        </Card>

    );
}