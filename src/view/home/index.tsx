import React, {useEffect, useRef, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import './style.less';
const itemsDefault = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
    forceRender: true,
  },
];
const Home = (props: any) => {
  const [items, setItems] = useState<any>(itemsDefault);
  let location = useLocation();
  
  const ref:any = useRef();
  useEffect(() => {
    const newItem = [...items];
    newItem.push({key:3,label:'ddd',children:<div onClick={onAdd}>abc</div>, forceRender: true,});
    setItems(newItem)
  }, [location]);
  // console.log('itemsdddd 实时',items);
  ref.current = items;

  const onAdd = ()=>{
    // debugger
    console.log('items+++++++++',items);
    // debugger
    setItems([...ref.current,{key:6,label:'ddd',children:<div onClick={onAdd} >def</div>}])
  }

  return <div className="main">
      <ul>
        <div><Link to='/a' style={{color: 'red'}}>A</Link></div>
        <div><Link to='/b' style={{color: 'red'}}>B</Link></div>
      </ul>
    {
      items.map((item:any,index:number)=>{
          return  <div key={index}>
            {
              item.children
            }
          </div>
        })
    }
  </div>
};

export default Home