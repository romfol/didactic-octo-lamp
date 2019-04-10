import React, { Component } from 'react';
import Category from '../src/components/category/category';
import Home from '../src/components/home/home';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="app">
          <BrowserRouter>
            <header>Hello Header</header>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Category} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;

// {
//   /* <Link to={`${match.url}/${item.id}`}>
// <Item {...item} />
// <br />
// </Link>
// <Route path={`${match.url}/${item.id}`} component={Details} /> */
// }
