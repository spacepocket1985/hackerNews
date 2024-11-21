import { Main } from '../pages/Main';
import { News } from '../pages/News';
import { NotFound } from '../pages/NotFound';
import { RoutePaths } from './routePaths';

export const publicRoutes = [
  {
    path: RoutePaths.Main,
    Page: Main,
  },
  {
    path: RoutePaths.News,
    Page: News,
  },

  {
    path: RoutePaths.PAGE404,
    Page: NotFound,
  },
];
