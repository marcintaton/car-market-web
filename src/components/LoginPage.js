import { Button, FormControl, Grid, TextField, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from "react-redux";
import useForm from "./useForm";


const styles = theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
    },
    "& .MuiButtonBase-root": {
      marginLeft: theme.spacing(2),
    }
  }
})

const state = {
  login: '',
  password: '',
  isLoading: false
}

/**
 * Render function for view displaying lgoin page and form
 */
const LoginPage = ({ classes, ...props }) => {

  const {
    values,
    setValues,
    handleInputChange
  } = useForm(state)


  const handleSubmit = e => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <h2>
          Log In
        </h2>
      </Grid>
      <Grid item xs={12}>
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <TextField name="login" label="login" variant="filled" onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="password" label="password" type="password" variant="filled" onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12}>
            <Button name="submit" variant="contained" color="primary" type="submit">Submit</Button>
          </Grid>
        </form >
      </Grid>
    </Grid>

  )
}

const mapStateToProps = state => {
  return {

  }
}

const mapActionsToProps = {

}


export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(LoginPage));
