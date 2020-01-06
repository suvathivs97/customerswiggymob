import React, { Component } from 'react'
import Head from './Head'
import Bottom from './Bottom'
import {Layout,Col,Row,Icon,Card} from 'antd'
import MidRestaurant from './MidRestaurant'
const { Header,Footer,Content } = Layout;

export class SingleRestaurant extends Component {
    back =()=>{
        window.location.href="/"
    }
    render() {
        return (
            <div >
                <div className='webview'>
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
            <div className='mobview'>
            <header className="heading">
            <div style={{padding:'10px',height:'30px',width:'100%',zIndex:'6px',background: '#fff'}}>
                 <img src="/img/left arrow.png" onClick={this.back} style={{height:"25px",float:'left'}}/>
                 <img src='/img/search.png' style={{height:"25px",float:'right'}}/>
                 <div style={{fontWeight:"bold",textAlign:'center'}}>Sita Paanai </div> 
                   
             </div>
             </header>
             <div style={{padding:'10px 16px 20px', color: '#535665',position: 'relative',fontSize:'12px',paddingTop:'10px',textAlign:'center',paddingBottom:'30x'}}>Indian,Chineese</div>
             <div style={{ padding:'10px 16px  20px', color: '#535665', paddingBottom:'0'}}>
                 <div style={{backgroundImage: 'linear-gradient(90deg,#a9abb2 25%,rgba(255,255,255,0) 0)',backgroundSize: '4px 1px',backgroundPosition: 'top',
             paddingTop: '16px', backgroundRepeat: 'repeat-x',}}></div>


             <div style={{ paddingBottom:'30px',color: '#7e808c', fontSize:'12px', display: 'flex',width: '100%'}}>  
             <div>
                <Row>  
                    <Col span={5}>
             <img src='img/star.png'style={{paddingLeft:'20px',height:'10px'}}/>
             </Col>
             <Col span={5}>
             <div style={{ paddingLeft:'20px',fontSize:'15px',fontWeight:'600'}}>4.1</div> 
              </Col>
             </Row>
             <div style={{paddingLeft:'10px',fontSize:'12px',fontWeight:'200'}}>5000+ rating</div>
             </div>

             <div>
            <div style={{paddingLeft:'40px',fontSize:'15px',fontWeight:'600'}}>39mins</div>
            <div style={{paddingLeft:'30px',fontSize:'12px',fontWeight:'200'}}>Delivery Time</div>
            </div>
 
              <div>
             <div style={{paddingLeft:'60px',fontSize:'15px',fontWeight:'600',whiteSpace: 'nowrap',textTransform:'uppercase',textAlign:'center'}}>₹300 </div>
             <div style={{paddingLeft:'60px',fontSize:'12px',fontWeight:'200'}}>For Two</div>
            </div> 
            </div>
            <div style={{paddingBottom:'20px'}}>
            <Card >
                <div style={{color: '#7e808c',textAlign:'center',fontFamily: 'icomoon',fontWeight:'600'}}>
                <img src="/img/percentage.png" style={{float:"left"}}/>
                60% off up to ₹120 on orders above ₹99| Use coupon WELCOME60
                </div>
            </Card>
            </div>
             </div>
             <MidRestaurant />

                </div>
            </div>
        )
    }
}

export default SingleRestaurant
