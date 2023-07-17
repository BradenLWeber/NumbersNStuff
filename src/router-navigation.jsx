import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootNavigation from 'screens/root-navigation';

const RouterNavigation = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootNavigation page='Home' />,
      errorElement: <RootNavigation showArchive={true} page='Error' />,
    },
    {
      path: '/posts',
      element: <RootNavigation showArchive={true} page='Posts' />,
    },
    {
      path: '/playgrounds',
      element: <RootNavigation showArchive={true} page='Playgrounds' />,
    },
    {
      path: '/about',
      element: <RootNavigation showArchive={true} page='About' />,
    },
    {
      path: '/post/:title',
      element: <RootNavigation showArchive={true} page='Post' />,
    },
    {
      path: '/playground/:title',
      element: <div></div>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterNavigation;