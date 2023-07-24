import React from 'react';
import B from "./b";
import A from "./a";
import Home from "./home";
const  routerArr = [
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
export default routerArr

