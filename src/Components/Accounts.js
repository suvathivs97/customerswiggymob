import React, { Component } from 'react'
import {Col,Row,Card,Button,Icon} from 'antd'
import {NavLink} from 'react-router-dom'

export class Accounts extends Component {
    render() {
        return (
            <div>
            <div className="webview">
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
            <div className='mobview'> 
            <div style={{backgroundColor: '#f4f4f5',}}>
 <div style={{padding:'0 16px',backgroundColor:'#fff',width:'100%'}}>
     <div style={{marginTop:'21px',display:'flex',alignItems:'center',cursor:'pointer'}}>
         <div style={{fontSize: '1.88rem', fontWeight: '600', textTransform: 'capitalize',fontSize:'22px',fontWeight:"Bold"}}>Lavanya</div>
    </div>
    <div style={{display: 'flex',color: '#93959f', borderBottom: '2px solid #282c3f', paddingBottom: '26px',fontSize:'12px',alignItems:'center',cursor:'pointer'}}>
        8526461491 . lavanya.dhasarathan@gmail.com
    </div>
    <div style={{fontSize:'14px',marginTop:'20px'}}>My Account<img src='img/downarrow.png'style={{height:'15px',float:'right'}}/></div>
    <div style={{fontSize:'12px',color: '#93959f',}}>Address,Payments,Favorites,others</div>
    <hr/>
    <div style={{paddingBottom:'16px'}}>
        <div style={{fontSize:'14px'}}>Help  <img src='img/Rightarrow.png' style={{height:'15px',float:'right'}}/></div>
        <div style={{fontSize:'12px',color: '#93959f',}}>FAQ,Links</div>
    </div>
</div>
    <div style={{padding:'0 16px 20px',width:'100%',height:'60px'}}>
        <div style={{paddingTop:'30px',fontSize:'11px',textTransform:'uppercase'}}>Past Orders</div>
    </div>

    <div style={{background:'#fff',padding:'0 16px 20px',width:'100%',}}>
        {/* 1 */}
        <div style={{fontSize:'14px',paddingTop:'16px'}}>OMG-Oh My Grill  </div>
        <div style={{fontSize:'12px',color: '#93959f',}}>Hopes 
        <div style={{float:'right'}}>₹110 <img src='img/Rightarrow.png' style={{height:'15px',float:'right'}}/></div>
        </div>
        <div style={{overflow: 'hidden',position: 'relative', marginTop:'20px',borderBottom: '1px solid #282c3f'}}>
            <div style={{borderTop: '1px dashed #d4d5d9', paddingBottom: '10px'}}>
                <div style={{fontSize:'12px',color: '#93959f',paddingTop:'16px'}}>  American BBQ Grilled Chicken(1) </div>
                  <div style={{fontSize:'12px',color: '#a9abb2',marginTop:'4px'}}> Jan 13 2019 5:15pm </div>
            </div>
            <div style={{display: 'flex',paddingBottom:'20px' }}>
                <div style={{cursor: 'pointer', display: 'inline-block',  textAlign: 'center',  border: '1px solid #fc8019',  backgroundColor: '#fff', color: '#fc8019',  lineHeight: '38px', height: '40px',width:'50%',fontWeight: '600',fontSize:'12px'}}>
                    REORDER
                </div>
            </div>
        </div>  

        {/* 2 */}
        <div style={{fontSize:'14px',paddingTop:'16px'}}>OMG-Oh My Grill  </div>
        <div style={{fontSize:'12px',color: '#93959f',}}>Hopes 
        <div style={{float:'right'}}>₹100 <img src='img/Rightarrow.png' style={{height:'15px',float:'right'}}/></div>
        </div>
        <div style={{overflow: 'hidden',position: 'relative', marginTop:'20px',borderBottom: '1px solid #282c3f'}}>
            <div style={{borderTop: '1px dashed #d4d5d9', paddingBottom: '10px'}}>
                <div style={{fontSize:'12px',color: '#93959f',paddingTop:'16px'}}>  American BBQ Grilled Chicken(1) </div>
                  <div style={{fontSize:'12px',color: '#a9abb2',marginTop:'4px'}}> Dec 10 2019 7:15pm </div>
            </div>
            <div style={{display: 'flex',paddingBottom:'20px' }}>
                <div style={{cursor: 'pointer', display: 'inline-block',  textAlign: 'center',  border: '1px solid #fc8019',  backgroundColor: '#fff', color: '#fc8019',  lineHeight: '38px', height: '40px',width:'50%',fontWeight: '600',fontSize:'12px'}}>
                    REORDER
                </div>
            </div>
        </div>   
             {/* 3 */}
        <div style={{fontSize:'14px',paddingTop:'16px'}}>Eleven 2 Eleven  </div>
        <div style={{fontSize:'12px',color: '#93959f',}}>Hopes 
        <div style={{float:'right'}}>₹100 <img src='img/Rightarrow.png' style={{height:'15px',float:'right'}}/></div>
        </div>
        <div style={{overflow: 'hidden',position: 'relative', marginTop:'20px',borderBottom: '1px solid #282c3f'}}>
            <div style={{borderTop: '1px dashed #d4d5d9', paddingBottom: '10px'}}>
                <div style={{fontSize:'12px',color: '#93959f',paddingTop:'16px'}}>  Boneless Kadai Chicken(1) Chicken Briyani (1) </div>
                  <div style={{fontSize:'12px',color: '#a9abb2',marginTop:'4px'}}> Dec 28 2019 2:15pm </div>
            </div>
            <div style={{display: 'flex',paddingBottom:'20px' }}>
                <div style={{cursor: 'pointer', display: 'inline-block',  textAlign: 'center',  border: '1px solid #fc8019',  backgroundColor: '#fff', color: '#fc8019',  lineHeight: '38px', height: '40px',width:'50%',fontWeight: '600',fontSize:'12px'}}>
                    REORDER
                </div>
            </div>
        </div>  

        <div style ={{paddingTop:'20px',cursor: 'pointer',color: '#fc8019',fontSize:'12px',fontWeight: '600',}}>VIEW FOR MORE ORDERS</div>      
            
    </div>
    <div style={{marginTop:'30px',background:'#fff',width:'100%',padding:'0 16px 20px'}}>
    <div style={{fontSize:'14px',paddingTop:'16px'}}>LogOut
    <img src='img/logout.jpg' style={{height:'15px',float:'right'}}/></div>
    </div>
    <div style={{marginTop:'30px',width:'100%',padding:'0 16px 20px',marginBottom:'50px'}}>
        <div style={{textAlign: 'center', color: '#bebfc5',fontSize:'12px'}}>App version v2.19.1-mweb</div>
        </div>
        {/* <div style={{marginTop:'40px'}}>bjbjk</div> */}

    
   
    
    
    {/* <div style={{width:'100%',height:'70px',background:'#fff',padding:'20px 16px',fontSize:'15px',textTransform:'uppercase',color:'#3d4152',}}>
         <img src="img/percentage1.png" style={{height:'20px',paddingRight:'10px'}}/>
         Apply Coupon
         <img src='img/Rightarrow.png' style={{height:'20px',float:'right'}}/>
     </div> */}


 </div>

    

{/* footer */}
<div style={{display: 'flex',background:'#fff',position:'fixed',bottom:'0',width:'100%',}} >
 <div style={{ lineHeight:'1.2',flexDirection:'column',  alignItems: 'center', textTransform: 'uppercase',width: '25%', fontWeight: '600',height: 'inherit',justifyContent: 'center', color: '#93959f', textDecoration: 'none', overflow: 'hidden',position: 'relative'}}>
 <Row>
 <NavLink to={"/"}>
       <Col span={8}>
     <div style={{ paddingLeft:'30px',color: '#93959f', textAlign:'center'}}>
         <img src="/img/swiggylogo.png" style={{ height:'30px',margin:'2px 4px'}}/>
         <div style={{fontSize: '11px',display: 'flex',whiteSpace:'nowrap',textAlign:'center'}}>Near me</div>
     </div>
     </Col>
     </NavLink>
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
 <NavLink to={"/MobAccount"}>
       <Col span={8}>
     <div style={{ paddingLeft:'25px',color: '#93959f', textAlign:'center'}}>
         
     <img src="/img/userorange.jpg" style={{ height:'20px',margin:' 10px 0 2px 11px'}}/>
         <div style={{fontSize: '11px',display: 'flex',whiteSpace:'nowrap',textAlign:'center',color: '#e46d47'}}>Account</div>
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

export default Accounts
