import React, {useEffect} from 'react';
import ReactDomServer from 'react-dom/server';
const B =()=>{


    const renderHtml = ()=>{
        return ReactDomServer.renderToStaticMarkup(
            <div className="abcd" style={{fontSize:25,marginTop:10,fontWeight:"bold"}}>测试renderToStaticMarkup</div>
        )
    }
    console.log('fff',renderHtml());
    return <div>
        <div dangerouslySetInnerHTML={{__html:renderHtml()}} />
    </div>
}
export default B