// @flow

import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { getBooks } from "./state/books/actions";
import Layout from "./containers/Layout/Layout";
import AddBook from './containers/BookForm/AddBook';
import EditBook from './containers/BookForm/EditBook'

type PropsT = {
  getBooks: Function,
};
function App(props: PropsT) {
  const { getBooks} = props;
  useEffect(() => {
    getBooks();
    
  }, []);


  return (
    <Router>
       <div className="App">
       <Switch>
           <Route exact path="/" component={Layout} />
           <Route exact path="/add-book" component={AddBook} />
           <Route exact path="/edit-book/:id" component={EditBook} />
      </Switch>
      </div>
    </Router>
   
  );
}




export default connect(
  null,
  { getBooks }
)(App);
