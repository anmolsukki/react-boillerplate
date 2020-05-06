import React from 'react';
import DefaultLayout from '../Containers';

const Home = React.lazy(() => import('../Views/Home'));

const Routes = [
  { path: '/', name: 'Main', component: DefaultLayout, exact: true },
  { path: '/home', name: 'Home', component: Home, exact: true, isPrivate: false },
];

export default Routes;
