import { createBrowserRouter, redirect } from 'react-router-dom'
import { TheHomePage, TheBrowsePage, TheSignUpPage } from '../pages'

const protectedRouteLoader = async () => {
  const isUserPassword = await localStorage.userPassword
  if (!isUserPassword) {
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
      path: '/sign-up/password',
      element: <TheSignUpPage />,
      id: 'signUpPage'
    },
  ]
)

export default router
