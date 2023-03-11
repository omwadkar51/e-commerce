import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import Product from "./components/Product";
import CheckoutPage from "./pages/CheckoutPage";
import ErrorPage from "./pages/ErrorPage";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return(
      <Router>
          <Navbar/>
          <Sidebar/>
          <Switch>
              <Route path='/' exact={true}>
                  <HomePage/>
              </Route>
              <Route path='/about'>
                  <AboutPage/>
              </Route>
              <Route path='/cart'>
                  <CartPage/>
              </Route>
              <Route path='/products' exact={true}>
                  <ProductsPage/>
              </Route>
              <Route path='/products/:id'>
                  <SingleProductPage/>
              </Route>
              <Route path='/checkout'>
                  <CheckoutPage/>
              </Route>
              <Route path='*'>
                  <ErrorPage/>
              </Route>
          </Switch>
          <Footer/>
      </Router>
  );
}

export default App
