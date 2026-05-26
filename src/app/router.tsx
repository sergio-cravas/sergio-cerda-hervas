import { createBrowserRouter, Navigate } from 'react-router-dom';

import AppLayout from './_layout';
import { Home } from './(public)/home';
import { Blog } from './(public)/blog';
import { BlogPost } from './(public)/blog/blog.$slug';
import { Playground } from './(public)/playground';
import { HorseGame } from './(public)/playground/playground.horse';
import { ProjectDetail } from './(public)/projects/projects.$slug';

export const Routes = {
  HOME: '/',
  BLOG: '/blog',
  BLOG_POST: '/blog/:slug',
  PLAYGROUND: '/playground',
  PLAYGROUND_HORSE: '/playground/horse',
  PROJECT_DETAIL: '/projects/:slug',
} as const;

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: Routes.BLOG, element: <Blog /> },
      { path: Routes.BLOG_POST, element: <BlogPost /> },
      { path: Routes.PLAYGROUND, element: <Playground /> },
      { path: Routes.PLAYGROUND_HORSE, element: <HorseGame /> },
      { path: Routes.PROJECT_DETAIL, element: <ProjectDetail /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);
