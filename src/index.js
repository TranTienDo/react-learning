import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';




import Admin from './admin/Admin';
import App from './App';
import ProductList from './scenes/productList/ProductList';

import ProductDetail from './scenes/productDetail/ProductDetail';
import Home from './scenes/home/Home';
import Checkout from './scenes/checkout/Checkout';
import Confirmation from './scenes/checkout/Confirmation';
import CartMenu from './scenes/global/CartMenu';






const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
{
  path:'/',
  element: <App/>,
  children:[
    {
      index:true,
      element:<Home/>

    },
    {
    path:'product',
    element:<ProductList/>
    },
    {
      path:'product/page/:pageNum',
      element:<ProductList/>

    },
    {
      path:'product/:id',
      element:<ProductDetail/>
    },
    {
      path:'checkout',
      element:<Checkout/>

    },
    {
      path:'checkout/success',
      element:<Confirmation/>

    },
    {
      path:'cart',
      element:<CartMenu/>

    },
  
]
},
{
  path:'/admin',
  element:<Admin/>
}
]);

root.render(
  <RouterProvider router ={router}></RouterProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

