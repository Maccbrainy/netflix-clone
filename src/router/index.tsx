import { createBrowserRouter, redirect } from 'react-router-dom'
import { TheHomePage, TheBrowsePage, TheSignUpPage } from '../pages'
import { SignUpPassword, SignUpPlanForm } from '../components/signup-subpages';

const protectedRouteLoader = () => {
  const isAccessToken = localStorage.getItem('token');
  
  if (!isAccessToken) {
    console.log("No token found");
    return redirect("/");
  }
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <TheHomePage />,
      id: 'homePage',
    },
    {
      path: '/browse',
      element: <TheBrowsePage />,
      loader: protectedRouteLoader,
      id: 'browsePage',
      children: [
        {
          path:'tv_shows',
          element: <TheBrowsePage />
        },
        {
          path:'movies',
          element: <TheBrowsePage />
        }
      ]
    },
    {
      path: '/watch',
      element: <TheBrowsePage />,
      loader: protectedRouteLoader,
      id: 'watchPage'
    },
    {
      path: '/latest',
      element: <TheBrowsePage />,
      loader: protectedRouteLoader,
      id: 'latestPage'
    },
    {
      path: '/kids',
      element: <TheBrowsePage />,
      loader: protectedRouteLoader,
      id: 'kidPage'
    },
    {
      path: '/login',
      element: <TheHomePage />,
      id: 'loginPage'
    },
    {
      path: '/sign-up/',
      element: <TheSignUpPage />,
      id: 'signUpPage',
      children: [
        {
          path: 'password',
          element: <SignUpPassword />,
        },
        {
          path: 'planform',
          element: <SignUpPlanForm />,
          loader: protectedRouteLoader,
        },
      ]
    },
  ]
)

export default router
