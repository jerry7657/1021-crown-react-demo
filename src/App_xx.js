import { Switch, Route } from 'react-router-dom';
import Homepage_xx from './pages/Homepage_xx';
import ShopTwo_xx from './pages/ShopTwoPage_xx';
import ContactPage_xx from './pages/ContactPage_xx';
import SigninPage_xx from './pages/SigninPage_xx';
import Header_xx  from './components/Header_xx';

import './App_xx.scss';

function App_xx() {
  return (
    <div>
      <Header_xx />
      <Switch>
        <Route exact path='/' component={Homepage_xx} />
        <Route exact path='/shop_xx' component={ShopTwo_xx} />
        <Route exact path='/contact_xx' component={ContactPage_xx} />
        <Route exact path='/signin_xx' component={SigninPage_xx} />
      </Switch>
    </div>
  );
}

export default App_xx;
