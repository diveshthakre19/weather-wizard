import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';

import { createBrowserRouter, } from "react-router-dom"
import App from "./App"
import SearchWeather from './components/SearchWeather';
import NearbyWeather from './components/NearbyWeather';


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            path: "search",
            element: <SearchWeather />
        },
        {
            path: "/",
            element: <NearbyWeather />
        }
        ],

    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

