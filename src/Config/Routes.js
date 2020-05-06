import React from 'react';
import DefaultLayout from '../Containers';

const Home = React.lazy(() => import('../Views/Home'));
const About = React.lazy(() => import('../Views/About'));
const Portfolio = React.lazy(() => import('../Views/Portfolio'));

const Routes = [
  { path: '/', name: 'Main', component: DefaultLayout, exact: true },
  { path: '/home', name: 'Home', component: Home, exact: true, isPrivate: false },
  { path: '/about', name: 'About', component: About, exact: true, isPrivate: false },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio, exact: true, isPrivate: false },
];

export default Routes;
