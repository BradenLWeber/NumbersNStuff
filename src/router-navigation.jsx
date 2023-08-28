import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from 'screens/about';
import Home from 'screens/home';
import Playground from 'screens/playground';
import Playgrounds from 'screens/playgrounds';
import Post from 'screens/post';
import Posts from 'screens/posts';
import RootNavigation from 'screens/root-navigation';
import Unsubscribe from 'screens/unsubscribe';

const RouterNavigation = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootNavigation />,
      errorElement: <RootNavigation showArchive={true} page='Error' />,
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'posts',
          element: <Posts />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'post/:title',
          element: <Post />,
        },
        {
          path: 'playground/:title',
          element: <Playground />,
        },
        {
          path: 'playgrounds',
          element: <Playgrounds />,
        },
        {
          path: 'unsubscribe',
          element: <Unsubscribe />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterNavigation;
