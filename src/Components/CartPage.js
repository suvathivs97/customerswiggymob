import React, { Component } from 'react'
import {Col,Row,Card,Layout,Collapse,Icon,Radio,Button,Divider} from 'antd'
import Head from './Head'
import Bottom from './Bottom'
const { Header,Footer,Content } = Layout;
const { Panel } = Collapse;
const customPanelStyle = {
    background: "#f7f7f7",
    // background: '#fff',

    // boxShadow: '0 15px 40px -20px rgba(40,44,63,.15)',
    // zIndex: '1000',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    fontSize:'16px',
    fontWeight:'600',
    overflow: "hidden"
  };


export class CartPage extends Component {
    state = {
        openPanel: "1",
        value:''
      };
      changepanel=()=>{
          this.setState({openPanel:'3'})
      }
      onChange=()=>{

      }
    render() {
        return (
            <div >
                <Header>
                   <Head />
                </Header>
                <Content style={{marginTop:'60px'}}>
                <div style={{margin:'0px 50px'}}>
                    <Col span={16} style={{padding:'0px 30px'}}>
                        <Collapse  accordion
                                   bordered={false}
                                   destroyInactivePanel={true}
                                   activeKey={this.state.openPanel}
                                //    defaultActiveKey={["1"]}
                                   expandIcon={({ isActive }) => (
                                  <Icon type="caret-right" rotate={isActive ? 90 : 0} />
                                  )}
                         >
                            {/* <Panel header="Account" key="1" style={customPanelStyle}>
                            
                                       <div style={{color:'#282c3f',fontSize:'16px',fontWeight:'500',marginLeft:'3.5%'}}>Lavanya  |  9563284170</div>
                                   
                            </Panel> */}
                            <Panel  header={<div>Delivery Address<text style={{color:'#fc8019',float:'right',padding:'5px',fontSize:'14px'}}>CHANGE</text></div>} key="1"style={customPanelStyle}>
                                {/* <Radio.Group onChange={this.onChange} value={this.state.value} key={'1'}>
                                    <Radio  value={'1'}>
                                        <h3>Home<p style={{float:'right',marginLeft:'50px'}}><Icon type="delete"  style={{float:'right',paddingLeft:'30px',fontSize:'20px'}}/><Icon type="edit" style={{float:'right',fontSize:'20px'}}/></p></h3> 
                                        <p>Lavanya | 9865324157</p>
                                    
                                    <p>75,saravanampatti,Coimbatore,641035</p>
                                    
                                    </Radio>
                                </Radio.Group> */}
                                <div class="row">
                                <div class="col-6 col-sm-6 col-lg-6">
                                    <Card style={{margin:'10px',height:'230px'}}> 
                                        <Col span={2} style={{width:'20px',height:'180px'}}>
                                          <Icon type="home" />
                                        </Col>
                                        <Col span={25}>
                                            <div style={{fontSize:'17px',fontWeight:'500',color:'#282c3f',display:'flex',alignItems:'center'}}>
                                            Home
                                            </div>
                                            <div style={{color:'#93959f',fontSize:'13px'}}>12, sara complex, Saravanampatti, Coimbatore, Tamil Nadu 641035, India</div>
                                            <div style={{color:'#282c3f',marginTop:'30px',fontSize:'14px'}}>29 MINS</div>
                                            <Button style={{backgroundColor:'#60b246',marginTop:'5px',border:0,fontSize:'16px',fontWeight:'600',textAlign:'center',color:'#fff'}}>Deliver Here</Button>
                                        </Col>
                                        
                                    </Card>
                                </div>
                                <div class="col-6 col-sm-6 col-lg-6">
                                    <Card style={{margin:'10px'}}> 
                                      <Col span={2} style={{width:'20px',height:'180px'}}>
                                          <Icon type="home" />
                                        </Col>
                                        <Col span={25}>
                                            <div style={{fontSize:'17px',fontWeight:'500',color:'#282c3f',display:'flex',alignItems:'center'}}>
                                            Other
                                            </div>
                                            <div style={{color:'#93959f',fontSize:'13px'}}>12, sara complex, Saravanampatti, Coimbatore, Tamil Nadu 641035, India</div>
                                            <div style={{color:'#282c3f',marginTop:'30px',fontSize:'14px'}}>29 MINS</div>
                                            <Button style={{backgroundColor:'#60b246',marginTop:'5px',border:0,fontSize:'16px',fontWeight:'600',textAlign:'center',color:'#fff'}}>Deliver Here</Button>
                                        </Col>
                                    </Card>
                                </div>
                                <div class="col-6 col-sm-6 col-lg-6">
                                  <Card style={{margin:'10px'}}> 
                                      <Col span={2} style={{width:'20px',height:'180px'}}>
                                          <Icon type="home" />
                                        </Col>
                                        <Col span={25}>
                                            <div style={{fontSize:'17px',fontWeight:'500',color:'#282c3f',display:'flex',alignItems:'center'}}>
                                             Add New Address
                                            </div>
                                            <div style={{color:'#93959f',fontSize:'13px'}}>12, sara complex, Saravanampatti, Coimbatore, Tamil Nadu 641035, India</div>
                                            <div style={{color:'#282c3f',marginTop:'30px',fontSize:'14px'}}>29 MINS</div>
                                            <Button style={{borderColor:'#60b246',marginTop:'5px',fontSize:'16px',fontWeight:'600',textAlign:'center',color:'black'}}>Deliver Here</Button>
                                        </Col>
                                    </Card>
                                </div>
                                </div>
                                {/* <Button style={{ fontSize: 12, color: "red", fontWeight: 600 }} onClick={this.addaddress}>
                                    <img src="/img/plus.png" />
                                      ADD NEW ADDRESS
                                </Button> */}
                            </Panel>
                            <Panel  header="Payment" key="2"style={customPanelStyle}>
                            <p>sdfsdf</p>
                            </Panel>
                        </Collapse>
                    </Col>
                    <Col span={8} style={{padding:'0px 30px'}}>
                        <Card style={{backgrounColor:'#f7f7f7'}}>
                            <Row>
                                <Col span={6}>
                                  <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/sgyqekgngxqekx1emwgz" height="50" width="50" />
                                </Col>
                                <Col span={17}>
                                    <Row span={2} style={{fontSize:'17px',color:'#282c3f'}}>
                                        Subway
                                    </Row>
                                    <Row span={2} style={{fontSize:'13px',color:'#686b78'}}>
                                        Saravanampatti
                                    </Row>
                                </Col>
                            </Row>
                            <div  style={{paddingTop:'20px'}}>
                                <Col span={3} style={{width:'30px',height:'40px'}}>
                                  <img src="/img/vegIcon.png" style={{height:'10px',width:'10px'}} />
                                </Col>
                                <Col span={14} style={{maxwidth:'130px',height:'40px',display:'flex',fontWeight:'400',fontSize:'14px'}}>
                                Aloo Patty Sub ( 15 cm, 6 Inch )
                                </Col>
                                <Col span={6} >
                                    <div style={{borderStyle:'solid',borderWidth:'1px',borderColor:'#60b246',display:'flex',alignItems:'center',maxWidth:'50px'}}>&nbsp;-&nbsp;&nbsp;1&nbsp;&nbsp;+&nbsp;</div>
                                </Col>
                                  {/* <div style={{borderStyle:'dashed',borderWidth:'1px',height:'20px'}}> */}
                                 
                                
                          </div>
                                  {/* <div class="row">
                                      fghfghfghfg
                                  </div> */}
                          

                        </Card>
                    </Col>
                </div>
                </Content>
            </div>

            // <div>
            //      <Header>
            //         <Head />
            //      </Header>
            //     <div style={{minHeight:'100%',background:'#e9ecee',flexGrow:'1'}}>
            //         <div style={{maxWidth:'1200px',minWidth:'1200px',position:'relative',display:'flex',margin:'0 auto',marginTop:'31px'}}>
            //             <div style={{flex:'1',marginRight:'30px',position:'relative'}}>
                       
            //             </div>
            //             <div style={{width:'366px',position:'sticky',top:'111px'}}>
            //                 dfsdf
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default CartPage
