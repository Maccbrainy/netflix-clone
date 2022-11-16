import { createBrowserRouter } from 'react-router-dom'
import { TheHomePage, TheBrowsePage } from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TheHomePage />,
    id: 'homePage'
  },
  {
    path: '/browse',
    element: <TheBrowsePage />,
    id: 'browsePage'
  },
  {
    path: '/kids',
    element: <TheBrowsePage />,
    id: 'kidPage'
  },
])

export default router
