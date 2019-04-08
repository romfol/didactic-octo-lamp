import React, { Component } from 'react';
import Category from '../src/components/category/category';
import Home from '../src/components/home/home';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header> Hello Header</header>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
      </BrowserRouter>
    );
  }
}

export default App;
