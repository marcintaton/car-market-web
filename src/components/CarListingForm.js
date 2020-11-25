import { Paper, Grid, withStyles, TextField, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import useForm from "./useForm";
import * as actions from "../actions/CarListing";
import { useHistory } from 'react-router-dom';
import { useToasts } from "react-toast-notifications"

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing(2),
    minWidth: 400,
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 400,
  },
  marginated: {
    margin: theme.spacing(2),
  }
})

const initialFormValues = {
  dateAdded: '',
  userId: '',
  brand: '',
  model: '',
  productionYear: '',
  mileage: '',
  price: '',
  descrition: ''
}

const CarListingForm = ({ classes, ...props }) => {

  const { addToast } = useToasts()

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('brand' in fieldValues)
      temp.brand = fieldValues.brand != '' ? '' : 'Field required'
    if ('model' in fieldValues)
      temp.model = fieldValues.model != '' ? '' : 'Field required'
    if ('productionYear' in fieldValues)
      temp.productionYear = new RegExp('^19[0-9][0-9]$|^20[0|1][0-9]$').test(fieldValues.productionYear) ? '' : 'Invalid value'
    if ('mileage' in fieldValues)
      temp.mileage = new RegExp('[0-9]+$').test(fieldValues.mileage) ? '' : 'Invalid value'
    if ('price' in fieldValues)
      temp.price = new RegExp('[0-9]+$').test(fieldValues.price) ? '' : 'Invalid value'

    setErrors({
      ...temp
    })

    if (fieldValues == values)
      return Object.values(temp).every(x => x == '')
  }

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange
  } = useForm(initialFormValues, validate)
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault()

    const onSuccess = (id) => {
      addToast("Added successfully", { appearance: 'success' },
        history.push('/listing/' + id))
      // history.push('/'))
    }

    if (validate()) {
      values.dateAdded = Math.floor(Date.now() / 1000)
      values.userId = props.user
      props.createListing(values, onSuccess)
    }
    console.log(values)
  }

  return (
    <Paper className={classes.paper} elevation={5} >
      <Grid container >
        <Grid container className={classes.marginated}>
          <h2>
            Add new listing
          </h2>
        </Grid>
        <form autoComplete='off' noValidate onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}
                {...(errors.brand && { error: true })}>
                <InputLabel>Brand</InputLabel>
                <Select
                  name="brand"
                  value={values.brand}
                  onChange={handleInputChange}>
                  <MenuItem value={''}>None</MenuItem>
                  <MenuItem value={'Honda'}>Honda</MenuItem>
                  <MenuItem value={'Ford'}>Ford</MenuItem>
                </Select>
                {(errors.brand && <FormHelperText>{errors.brand}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}
                {...(errors.model && { error: true })}>
                <InputLabel>Model</InputLabel>
                <Select
                  name="model"
                  value={values.model}
                  onChange={handleInputChange}
                  {...(errors.model && { error: true, helperText: errors.model })}>
                  <MenuItem value={''}>None</MenuItem>
                  <MenuItem value={'Civic'}>Civic</MenuItem>
                  <MenuItem value={'Fiesta'}>Fiesta</MenuItem>
                </Select>
                {(errors.model && <FormHelperText>{errors.model}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item xs={12} >
              <TextField
                name="productionYear"
                label="Production year"
                className={classes.textField}
                multiline
                variant="filled"
                value={values.productionYear}
                onChange={handleInputChange}
                {...(errors.productionYear && { error: true, helperText: errors.productionYear })}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                name="mileage"
                label="Mileage"
                className={classes.textField}
                multiline
                variant="filled"
                value={values.mileage}
                onChange={handleInputChange}
                {...(errors.mileage && { error: true, helperText: errors.mileage })}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                name="price"
                label="Price"
                className={classes.textField}
                multiline
                variant="filled"
                value={values.price}
                onChange={handleInputChange}
                {...(errors.price && { error: true, helperText: errors.price })}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                name="descrition"
                label="Description"
                className={classes.textField}
                multiline
                variant="filled"
                value={values.descrition}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} className={classes.marginated}>
              <Button
                type='submit'
                variant='contained'
                color='primary'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Paper>
  );
}

const mapStateToProps = state => {
  return {
    user: state.session.authUserId
  }
}

const mapActionsToProps = {
  createListing: actions.create
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(CarListingForm));