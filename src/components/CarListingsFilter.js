import { FormControl, Grid, Select, withStyles, makeStyles, MenuItem, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/CarListing";
import useForm from "./useForm";

const initialValues = {
  brand: '',
  model: ''
}

const styles = theme => ({
  formControl: {
    minWidth: 120,
  },
  filterSection: {
    marginBottom: theme.spacing(5),
  }
});

/**
 * Render function for view displaying module for filtering offers
 */
const CarListingFilter = ({ classes, ...props }) => {

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange
  } = useForm(initialValues)

  const handleFormChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
    props.filterCarListings(value)
  }

  return (
    <Grid className={classes.filterSection}>
      <Grid>
        <h3>
          Filter results
      </h3>
      </Grid>
      <Grid>
        <FormControl className={classes.formControl}>
          <InputLabel>Brand</InputLabel>
          <Select labelId="brand" name="brand" value={values.brand} onChange={handleFormChange}>
            <MenuItem value={''}>None</MenuItem>
            <MenuItem value={'Honda'}>Honda</MenuItem>
            <MenuItem value={'Ford'}>Ford</MenuItem>
          </Select>
        </FormControl>
        {/* <FormControl className={classes.formControl}>
          <InputLabel>Model</InputLabel>
          <Select labelId="model" name="model" value={values.model} onChange={handleFormChange}>
            <MenuItem value={'Civic'}>Civic</MenuItem>
            <MenuItem value={'Accord'}>Accord</MenuItem>
            <MenuItem value={'Fiesta'}>Fiesta</MenuItem>
          </Select>
        </FormControl> */}
      </Grid>
    </Grid>

  );
}

const mapStateToProps = state => {
  return {
    filter: state.carListing.filter
  }
}


const mapActionsToProps = {
  filterCarListings: actions.filter,
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(CarListingFilter));