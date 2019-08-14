import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import "./App.css";

//redux

import { Provider } from "react-redux";

//header is a function component
import { Header } from "./shared/Header";
import RentalListing from "./components/rental/rental-listing/RentalListing";
import RentalDetail from "./components/rental/rental-detail/RentalDetail";

const store = require("./reducers").init();

console.log(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />

            <div className="container">
              <Route exact path="/" render={() => <Redirect to="/rentals" />} />
              <Route exact path="/rentals" component={RentalListing} />
              {/*RentalDetails can access this data with match.params*/}
              <Route exact path="/rentals/:id" component={RentalDetail} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
