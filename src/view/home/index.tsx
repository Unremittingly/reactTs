import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import './style.less';


const Home = () => {
  const navigate = useNavigate();

  const onJump = ()=>{
    navigate('/a');
  }

  return <div className="main">
    <div className="nav">
    <div className="link-i" onClick={onJump}>编程跳转带参数</div>
    <div className="link-i"><Link to='/b' style={{color: 'red'}}>路由link跳转</Link></div>
    </div>
    当前是home
  </div>
};

export default Home