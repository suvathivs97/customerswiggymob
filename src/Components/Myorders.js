import React, { Component } from 'react'
import {Col,Row} from 'antd'
export class Myorders extends Component {
    render() {
        return (
            <div>
                <div style={{fontSize:'24px',fontWeight:'600'}}>Past Orders</div>
                <div style={{border:'1px solid #d4d5d9',marginTop:'20px',height:'250px'}}>
                    <div style={{padding:'25px'}}>
                        <Row>
                          <Col span={4}>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/krfcw73lewsw3x6eapce"
                                height="100" width="100"
                            ></img>
                          </Col>
                          <Col span={12}>
                              <div style={{fontSize:'17px',fontWeight:'500',color:'#3d4152'}}>OMG - Oh My Grill</div>
                              <div style={{fontSize:'13px',color:'#686b78'}}>Hopes</div>
                              <div style={{fontSize:'13px',color:'#686b78',marginTop:'2px'}}>ORDER #303098594 | Sun, Jan 13, 2019, 01:05 PM</div>
                              <div style={{marginTop:'14px',fontSize:'14px',fontWeight:'600',color:'#fc8019'}}>VIEW DETAILS</div>
                          </Col>
                          <Col span={8}>
                                <div style={{fontSize:'13px',color:'#686b78'}}>Delivered on Sun, Jan 13, 2019, 01:05 PM</div>
                          </Col>
                        </Row>
                        <hr style={{border:'0.5px dashed grey' }}></hr>
                        <div style={{marginTop:'10px'}}>
                          <div style={{float:'left'}}>
                            <div style={{color:'#282c3f',fontSize:'15px'}}>
                             American BBQ Grilled Chicken x 1
                            </div>
                            <Row style={{marginTop:'15px'}}>
                                <Col span={12}>
                                    <button style={{backgroundColor:'rgb(228, 109, 71)',color:'white',border:'none',width:'100px',padding:'5px'}}>REORDER</button>
                                </Col>
                                <Col span={12}>
                                 <button style={{color:'rgb(228, 109, 71)',backgroundColor:'white',borderColor:'rgb(228, 109, 71)',width:'100px',padding:'5px'}}>HELP</button>
                                </Col>
                            </Row>
                          </div>
                          <div style={{float:'right',fontSize:'14px',color:'#686b78'}}>
                          Total Paid: ₹ 110
                          </div>
                        </div>
                    </div>
                </div>

                <div style={{border:'1px solid #d4d5d9',marginTop:'20px',height:'250px'}}>
                    <div style={{padding:'25px'}}>
                        <Row>
                          <Col span={4}>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/krfcw73lewsw3x6eapce"
                                height="100" width="100"
                            ></img>
                          </Col>
                          <Col span={12}>
                              <div style={{fontSize:'17px',fontWeight:'500',color:'#3d4152'}}>OMG - Oh My Grill</div>
                              <div style={{fontSize:'13px',color:'#686b78'}}>Hopes</div>
                              <div style={{fontSize:'13px',color:'#686b78',marginTop:'2px'}}>ORDER #303098594 | Sun, Jan 13, 2019, 01:05 PM</div>
                              <div style={{marginTop:'14px',fontSize:'14px',fontWeight:'600',color:'#fc8019'}}>VIEW DETAILS</div>
                          </Col>
                          <Col span={8}>
                                <div style={{fontSize:'13px',color:'#686b78'}}>Delivered on Sun, Jan 13, 2019, 01:05 PM</div>
                          </Col>
                        </Row>
                        <hr style={{border:'0.5px dashed grey' }}></hr>
                        <div style={{marginTop:'10px'}}>
                          <div style={{float:'left'}}>
                            <div style={{color:'#282c3f',fontSize:'15px'}}>
                             American BBQ Grilled Chicken x 1
                            </div>
                            <Row style={{marginTop:'15px'}}>
                                <Col span={12}>
                                    <button style={{backgroundColor:'rgb(228, 109, 71)',color:'white',border:'none',width:'100px',padding:'5px'}}>REORDER</button>
                                </Col>
                                <Col span={12}>
                                 <button style={{color:'rgb(228, 109, 71)',backgroundColor:'white',borderColor:'rgb(228, 109, 71)',width:'100px',padding:'5px'}}>HELP</button>
                                </Col>
                            </Row>
                          </div>
                          <div style={{float:'right',fontSize:'14px',color:'#686b78'}}>
                          Total Paid: ₹ 110
                          </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div style={{border:'1px solid #d4d5d9',marginTop:'20px',height:'50px',display:'flex',justifyContent:'center',alignItems:'center',color:'#3d4152',fontWeight:'600'}}>
                    SEE MORE ORDERS
                </div>
            </div>
        )
    }
}

export default Myorders
