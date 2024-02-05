import React, {useEffect} from 'react';
import Nav from "./home";

import {useNavigate} from 'react-router-dom';
import {Button} from "antd";

export const BackHome=()=>{
    const navigate  = useNavigate();
    return <Button type="primary"  onClick={()=>navigate('/')}>首页</Button>
}

const Test = ()=>{
    const a = {a:1};
    return <div >
        <Nav/>
    </div>
}

export default Test;