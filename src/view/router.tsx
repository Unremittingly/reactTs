import React from 'react';
import B from "./b";
import A from "./a";
const  routerArr = [
    {
        name :'A',
        com: '/a',
        ccc: <B/>
    },
    {
        name: 'B',
        com: '/b',
        ccc: <A/>
    }
];
export default routerArr

