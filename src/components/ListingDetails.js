import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from "@material-ui/core";
import { PersonAddDisabled } from "@material-ui/icons";
import React, { useState, useEffect, Suspense } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as listingActions from "../actions/CarListing";
import * as userActions from "../actions/User";
import CarListingFilter from "./CarListingsFilter";
import { useToasts } from "react-toast-notifications"

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
  },
  button: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  }
})

/**
 * Render function for view displaying details of a single car listing
 */
const ListingDetails = ({ classes, ...props }) => {

  const { addToast } = useToasts()
  const history = useHistory()
  var splitAdress = window.location.href.split("/");
  var filtered = splitAdress.filter(function (el) {
    return el != '';
  });
  var parsedListingId = filtered[filtered.indexOf('listing') + 1]

  useEffect(() => {
    props.fetchAllCarListings()
    props.fetchAllUsers()
  }, [])

  console.log(parsedListingId);
  var listing = props.offerList.find(offer => offer.id == parsedListingId)
  var author = props.userList.find(user => user.id == listing.userId)

  const onDeleteSuccess = () => {
    addToast("Deleted successfully", { appearance: 'info' },
      history.push('/'))
  }

  const onDeleate = id => {
    if (window.confirm('Are you sure?')) {
      props.deleteListing(id, onDeleteSuccess)
    }
  }

  return (
    <Paper className={classes.paper} elevation={5} >
      <Grid container>
        <Grid container item xs={12}>
          <h1>
            Listing Details
          </h1>
        </Grid>
        <Grid container item xs={12} component={Link} to={`/user/${author.id}/`} className={classes.root}>
          <p>
            Added by: {author.displayName}
          </p>
        </Grid>
        <Grid container item xs={12}>
          <p>
            Added on: {new Date(listing.dateAdded * 1000).toLocaleDateString()}
          </p>
        </Grid>
        <Grid container item xs={12}>
          <p>
            Brand: {listing.brand}
          </p>
        </Grid>
        <Grid container item xs={12}>
          <p>
            Model: {listing.model}
          </p>
        </Grid>
        <Grid container item xs={12}>
          <p>
            Production year: {listing.productionYear}
          </p>
        </Grid>
        <Grid container item xs={12}>
          <p>
            Mileage: {listing.mileage}
          </p>
        </Grid>
        <Grid container item xs={12}>
          <p>
            Price: {listing.price}
          </p>
        </Grid>
        <Grid container item xs={12}>
          <p>
            Description: {listing.descrition}
          </p>
        </Grid>
      </Grid>
      {author.id == props.authUserId ?
        <Grid container>
          <Button item xs={1} variant="contained" color="Default" component={Link} to={'/listing/' + listing.id + '/edit'} className={classes.button}>
            Edit
          </Button>
          <Button item xs={1} variant="contained" color="Secondary" onClick={() => { onDeleate(listing.id) }} className={classes.button}>
            Delete
          </Button>
        </Grid>
        : <div></div>}
    </Paper>
  );
}

const mapStateToProps = state => {
  return {
    carListing: state.carListing.currentListing,
    author: state.user.listingAuthor,
    authUserId: state.session.authUserId,
    userList: state.user.list,
    offerList: state.carListing.list
  }
}

const mapActionsToProps = {
  fetchListing: listingActions.fetch,
  fetchUser: userActions.fetch,
  deleteListing: listingActions.deleteListing,
  fetchAllCarListings: listingActions.fetchAll,
  fetchAllUsers: userActions.fetchAll
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(ListingDetails));