import React, { Component } from 'react'
import {Icon,Row,Col} from'antd'
import {NavLink} from 'react-router-dom'

export class Search extends Component {
    render() {
        return (
            <div>
                <div className="mobview">
                    <div style={{height:'100%',boxShadow: '0 4px 16px 8px #fff',position: 'fixed', backgroundColor: '#fff'}}>
                        <div style={{margin: '16px',zIdex: 2, width: '100%', border: '1px solid rgba(40,44,63,.3)',  borderRadius: '3px'}}>
                                 <div style={{alignItems: 'center', height: '48px', width:'100%',display: 'flex',}}>
                                  <div style={{paddingLeft: '16px',}}>
                                      <input type="text" placeholder="Search for food" style={{ paddingRight:'60px',lineHeight: '20px',width: '100%',  height: '100%',fontSize:'12px',border:'none',outline:'none'}}/>
                                  </div>
                                  <img src="/img/search1.png" style={{  height:'20px'}}/>
                                 </div>
                            </div>
                    </div>
             <div className='mobfooter' >
              <div style={{ lineHeight:'1.2',flexDirection:'column',  alignItems: 'center', textTransform: 'uppercase',width: '25%', fontWeight: '600',height: 'inherit',justifyContent: 'center', color: '#93959f', textDecoration: 'none', overflow: 'hidden',position: 'relative'}}>
              <Row>
                    <Col span={8}>
                  <div style={{ paddingLeft:'30px',color: '#93959f', textAlign:'center'}}>
                      <img src="/img/swiggylogo.png" style={{ height:'30px',margin:'2px 4px'}}/>
                      <div style={{fontSize: '11px',display: 'flex',whiteSpace:'nowrap',textAlign:'center'}}>Near me</div>
                  </div>
                  </Col>
              </Row>
              </div>

              <div style={{color: '#93959f', lineHeight:'1.2',flexDirection:'column',  alignItems: 'center', textTransform: 'uppercase',width: '25%', fontWeight: '600',height: 'inherit',justifyContent: 'center', color: '#93959f', textDecoration: 'none', overflow: 'hidden',position: 'relative'}}>
              <Row>
              <NavLink to={"/Search"}>
                    <Col span={8}>
                  <div style={{ paddingLeft:'30px',color: '#e46d47', textAlign:'center'}}>
                      <img src="/img/search1.png" style={{ height:'20px',margin:' 10px 0 2px 6px'}}/>
                      <div style={{fontSize: '11px',display: 'flex',whiteSpace:'nowrap',textAlign:'center'}}>Explore</div>
                  </div>
                  </Col>
                  </NavLink>
              </Row> 
              </div>

              <div style={{color: '#93959f', lineHeight:'1.2',flexDirection:'column',  alignItems: 'center', textTransform: 'uppercase',width: '25%', fontWeight: '600',height: 'inherit',justifyContent: 'center', color: '#93959f', textDecoration: 'none', overflow: 'hidden',position: 'relative'}}>
              <Row>
              <NavLink to={"/CartPage"}>
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
              <NavLink to={"/Accounts"}>
                    <Col span={8}>
                  <div style={{ paddingLeft:'25px',color: '#93959f', textAlign:'center'}}>
                      
                  <img src="/img/user.png" style={{ height:'20px',margin:' 10px 0 2px 11px'}}/>
                      <div style={{fontSize: '11px',display: 'flex',whiteSpace:'nowrap',textAlign:'center'}}>Account</div>
                  </div>
                  
                  </Col>
                  </NavLink>
              </Row>
              </div>

             </div>
         
         </div>
    </div>
        )
    }
}

export default Search
