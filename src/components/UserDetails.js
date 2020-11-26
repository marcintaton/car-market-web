import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from "@material-ui/core";
import { PersonAddDisabled, SentimentSatisfied } from "@material-ui/icons";
import React, { setState, useEffect, Suspense } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as listingActions from "../actions/CarListing";
import * as userActions from "../actions/User";
import { user } from "../reducers/User";
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
    padding: theme.spacing(2)
  }
})

const state = {
  myOffers: []
}

const UserDetails = ({ classes, ...props }) => {

  var splitAdress = window.location.href.split("/");
  var filtered = splitAdress.filter(function (el) {
    return el != '';
  });
  var parsedId = filtered[filtered.indexOf('user') + 1]
  var user = props.users.find(user => user.id == parsedId)

  state.myOffers = props.carListings.filter(function (item) {
    return item.userId == parsedId
  })

  return (
    <Paper className={classes.paper} elevation={5} >
      <Grid container>
        <Grid container item xs={12}>
          <h1>
            User Details
          </h1>
        </Grid>
        <Grid container item xs={12}>
          <p>
            Name: {user.displayName}
          </p>
        </Grid>
        <Grid container item xs={12}>
          <p>
            Phone: {user.telephoneNumber}
          </p>
        </Grid>

        <h3>User offers</h3>

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
                  state.myOffers.map((record, index) => {
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
    </Paper>
  );
}

const mapStateToProps = state => {
  return {
    carListings: state.carListing.list,
    users: state.user.list
  }
}

const mapActionsToProps = {
  fetchListings: listingActions.fetchAll,
  fetchUser: userActions.fetch,
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(UserDetails));