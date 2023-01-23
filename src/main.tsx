import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import App from './App'
import router from './router'
import { store } from './store'
import './index.css'
//
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App><RouterProvider router={router} /></App>
    </Provider>
  </React.StrictMode>
)
