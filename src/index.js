import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Components/About/About';
import Body from './Components/Body/Body';
import Contact from './Components/Contact/Contact';
import App from './App';
import Restaurentcard from './Components/RestaurentCard/Restaurentcard';
import Shimmer from './Components/Body/Shimmer';
import Error from './Components/Error/Error';
import Login from './Components/SignupLogin/Login';
import Signup from './Components/SignupLogin/Signup';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import Profile from './Components/About/Profile';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Cart/Checkout';
import "./index.css";
const Instamart = lazy(() => import("./Components/Instamart/Instamart"))
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />,
        children: [{
          path: "profile",
          element: <Profile />
        }]
      },
      {
        path: '/',
        element: <Body />,
        errorElement: <Error />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/signin',
        element: <Login />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/restaurent/:resId',
        element: <Restaurentcard />
      },
      {
        path: "/instamart",
        element:
          <Suspense fallback={Shimmer}>
            <Instamart />
          </Suspense>,
      },
      {
        path: "/checkout",
        element: <Checkout />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>

  </React.StrictMode>
);

