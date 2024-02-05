import React, {useEffect, useState} from 'react';
import {Button, Form, Input} from "antd";
import {useNavigate} from 'react-router-dom';
import './style.less';



const A = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate('/b',{
      state:{
        value: value
      }
    })
  }

  return <div className="form-i">
    <Form>
      <Form.Item name="name">
        <Input onChange={(e)=>{
          setValue(e.target.value);
        }}/>
      </Form.Item>
    </Form>
    <Button onClick={onSubmit} >提交</Button>
  </div>
}
export default A