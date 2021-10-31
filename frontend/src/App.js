import React from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Markets from "./components/Markets/Markets";
import Navigation from './components/Navigation/Navigation';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import StockDetails from "./components/StockDetails/StockDetails";
import NotFound from "./components/NotFound/NotFound";
import Auth from "./components/Auth/Auth";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PurchasedStocks from "./components/PurchasedStocks/PurchasedStocks";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import PurchasedStockDetails from "./components/PurchasedStockDetails/PurchasedStockDetails";
import Dashboard from "./components/Dashboard/Dashboard";
import Guide from "./components/Guide/Guide";
import Careers from "./components/Careers/Careers";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="font-inter">
      <ScrollToTop>
        <Navigation />
        <Switch>
          <Route exact path='/' render={() => (<Home />)} />
          <Route exact path='/guide' render={() => (<Guide />)} />
          <Route exact path='/careers' render={() => (<Careers />)} />
          <Route exact path='/markets' render={() => (<Markets />)} />
          <Route exact path='/auth' render={() => (<Auth />)} />
          <Route exact path='/stock/:id' render={(props) => (<StockDetails id={props.match.params.id} />)} />
          <ProtectedRoute exact path='/dashboard' comp={Dashboard} />
          <ProtectedRoute exact path='/purchased' comp={PurchasedStocks} />
          <ProtectedRoute exact path='/purchased/:id' comp={PurchasedStockDetails} />
          <ProtectedRoute exact path='/transaction/:id' comp={TransactionForm} />
          <Route render={() => (<NotFound />)} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
