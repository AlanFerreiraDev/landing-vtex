import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;