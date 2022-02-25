
import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import routerArr from '../router';

const Nav =(props: any)=>{
    console.log('fdsaf',props);
    const [con, setCon] =useState(<div/>)
    let location = useLocation()
    useEffect(()=>{
        const comp = routerArr.find((a)=>a.com === location.pathname) || {ccc:<div>und not </div>}

        setCon(comp.ccc);
        console.log('a',location);
    },[location]);

    return <>
    <div>
        <ul>
            <div ><Link to='/a' style={{color:'red'}}>A</Link></div>
            <div ><Link to='/b' style={{color:'red'}}>B</Link></div>
        </ul>
    </div>
        <div>
            {con}
        </div>
    </>
};

export default Nav