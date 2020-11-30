import { Button, FormControl, Grid, IconButton, TextField, withStyles } from '@material-ui/core'
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import useForm from "./useForm";
import * as actions from "../actions/Session";
import { connect } from "react-redux";
import { Mail } from '@material-ui/icons';


const styles = theme => ({
  root: {
    textDecoration: 'none'
  },
  userPage: {
    textAlign: 'right',
    marginTop: '1em',
    textDecoration: 'none'
  },
  margin: {
    marginTop: theme.spacing(1),
  }
})

/**
 * Render function for view displaying global navigation bar
 */
const Navbar = ({ classes, ...props }) => {

  useEffect(() => {
    props.fetchAuthUser(props.authUserId)
  }, [])

  console.log(props.loadedUser)
  return (
    <Grid container>
      <Grid item xs={10} component={Link} to={`/`} className={classes.root}>
        <h1>
          Car Market
        </h1>
      </Grid>
      <Grid item xs={1} component={Link} to={'/chat'} className={classes.userPage}>
        <IconButton aria-label="delete" className={classes.margin}>
          <Mail />
        </IconButton>
      </Grid>
      <Grid item xs={1} component={Link} to={`/user/` + props.authUserId} className={classes.userPage}>
        <h3>
          {props.loadedUser.displayName}
        </h3>
      </Grid>
    </Grid>

  )
}

const mapStateToProps = state => {
  return {
    authUserId: state.session.authUserId,
    loadedUser: state.session.authUser
  }
}

const mapActionsToProps = {
  fetchAuthUser: actions.fetch,
}


export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Navbar));
