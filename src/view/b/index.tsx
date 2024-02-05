import React, {useEffect} from 'react';
import ReactDomServer from 'react-dom/server';
import {useLocation, useNavigate} from 'react-router-dom';

const B =()=>{

    const location = useLocation();
    const navigate = useNavigate();
    const renderHtml = ()=>{
        return ReactDomServer.renderToStaticMarkup(
            <div className="abcd" style={{fontSize:25,marginTop:10,fontWeight:"bold"}}>测试renderToStaticMarkup</div>
        )
    }
    return <div>
        <div dangerouslySetInnerHTML={{__html:renderHtml()}} />
        <div>
            传递的参数是 value = {location?.state?.value}
        </div>
    </div>
}
export default B