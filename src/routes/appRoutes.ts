import { Main } from '../pages/Main';
import { NewsPage } from '../pages/NewsPage';
import { NotFound } from '../pages/NotFound';
import { RoutePaths } from './routePaths';

export const publicRoutes = [
  {
    path: RoutePaths.Main,
    Page: Main,
  },
  {
    path: RoutePaths.News,
    Page: NewsPage,
  },

  {
    path: RoutePaths.PAGE404,
    Page: NotFound,
  },
];
