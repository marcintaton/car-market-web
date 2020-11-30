import { Button, FormControl, Grid, Paper, TextField, withStyles } from '@material-ui/core'
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import useForm from "./useForm";
import * as actions from "../actions/Session";
import { connect } from "react-redux";


const styles = theme => ({
  root: {
    textDecoration: 'none'
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
})

/**
 * Render function for view displaying chat module
 */
const Chat = ({ classes, ...props }) => {

  // var commonDMs = props.dms.select(function (x) {
  //   return x.userIdTo = props.authUserId || x.userIdFrom == props.authUserId
  // })

  // var contactedUsers = props.users.select(function(user) {
  //   var contacts = props.dms.filter((value, index, self) => {
  //     return self.
  //   })
  //   contacts.push()
  //   return user.id
  // })

  console.log(props.loadedUser)
  return (
    <Paper className={classes.paper} elevation={5} >
      <Grid container>
        <Grid item xs={8} className={classes.root}>
          <h2>
            Chat
        </h2>
        </Grid>
      </Grid>
    </Paper>

  )
}

const mapStateToProps = state => {
  return {
    authUserId: state.session.authUserId,
    users: state.user.list,
    dms: state.directMessage.list
  }
}

const mapActionsToProps = {
  fetchAuthUser: actions.fetch,
}


export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Chat));
