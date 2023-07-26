import DivideBy3Playground from 'playgrounds/the-divide-by-3-playground';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from 'screens/about';
import Home from 'screens/home';
import Post from 'screens/post';
import Posts from 'screens/posts';
import RootNavigation from 'screens/root-navigation';

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
          path: 'playgrounds',
          element: <DivideBy3Playground />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'post/:title',
          element: <Post />,
        },
      ],
    },
    {
      path: '/playground/:title',
      element: <div />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterNavigation;
