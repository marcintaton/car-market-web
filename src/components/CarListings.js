import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from "@material-ui/core";
import { PersonAddDisabled } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions/CarListing";
import * as userActions from "../actions/User";
import * as dmActions from "../actions/DirectMessage";
import { USER_ACTION_TYPES } from "../ActionTypes";
import CarListingFilter from "./CarListingsFilter";

const styles = theme => ({
  root: {
    "& .MuiTableCell-head": {
      fontSize: "1.1rem",
      fontStyle: "italic"
    },

    textDecoration: 'none'
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  newButton: {
    textAlign: 'right'
  }
})

const CarListings = ({ classes, ...props }) => {

  useEffect(() => {
    props.fetchAllCarListings()
    props.fetchAllUsers()
  }, [])

  var filtered = props.carListingsList.filter(function (item) {
    if (props.filter == '') return true
    return item.brand == props.filter
  })


  return (
    <Paper className={classes.paper} elevation={5} >
      <Grid container>
        <Grid container item xs={11}></Grid>
        <Grid container item xs={1} className={classes.newButton}>
          <Button variant="contained" color="Primary" component={Link} to={'/addListing'}>
            Add new
          </Button>
        </Grid>
        <Grid container item xs={12}>
          <CarListingFilter />
        </Grid>
        <Grid container item xs={12}>
          <TableContainer>
            <Table>
              <TableHead className={classes.root}>
                <TableRow>
                  <TableCell>Added</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Model</TableCell>
                  <TableCell>Produced in</TableCell>
                  <TableCell>Mileage</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  filtered.map((record, index) => {
                    return (
                      <TableRow key={index} hover component={Link} to={`/listing/${record.id}/`} className={classes.root}>
                        <TableCell>{new Date(record.dateAdded * 1000).toLocaleDateString()}</TableCell>
                        <TableCell>{record.brand}</TableCell>
                        <TableCell>{record.model}</TableCell>
                        <TableCell>{record.productionYear}</TableCell>
                        <TableCell>{record.mileage}</TableCell>
                        <TableCell>{record.price}</TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper >
  );
}

const mapStateToProps = state => {
  return {
    carListingsList: state.carListing.list,
    filter: state.carListing.filter
  }
}

const mapActionsToProps = {
  fetchAllCarListings: actions.fetchAll,
  fetchAllUsers: userActions.fetchAll,
  fetchAllDMs: dmActions.fetchAll
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(CarListings));