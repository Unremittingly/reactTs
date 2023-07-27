
import React, {useEffect, useState} from 'react';
import {Button, Form, Input} from "antd";
import './style.less';

const FormCompo =(props:any)=>{
    const {formArr,setFormArr} = props;
    let [form] = Form.useForm();
    useEffect(()=>{
        setFormArr([...formArr, {id:'a',form}]);
        // arra.push(form);
        setTimeout(()=>{
            form.setFieldsValue({name:'222'})
        },3000)

    },[])

    return <Form form={form}>
        <Form.Item name="name">
            <Input></Input>
        </Form.Item>
    </Form>
}

const arra:any = [];
const A =()=>{
    const [formArr, setFormArr] = useState([]);
    const onSubmit=()=>{
        const arr = formArr.map((i:any)=>i.getFieldsValue(true));
        console.log('arr',arr);
    }
    console.log('formArr',formArr,arra);
    return <div className="form-i">
        {
            [1,2,3].map((item,index)=>{
                return <FormCompo key={index} formArr={formArr} arr={arra} setFormArr={setFormArr}/>
            })
        }
        <Button onClick={onSubmit}>提交</Button>
    </div>
}
export default A