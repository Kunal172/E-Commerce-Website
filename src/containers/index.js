import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import { Home } from './home';
import { Fashion_Wear } from './fashion wear';
import { City_Local } from './city local';
import { Handicrafts } from './handicrafts';
import { City_Beauty } from './city beauty';

export function Index() {
  return (
    <Router>

      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>

        <Route path='/Home' exact>
          <Home/>
        </Route>

        <Route path='/fashion' exact>
          <Fashion_Wear/>
        </Route>

        <Route path='/local' exact>
          <City_Local/>
        </Route>

        <Route path='/beauty' exact>
          <City_Beauty/>
        </Route>

        <Route path='/handicraft' exact>
          <Handicrafts/>
        </Route>

        <Route path='/handicrafts' exact>
          <Handicrafts/>
        </Route>
        
        <Route  render={()=><h1 className='text-center align-middle bg-gradient '>404 Page Not Found</h1>}/>

      </Switch>
    </Router>
  );
}