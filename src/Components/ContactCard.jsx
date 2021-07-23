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
import DeleteIcon from '@material-ui/icons/Delete';



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

                    props.unFriendBtn && <IconButton onClick={props.unFriend} aria-label="settings">
                        <DeleteIcon />
                    </IconButton>

                }
                title={props.name}
                subheader={props.email}
                style={{
                    textDecoration: 'none',
                    color: 'cornflowerblue',
                    fontSize: 'larger'
                }}


            />
            <CardActions disableSpacing>
                {props.showConnectBtn && <IconButton onClick={props.connectUser} aria-label="add to friends">
                    <GroupAddIcon o />
                </IconButton>}
                {props.showScheduleBtn && <IconButton onClick={() => {
                    props.scheduleCall()
                    console.log('test')
                }} aria-label="call schedule">
                    <ScheduleIcon />
                </IconButton>}


            </CardActions>



        </Card>

    );
}