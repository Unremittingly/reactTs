import React, {useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import './style.less';

const Home = (props: any) => {
  console.log('fdsaf', props);
  let location = useLocation()
  useEffect(() => {

    console.log('a', location);
  }, [location]);

  return <div className="main">
      <ul>
        <div><Link to='/a' style={{color: 'red'}}>A</Link></div>
        <div><Link to='/b' style={{color: 'red'}}>B</Link></div>
      </ul>
    <div>

    </div>
  </div>
};

export default Home