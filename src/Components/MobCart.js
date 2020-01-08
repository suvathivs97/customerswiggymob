import React, { Component } from 'react';
import{Row,Col} from 'antd';

export class MobCart extends Component {
    back =()=>{
        console.log('close');
        window.location.href="/"
    }
    render() {
        return (
            <div >
                {/* <div style={{marginBottom:'20px',backgroundColor:'#FFF',height:'100px',width:'100%'}}>hghjghjghjghjg</div>
                <div style={{backgroundColor:'#FFF',height:'100px',width:'100%'}}>jhjjgjhgjtttttttttttttttttt</div> */}
                 <header className="mobcard">
                        <div style={{ background: '#fff'}}>
                         <Row>
                             <Col span={3}>
                                <img src="/img/left arrow.png" onClick={this.back} style={{height:"20px",marginTop:'20px',paddingLeft:'10px'}}/>
                             </Col>
                             <Col span={3}>
                                 <img src="/img/swiggylogo.png" style={{ height:'30px',marginTop:'12px'}}/>
                             </Col>
                             <Col span={3}>
                             <div style={{fontWeight:"bold", marginTop:'15px'}}>Cart </div>
                             </Col>
                            </Row>
                            <hr/>
                            </div>   
                    </header>
                <div style={{backgroundColor: '#f4f4f5'}}>
                    <div style={{background: '#fff',marginBottom:'20px'}}>
                        <div style={{padding:'0 16px', paddingBottom:'20px',display:'flex',position:'relative',alignItems:'center'}}>
                             <img src="img/food5.jpg"style={{height: '48px',width: '48px'}}/>
                                <div style={{margin:'0 16px',flex:1,overflow:'hidden',textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '15px', fontWeight: '600', color: '#3d4152'}}>
                                Geetha Canteen
                                    <div style={{fontSize:"12px",fontWeight:'normal'}}>Gandhipuram</div>
                                </div> 
                                
                                    
                        </div>
                        <div style={{padding:'0 16px', paddingBottom:'20px',position:'relative',alignItems:'center'}}>
                           <Row >
                               <Col span={8}>
                            <div style={{display:'flex',flexwrap:'nowrap',whiteSpace:'nowrap',fontSize:'15px'}}>
                                 <img src="/img/vegIcon.png" style={{height:'10px',margin:'5px 5px 10px 0'}}/>
                                 Rava Roast
                                </div> </Col>
                                <Col span={8}>
                               <div style={{cursor: 'pointer',width: '82px',height: '26px', background: '#fff',border: '1px solid #e9e9eb',marginLeft: '30px',fontSize: '.86rem',color: '#7e808c',position: 'relative', contain: 'content'  }} >
                               <Row>
                                   <Col span={8}>
                                       <div style={{cursor: 'pointer', position: 'absolute',left: 0, width: '27.33333px', height: '100%',  textAlign: 'center',color: '#60b246'}}>
                                           -
                                       </div>
                                   </Col>
                                   <Col span={8}>
                                       <div style={{cursor: 'pointer', position: 'absolute',left: 0, width: '27.33333px', height: '100%',  textAlign: 'center',color: '#60b246'}}>
                                           2
                                       </div>
                                   </Col>
                                   <Col span={8}>
                                       <div style={{cursor: 'pointer', position: 'absolute',left: 0, width: '27.33333px', height: '100%',  textAlign: 'center',color: '#60b246'}}>
                                           +
                                       </div>
                                   </Col>
                               </Row>
                                </div>
                                </Col>
                                <Col span={8}>
                                  <div style={{fontSize:'12px',paddingleft:'30px',float:'right'}}> ₹118</div>
                                </Col>
                                </Row>
                        </div>
                         
                         <div style={{position:'relative',background:'#feedef',padding:'20px 16px'}}>
                         <Row>
                             <Col span={6}>
                                 <div style={{fontSize:'12px',whiteSpace:'nowrap'}}>
                             <img src="/img/vegIcon.png" style={{height:'12px',marginRight:'8px'}}/>
                             Combo Meal </div> 
                             </Col>
                             <Col span={10}>
                                <div style={{border: '1px solid rgba(40,44,63,.2)', color:'#7e808c', textAlign: 'center',display: 'flex',justifyContent: 'center',    alignItems: 'center', padding: '0 10px', fontSize: '9px',width:'82px',height:'26px',float:'right'}}>
                                       Item Not Available
                                </div>
                             </Col>
                             <Col span={6}>
                                 <div style={{float:'right'}}>
                                    <img src='/img/delete.png' style={{height:'20px'}}/>
                                    </div>
                             </Col>
                         </Row>
                        </div> 
                        <div style={{background:'#fff',width:'100%',height:'50px'}}>
                        <div style={{marginTop:'20px',paddingLeft:'16px',paddingRight:'16px',}}>
                              <div style={{borderTop:'1px solid rgba(0,0,0,.1)'}}>
                                    <div style={{paddingTop:'12px',float:'left',}}>
                                         <input type='text' class='no-outline' placeholder= "Write Suggestions to restaurants.."style={{borderTopStyle:'hidden',borderLeftStyle:'hidden',borderRightStyle:'hidden',borderBottomStyle:'hidden',}}/>
                                    </div>
                                </div>
                            </div> 
                            </div>
                     </div>
                     {/* caurosel */}
                         <div style={{background: 'inherit',margin:'0,0,0,16px',padding:'0 0 0 16px'}}>
                                <div style={{color: '#bebfc5',textTransform: 'uppercase',fontWeight: '500',letterSpacing: '.8px', fontSize: '10px'}} >You May also Like </div>
                                 <div style={{marginRight:'16px',width: 'auto', display:'flex',flexWrap:'nowrap', overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap',marginTop: '22px',paddingBottom:'20px'}}>
                                     
                                     <div style={{height:'auto',width:'116px',marginRight:'16px'}}>
                                         <div style={{position: 'relative', }}>
                                             <div style={{position: 'absolute', top: '7px',right: '7px', zIndex: '1', fontSize: '18px', height: '26px',width: '24px',  textAlign: 'center', color: '#fff', backgroundColor: '#60b246', transform: 'scaleY(.9) translateY(-1px)'}}>+</div>
                                                 <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_76,c_fill/n3z3i3du9n2qasm3ndvv"/>
                                                    <div style={{marginTop: '13px',fontSize:'12px',wordBreak: 'break-word', wordWrap: 'break-word'}}>
                                                     </div>
                                                     <div style={{ color:'#7e808c',fontSize:'10px',marginLeft:'20px'}}>₹35</div>
                                        </div>
                                     </div>
                                     <div style={{height:'auto',width:'116px',marginRight:'16px'}}>
                                         <div style={{position: 'relative', }}>
                                             <div style={{position: 'absolute', top: '7px',right: '7px', zIndex: '1', fontSize: '18px', height: '26px',width: '24px',  textAlign: 'center', color: '#fff', backgroundColor: '#60b246', transform: 'scaleY(.9) translateY(-1px)'}}>+</div>
                                             <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_76,c_fill/op8sfqyzakqvtkwis0sv"></img>
                                                    <div style={{marginTop: '13px',fontSize:'12px',wordBreak: 'break-word', wordWrap: 'break-word'}}>
                                                        <img src="\img\vegIcon.png" style={{height:'12px',marginRight:'8px'}}/>Ginger Tea
                                                     </div>
                                                     <div style={{ color:'#7e808c',fontSize:'10px',marginLeft:'20px'}}>₹10</div>
                                        </div>
                                     </div>
                                     <div style={{height:'auto',width:'116px',marginRight:'16px'}}>
                                         <div style={{position: 'relative', }}>
                                             <div style={{position: 'absolute', top: '7px',right: '7px', zIndex: '1', fontSize: '18px', height: '26px',width: '24px',  textAlign: 'center', color: '#fff', backgroundColor: '#60b246', transform: 'scaleY(.9) translateY(-1px)'}}>+</div>
                                             <img  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_76,c_fill/cqgsppjnoggcrlklq5jo"/>
                                                    <div style={{marginTop: '13px',fontSize:'12px',wordBreak: 'break-word', wordWrap: 'break-word'}}>
                                                        <img src="\img\vegIcon.png" style={{height:'12px',marginRight:'8px'}}/>Chocolate Roll
                                                     </div>
                                                     <div style={{ color:'#7e808c',fontSize:'10px',marginLeft:'20px'}}>₹15</div>
                                        </div>
                                     </div>
                                     <div style={{height:'auto',width:'116px',marginRight:'16px'}}>
                                     <div style={{position: 'relative', }}>
                                             <div style={{position: 'absolute', top: '7px',right: '7px', zIndex: '1', fontSize: '18px', height: '26px',width: '24px',  textAlign: 'center', color: '#fff', backgroundColor: '#60b246', transform: 'scaleY(.9) translateY(-1px)'}}>+</div>
                                             <img  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_76,c_fill/voqzvngvhxm5i7tbqj1x"/>
                                                    <div style={{marginTop: '13px',fontSize:'12px',wordBreak: 'break-word', wordWrap: 'break-word'}}>
                                                        <img src="\img\vegIcon.png" style={{height:'12px',marginRight:'8px'}}/>Samosa
                                                     </div>
                                                     <div style={{ color:'#7e808c',fontSize:'10px',marginLeft:'20px'}}>₹15</div>
                                        </div>
                                     </div>

                                 </div>
                          </div>

                     <div style={{width:'100%',height:'70px',background:'#fff',padding:'20px 16px',fontSize:'15px',textTransform:'uppercase',color:'#3d4152',}}>
                         <img src="img/percentage1.png" style={{height:'20px',paddingRight:'10px'}}/>
                         Apply Coupon
                         <img src='img/Rightarrow.png' style={{height:'15px',float:'right'}}/>
                     </div>
                     <div style={{marginTop:'20px',background:'#fff',width:'100%',height:'100%',padding:'20px 16px'}}>
                           <div style={{fontSize:'14px'}}>Bill Details</div>
                           <Row>
                               <Col span={12}>
                           <div style={{fontSize:'14px',padding:'10px 0'}}>Item Total</div>
                              </Col> 
                              <Col span={12}>
                           <div style={{fontSize:'12px',padding:'10px 0',float:'right'}}>₹118</div>
                               </Col> 
                           </Row>

                           <Row>
                               <Col span={12}>        
                                    <div style={{fontSize:'14px',}}>Delivery Fee  <img src='img/i-icon.png' style={{height:'15px',}}/></div>
                              </Col> 
                              <Col span={12}>
                                    <div style={{fontSize:'12px',float:'right'}}>₹35</div>
                               </Col> 
                           </Row>
                           <hr/>
                                <Row>
                                    <Col span={12}>
                                    <div style={{fontSize:'14px',whiteSpace:'nowrap'}}>Taxes and Charges<img src='img/i-icon.png' style={{height:'15px'}}/></div>
                                    </Col>
                                     <Col span={12}>
                                     <div style={{fontSize:'12px',float:'right'}}>₹19.6</div>
                                    </Col>
                                </Row>
                           <hr/>
                           <Row>
                                    <Col span={12}>
                                    <div style={{fontSize:'14px',whiteSpace:'nowrap',fontWeight:'bold'}}>To Pay</div>
                                    </Col>
                                     <Col span={12}>
                                     <div style={{fontSize:'12px',float:'right',fontWeight:'bold'}}>₹148</div>
                                    </Col>
                                </Row>

                     </div>
                     <footer>
                     <div style={{padding: '30px 16px 16px', alignItems: 'center', color: '#a9abb2',display: 'flex',}}>
                           
                     </div>
                     </footer>
                </div>
            </div>
        )
    }
}

export default MobCart
