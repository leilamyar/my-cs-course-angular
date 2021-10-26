export interface INavItem {
  name: string;
  route: string;
}

export interface INavItems {
  name: string;
  route: string;
  subRoutes?: INavItem[];
}
