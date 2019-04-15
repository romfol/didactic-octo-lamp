import React, { Component } from 'react';
import Category from '../src/components/category/category';
import Home from '../src/components/home/home';
import Header from '../src/components/header/header';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="app">
          <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Category} />
          </BrowserRouter>
        </div>
      </>
    );
  }
}

export default App;
