import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import CarListings from './components/CarListings';
import { Container, Switch } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import { Router } from '@material-ui/icons';
import LoginPage from './components/LoginPage';
import ListingDetails from './components/ListingDetails';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import CarListingForm from './components/CarListingForm';
import CarListingEdit from './components/CarListingEdit';
import { ToastProvider } from 'react-toast-notifications';
import Chat from './components/Chat';

/**
 * Renders application components, sets up routing
 */
function App() {
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true}>
        <Container maxWidth="lg">
          <BrowserRouter>
            <Navbar />
            <Route exact path='/' component={CarListings} />
            <Route path='/login' component={LoginPage} />
            <Route path='/listing/:id' component={ListingDetails} />
            <Route path='/user/:id' component={UserDetails} />
            <Route path='/addListing' component={CarListingForm} />
            <Route path='/listing/:id/edit' component={CarListingEdit} />
            <Route path='/chat' component={Chat} />
          </BrowserRouter>
        </Container>
      </ToastProvider>
    </Provider>
  );
}

export default App;
