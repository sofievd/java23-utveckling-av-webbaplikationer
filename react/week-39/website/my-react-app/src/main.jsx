import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ReviewForm from './view/ReviewForm/index.jsx';
import ReviewEdit from './view/ReviewEdit/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "tyck-till",
    element: <ReviewForm />,
  },
  {
    path: "tyck-till/:reviewId",
    element: <ReviewEdit />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
