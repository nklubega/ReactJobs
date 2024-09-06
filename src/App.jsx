import React from 'react'
import { Route, 
         createBrowserRouter, 
         createRoutesFromElements, 
         RouterProvider, 
        } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAll from './ViewAll';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage />} />)
);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App