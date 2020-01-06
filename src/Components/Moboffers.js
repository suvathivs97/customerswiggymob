import React, { Component } from 'react'
import {Tabs,Row,Col,Layout }from 'antd';

const { Header } = Layout;


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
export class Moboffers extends Component {
  
    back =()=>{
        window.location.href="/"
    }
    render() {
        return (
          <div>
            <header className="heading">
            <div style={{padding:'10px',height:'30px',width:'100%',zIndex:'6px',background: '#fff'}}>
                 <img src="/img/left arrow.png" onClick={this.back} style={{height:"25px",float:'left'}}/>
                 <div style={{fontWeight:"bold",paddingLeft:'40px'}}>OFFERS </div>
             </div>
             </header>
             {/* <div style={{display: 'flex',flexDirection: 'row',color:'black', position: 'fixed',left: 0, right: 0,zIndex: 1,fontSize:'8x', backgroundColor: '#fff', top: '52px',}}>  */}
             <Tabs  defaultActiveKey="1" onChange={callback} style={{width:'100%',borderBottomWidth:"none"}}>
              <TabPane tab=" RESTAURANT " key="1" style={{}}>
              <div style={{fontWeight:"bold",paddingLeft:'20px'}}>ALL OFFERS(50) </div>
              <div>
                   <Row>
                       <div style={{paddingLeft:'20px',paddingTop:'20px'}}>
                          <Col span={6}>
                             <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                  <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                    <img src="/img/food3.jpg" style={{width:'100%',height:'70px'}}/>
                        
                                   </div>
                               </div>
                            </Col>
                            <Col span={16}>
                               <div style={{paddingLeft:'20px',  fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                    Kannama Thattu Kadai
                                </div>
                                <div style={{paddingLeft:'20px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                    South Indian,Chinese
                                 </div>
                                 <div style={{display:'flex',flexWrap:'nowrap'}}>
                                    <img src="/img/percentage.png" style={{paddingLeft:'20px'}}/>
                                      <div style={{fontWeight: 500,paddingLeft: '4px',color: '#7e808c', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',fontSize: '12px'}}> 
                                         20% off on all orders
                                       </div>
                                  </div>
                                   <div style={{paddingLeft:'20px'}}>
                                               <hr/>
                                   </div>
                                     <div style={{ paddingLeft:'20px',color: '#7e808c', fontSize:'12px', display: 'flex',width: '100%'}}>  
                                        <img src='img/star.png'style={{height:'9px',marginTop:'2px'}}/>
                                           <div style={{paddingLeft:'4px',fontSize:'10px'}}>4.0</div>
                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                      src="/img/dot.png"/>
                                                      <div style={{paddingLeft:'2px',fontSize:'11px'}}>33MINS</div>
                                                         <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                            src="/img/dot.png"/>
                                                                 <div style={{paddingLeft:'2px',fontSize:'11px',whiteSpace: 'nowrap',textTransform:'uppercase'}}>₹150 For Two</div>
                                                      </div> 
                           </Col>
                         </div>
                         </Row> 

                         <Row>
                                                    <div style={{paddingLeft:'20px',paddingTop:'20px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food9.jpg" style={{width:'100%',height:'70px'}}/>
                        
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={16}>
                                                        <div style={{paddingLeft:'20px',
                                                        fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                                        Hang out
                                                        </div>
                                                        <div style={{paddingLeft:'20px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                                            North Indian,South Indian
                                                        </div>
                                                        <div style={{display:'flex',flexWrap:'nowrap'}}>
                                                        <img src="/img/percentage.png" style={{paddingLeft:'20px'}}/>
                                                        <div style={{fontWeight: 500,paddingLeft: '4px',color: '#7e808c', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',fontSize: '12px'}}> 
                                                        60% off | Use Coupon Welcome60
                                                        </div>
                                                        </div>
                                                        <div style={{paddingLeft:'20px'}}>
                                                        <hr/>
                                                        </div>
                                                           <div style={{ paddingLeft:'20px',color: '#7e808c', fontSize:'12px', display: 'flex',width: '100%'}}>  
                                                            <img src='img/star.png'style={{height:'9px',marginTop:'2px'}}/>
                                                            <div style={{paddingLeft:'4px',fontSize:'10px'}}>4.1</div>
                                                            
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>35MINS</div>
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                
                                                                <div style={{paddingLeft:'2px',fontSize:'11px',whiteSpace: 'nowrap',textTransform:'uppercase'}}>₹200 For Two</div>
                                                                
                                                            </div> 
                                                        
                                                        
                                                    </Col>
                                                    </div>
                                                </Row> 
                                                <Row>
                                                    <div style={{paddingLeft:'20px',paddingTop:'20px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food10.jpg" style={{width:'100%',height:'70px'}}/>
                        
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={16}>
                                                        <div style={{paddingLeft:'20px',
                                                        fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                                        Hotel Chola
                                                        </div>
                                                        <div style={{paddingLeft:'20px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                                            North Indian,South Indian
                                                        </div>
                                                        <div style={{display:'flex',flexWrap:'nowrap'}}>
                                                        <img src="/img/percentage.png" style={{paddingLeft:'20px'}}/>
                                                        <div style={{fontWeight: 500,paddingLeft: '4px',color: '#7e808c', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',fontSize: '12px'}}> 
                                                        60% off | Use Coupon Welcome60
                                                        </div>
                                                        </div>
                                                        <div style={{paddingLeft:'20px'}}>
                                                        <hr/>
                                                        </div>
                                                           <div style={{ paddingLeft:'20px',color: '#7e808c', fontSize:'12px', display: 'flex',width: '100%'}}>  
                                                            <img src='img/star.png'style={{height:'9px',marginTop:'2px'}}/>
                                                            <div style={{paddingLeft:'4px',fontSize:'10px'}}>4.1</div>
                                                            
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>35MINS</div>
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                
                                                                <div style={{paddingLeft:'2px',fontSize:'11px',whiteSpace: 'nowrap',textTransform:'uppercase'}}>₹200 For Two</div>
                                                                
                                                            </div> 
                                                        
                                                        
                                                    </Col>
                                                    </div>
                                                </Row> 
              </div>
              </TabPane>
              <TabPane tab="OFFER COUPENS" key="2" style={{}}>
                <div style={{fontSize:'12px',paddingLeft:'10px'}}>
                AVALIABLE COUPENS
                </div>
              </TabPane>
             </Tabs>
            
            

             {/* 
               
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal"
                    style={{,fontSize: '.86rem'}}>
                     <Menu.Item key="offers" style={{color:'black',transform:'uppercase',fontSize:'12px',borderBottomWidth:'0',padding: '0',}}>
                       RESTAURANT OFFERS
                      </Menu.Item>
                     </Menu>
                     </div>

                     <div style={{fontWeight: 600, color: '#3d4152',width: '50%', textAlign: 'center', color: '#7e808c', padding: ' 0',position: 'relative',overflow: 'hidden'}}>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal"
                    style={{borderBottomWidth:'0',fontSize: '.86rem'}}>
                     <Menu.Item key="offers" style={{color:'black',transform:'uppercase',fontSize:'12px',borderBottomWidth:'0',padding: '0',}}>
                       PAYMENT OFFERS/COUPENS
                      </Menu.Item>
                     </Menu>
                     </div>
          </div> */}
              </div>
        )
    }
}

export default Moboffers
