import React, { Component } from 'react'
import Head from './Head'
import Bottom from './Bottom'
import {Layout,Col,Row,Icon} from 'antd'
import MidRestaurant from './MidRestaurant'
const { Header,Footer,Content } = Layout;

export class SingleRestaurant extends Component {
    render() {
        return (
            <div>
            <Layout>
              <Header>
                 <Head />
              </Header>
              <Content style={{marginTop:'20px'}}>
                 <div style={{color:'#93959f',fontSize:'12px',paddingLeft:'100px'}}>Home / Coimbatore</div>
                 <div style={{backgroundColor:'black',flex:'1'}}>
                    <div style={{padding:'50px 70px'}}>
                        <Row>
                            <Col span={6}>
                               <img height="150" width="240" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/en5tssfnk3ag3rzn65kd" alt="" />
                            </Col>
                            <Col span={10} style={{color:'#fff'}}>
                               <div style={{textOverflow:'ellipsis',fontSize:'32px',fontWeight:'300'}}>sddsd</div>
                               <div style={{paddingTop:'4px',fontSize:'15px',opacity:'0.7'}}>sddsd</div>
                               <div style={{paddingTop:'4px',fontSize:'15px',opacity:'0.7'}}>sddsd</div>
                               <div style={{paddingTop:'10px'}}>
                                   <Col span={5} style={{borderRight:'1px solid grey'}}>
                                       <div style={{fontWeight:'600',fontSize:'15px',display:'flex',alignItems:'center'}}>
                                           <Icon type="star" style={{color:'white'}} />&nbsp; 4.5
                                        </div>
                                       <div style={{opacity:'0.7',fontSize:'12px'}}>1000+ rating</div>
                                    </Col>
                                   <Col span={6} style={{borderRight:'1px solid grey',textAlign:'center'}}>
                                       <div style={{fontWeight:'600',fontSize:'15px'}}>29 mins</div>
                                       <div style={{opacity:'0.7',fontSize:'12px'}}>Delivery Time</div>
                                   </Col>
                                   <Col span={6} style={{textAlign:'center'}}>
                                       <div style={{fontWeight:'600',fontSize:'15px'}}>₹ 200</div>
                                       <div style={{opacity:'0.7',fontSize:'12px'}}>Cost for two</div>
                                   </Col>
                               </div>
                            </Col>
                            <Col span={6} style={{paddingTop:'25px'}}>
                              <div >
                               <div style={{transform:'translateZ(0)',border:'1px solid #bec0c8',transition:'transform .2s ease-in-out',position:'relative'}}>
                                   <div style={{backgroundColor:'black',color:'#fff',fontSize:'20px',display:'inline-block',position:'absolute',top:'-13px',left:'-6px',paddingRight:'8px'}}>OFFERS</div>
                                        <div style={{padding:'20px'}}>
                                            <div style={{display:'flex',alignItems:'center'}}>
                                               <div style={{color:'#fff',fontSize:'14px'}}>
                                                 <img src="/percentage.png"></img>60% off up to ₹120 on orders above ₹99  | Use coupon WELCOME60</div> 
                                            </div>
                                        </div>
                            </div>
                            </div>
                            </Col>
                        </Row>
                    </div>
                 </div>
                 {/* <div><input style={{borderColor:'#fff'}}></input></div> */}
                 <MidRestaurant />

              </Content>
              <Footer>
                  <Bottom />
              </Footer>
            </Layout>
            </div>
        )
    }
}

export default SingleRestaurant
