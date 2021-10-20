import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shope from './components/Shope/Shope';
import { BrowserRouter ,Switch, Route} from 'react-router-dom';

import ManageInventory from './components/MangeInventory/ManageInventory';
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';


function App() {
  return (
    <div>
  <BrowserRouter>
  <Header></Header>
  <Switch>
<Route path='/shope'>
  <Shope></Shope>
</Route>
<Route path='/orders'>
  <OrderReview></OrderReview>
</Route>
<Route path='/inventory'>
  <ManageInventory></ManageInventory>
</Route>
<Route exact path ='/'>
  <Shope></Shope>
</Route>
<Route path="/placeorder">
  <PlaceOrder></PlaceOrder>
</Route>
<Route path='*'>
  <NotFound></NotFound>
</Route>
  </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
