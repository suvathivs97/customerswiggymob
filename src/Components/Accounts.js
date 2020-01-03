import React, { Component } from 'react'
import {Col,Row,Card,Button,Icon} from 'antd'

export class Accounts extends Component {
    render() {
        return (
            <div>
              <div style={{fontSize:'24px',fontWeight:'600'}}>Manage Addresses</div>
              <div class="row">
                                <div class="col-6 col-sm-6 col-lg-6">
                                    <Card style={{margin:'10px'}}> 
                                        <Col span={2} style={{width:'20px',height:'70px'}}>
                                          <Icon type="home" />
                                        </Col>
                                        <Col span={25}>
                                            <div style={{fontSize:'17px',fontWeight:'500',color:'#282c3f',display:'flex',alignItems:'center'}}>
                                            Home
                                            </div>
                                            <div style={{color:'#535665',fontSize:'13px'}}>12, sara complex, Saravanampatti, Coimbatore, Tamil Nadu 641035, India</div>
                                            <div style={{marginTop:'15px'}}>
                                                <text style={{color:'#e46d47',marginLeft:'20px',width:'100px',fontSize:'14px',fontWeight:600}}>Edit</text>
                                                <text style={{color:'#e46d47',marginLeft:'20px',width:'100px',fontSize:'14px',fontWeight:600}}>Delete</text>
                                            </div>
                                        </Col>

                                        
                                    </Card>
                                </div>
                                <div class="col-6 col-sm-6 col-lg-6">
                                    <Card style={{margin:'10px'}}> 
                                      <Col span={2} style={{width:'20px',height:'70px'}}>
                                          <Icon type="home" />
                                        </Col>
                                        <Col span={25}>
                                            <div style={{fontSize:'17px',fontWeight:'500',color:'#282c3f',display:'flex',alignItems:'center'}}>
                                            Other
                                            </div>
                                            <div style={{color:'#535665',fontSize:'13px'}}>12, sara complex, Saravanampatti, Coimbatore, Tamil Nadu 641035, India</div>
                                            <div style={{marginTop:'15px'}}>
                                                <text style={{color:'#e46d47',marginLeft:'20px',width:'100px',fontSize:'14px',fontWeight:600}}>Edit</text>
                                                <text style={{color:'#e46d47',marginLeft:'20px',width:'100px',fontSize:'14px',fontWeight:600}}>Delete</text>
                                            </div>
                                        </Col>
                                    </Card>
                                </div>
                                <div class="col-6 col-sm-6 col-lg-6">
                                  <Card style={{margin:'10px'}}> 
                                      <Col span={2} style={{width:'20px',height:'70px'}}>
                                          <Icon type="home" />
                                        </Col>
                                        <Col span={25}>
                                            <div style={{fontSize:'17px',fontWeight:'500',color:'#282c3f',display:'flex',alignItems:'center'}}>
                                             Add New Address
                                            </div>
                                            <div style={{color:'#535665',fontSize:'13px'}}>12, sara complex, Saravanampatti, Coimbatore, Tamil Nadu 641035, India</div>
                                            <div style={{marginTop:'15px'}}>
                                                <text style={{color:'#e46d47',marginLeft:'20px',width:'100px',fontSize:'14px',fontWeight:600}}>Edit</text>
                                                <text style={{color:'#e46d47',marginLeft:'20px',width:'100px',fontSize:'14px',fontWeight:600}}>Delete</text>
                                            </div>
                                        </Col>
                                    </Card>
                                </div>
                                </div>
            </div>
        )
    }
}

export default Accounts
