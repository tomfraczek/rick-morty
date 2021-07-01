import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Homepage from '../pages/homepage/homepage.component';

import { RouteUrl } from './route-url';

// import { AppContainer } from './app-routes.styles'

export const AppRoutes = () => (
    <>
      <Switch>
        <Route path={RouteUrl.home} exact component={Homepage} />
        {/* <Route path={RouteUrl.character} exact component={Character} /> */}
        <Redirect to={RouteUrl.home} />
      </Switch>
    </>
);
