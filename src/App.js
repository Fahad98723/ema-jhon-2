import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NoFound from './components/NoFound/NoFound';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path = '/'>
              <Shop></Shop>
            </Route>
            <Route path = '/shop'>
              <Shop></Shop>
            </Route>
            <Route path = '/review'>
              <OrderReview></OrderReview>
            </Route>
            <Route path = '/inventory'>
              <Inventory></Inventory>
            </Route>
            <Route path = '*'>
              <NoFound></NoFound>
            </Route>
          </Switch>
      </BrowserRouter>      
    </div>
  );
}

export default App;
