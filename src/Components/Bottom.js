import React, { Component } from 'react'

import {NavLink} from 'react-router-dom'
import{Row,Col} from 'antd'
export class Bottom extends Component {
    render() {
        return (
            <div className='mobview'>
                <div className='mobfooter' >
                 <div style={{ lineHeight:'1.2',flexDirection:'column',  alignItems: 'center', textTransform: 'uppercase',width: '25%', fontWeight: '600',height: 'inherit',justifyContent: 'center', color: '#93959f', textDecoration: 'none', overflow: 'hidden',position: 'relative'}}>
                 <Row>
                       <Col span={8}>
                     <div style={{ paddingLeft:'30px',color: '#e46d47', textAlign:'center'}}>
                         <img src="/img/swiggylogo.png" style={{ height:'30px',margin:'2px 4px'}}/>
                         <div style={{fontSize: '11px',display: 'flex',whiteSpace:'nowrap',textAlign:'center'}}>Near me</div>
                     </div>
                     </Col>
                 </Row>
                 </div>

                 <div style={{color: '#93959f', lineHeight:'1.2',flexDirection:'column',  alignItems: 'center', textTransform: 'uppercase',width: '25%', fontWeight: '600',height: 'inherit',justifyContent: 'center', color: '#93959f', textDecoration: 'none', overflow: 'hidden',position: 'relative'}}>
                 <Row>
                       <Col span={8}>
                     <div style={{ paddingLeft:'30px',color: '#93959f', textAlign:'center'}}>
                         <img src="/img/search1.png" style={{ height:'20px',margin:' 10px 0 2px 6px'}}/>
                         <div style={{fontSize: '11px',display: 'flex',whiteSpace:'nowrap',textAlign:'center'}}>Explore</div>
                     </div>
                     </Col>
                 </Row>
                 </div>

                 <div style={{color: '#93959f', lineHeight:'1.2',flexDirection:'column',  alignItems: 'center', textTransform: 'uppercase',width: '25%', fontWeight: '600',height: 'inherit',justifyContent: 'center', color: '#93959f', textDecoration: 'none', overflow: 'hidden',position: 'relative'}}>
                 <Row>
                 <NavLink to={"/MobCart"}>
                       <Col span={8}>
                     <div style={{ paddingLeft:'40px',color: '#93959f', textAlign:'center'}}>
                         <img src="/img/Bag.png" style={{ height:'20px',margin:' 10px 0 2px 4px'}}/>
                         <div style={{fontSize: '11px',display: 'flex',whiteSpace:'nowrap',textAlign:'center'}}>Cart</div>
                     </div>
                     </Col>
                     </NavLink>
                 </Row>
                 </div>

                 <div style={{color: '#93959f', lineHeight:'1.2',flexDirection:'column',  alignItems: 'center', textTransform: 'uppercase',width: '25%', fontWeight: '600',height: 'inherit',justifyContent: 'center', color: '#93959f', textDecoration: 'none', overflow: 'hidden',position: 'relative'}}>
                 <Row>
                       <Col span={8}>
                       
                     <div style={{ paddingLeft:'25px',color: '#93959f', textAlign:'center'}}>
                         
                     <img src="/img/user.png" style={{ height:'20px',margin:' 10px 0 2px 11px'}}/>
                         <div style={{fontSize: '11px',display: 'flex',whiteSpace:'nowrap',textAlign:'center'}}>Account</div>
                     </div>
                     
                     </Col>
                 </Row>
                 </div>

                </div>
            
            </div>
        );
    }
}

export default Bottom
