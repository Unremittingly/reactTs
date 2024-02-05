import React from 'react';
import B from "./b";
import A from "./a";
import Home from "./home";
import {useRoutes} from 'react-router-dom';
export const  routerArr = [
    {
        path: "/",
        element: <Home/>,
        children: [],
    },
    {
        path: "/a",
        element: <A/>,
        children: [],
    },
    {
        path: "/b",
        element: <B/>,
        children: [],
    }
];
export const Router = ()=> useRoutes(routerArr);

