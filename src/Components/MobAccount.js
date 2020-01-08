import React, { Component } from 'react'
import {Row,Col} from'antd';
import {NavLink }from 'react-router-dom'
export class MobAccount extends Component {
    render() {
        return (
            <div> 
                <div style={{backgroundColor: '#f4f4f5'}}>
                 <div style={{padding:'0 16px',backgroundColor:'#fff',width:'100%',height:'220px'}}>
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

                    <div style={{background:'#fff',padding:'0 16px 20px',width:'100%',height:'70px',borderBottom: '1px dotted #282c3f'}}>
                        <div style={{fontSize:'14px',paddingTop:'16px'}}>OMG-Oh My Grill  </div>
                        <div style={{fontSize:'12px',color: '#93959f',}}>Hopes 
                        <div style={{float:'right'}}>₹110 <img src='img/Rightarrow.png' style={{height:'15px',float:'right'}}/></div>
                        </div>
                    </div>
                    
                    {/* <div style={{width:'100%',height:'70px',background:'#fff',padding:'20px 16px',fontSize:'15px',textTransform:'uppercase',color:'#3d4152',}}>
                         <img src="img/percentage1.png" style={{height:'20px',paddingRight:'10px'}}/>
                         Apply Coupon
                         <img src='img/Rightarrow.png' style={{height:'20px',float:'right'}}/>
                     </div> */}
                

                 </div>
                    
                    
                
                {/* footer */}
                <div className='mobfooter' >
                 <div style={{ lineHeight:'1.2',flexDirection:'column',  alignItems: 'center', textTransform: 'uppercase',width: '25%', fontWeight: '600',height: 'inherit',justifyContent: 'center', color: '#93959f', textDecoration: 'none', overflow: 'hidden',position: 'relative'}}>
                 <Row>
                       <Col span={8}>
                     <div style={{ paddingLeft:'30px', textAlign:'center'}}>
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
        )
    }
}

export default MobAccount
