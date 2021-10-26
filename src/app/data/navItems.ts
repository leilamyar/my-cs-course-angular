import { INavItems } from '../interfaces/nav-items';

export const NAVITEMS: INavItems[] = [
  {
    name: 'home',
    route: '/home',
  },
  {
    name: 'data structures',
    route: '/data-structures',
    subRoutes: [
      { name:'LinkedList', route: '' },
      { name:'ArrayList', route: '' },
    ]
  },
  {
    name: 'Sort Algo',
    route: '/sort-algo',
    subRoutes: [
      { name:'Bubble Sort', route: '' },
      { name:'Insertion Sort', route: '' },
    ]
  },
  {
    name: 'Search Algo',
    route: '/',
    subRoutes: [
      { name:'item 1', route: '' },
    ]
  },
];
