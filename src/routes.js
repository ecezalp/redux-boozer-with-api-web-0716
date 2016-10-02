import React from 'react';
import {Route} from 'react-router';

import App from './components/app';
import CocktailsIndex from './components/cocktails_index';
import CocktailsShow from './components/cocktails_show';
import CocktailsNew from './components/cocktails_new';

export default (
  <Route path="/" component={App} >
    <Route path="/cocktails" component={ CocktailsIndex } >
      <Route path='/cocktails/new' component={CocktailsNew} />
      <Route path='/cocktails/:id' component={CocktailsShow} />
    </Route>
  </Route>
)
