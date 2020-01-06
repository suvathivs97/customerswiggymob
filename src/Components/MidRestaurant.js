import React, { Component } from 'react'
import {Col,Row,Icon,Divider, Button} from 'antd'
import Scrollspy from 'react-scrollspy'
import { Switch } from 'antd';

function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

export class MidRestaurant extends Component {
    state={
        categories:[
            {
                _id:'11',
                name:'aaa'
            }
        ],
        obj:[],
       
       
    }
    
    componentDidMount=async()=>{
        let obj=[]
        obj=[
             {
                image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/en5tssfnk3ag3rzn65kd",
                name:'Shree Akssyam',
                foodtype:'South Indian'
             },
             {
                image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/n98yqjy0v5b1bttgvvul",
                name:'Fasos',
                foodtype:'Fast Food,North Indian'   
             },
             {
                image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/en5tssfnk3ag3rzn65kd",
                name:'Sharma Punjab Restaurant',
                foodtype:'North Indian'   
             },
             {
                image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nqvw6lxqlus3lmdbefn0",
                name:'Sharma Punjab Restaurant',
                foodtype:'North Indian'   
             }
             
         ]
        //  document.getElementById('11').style.color = "#fc8019";
        //  document.getElementById('11').style.borderRight = "2px solid #fc8019";
         await this.setState({obj})
       }
    render() {
        return (
            <div>
            <div className="webview"style={{backgroundColor:'#fff'}}>
               <Row>
                   <Col span={6} style={{padding:'40px 0px',position:'sticky',top:'50px'}}>
                       <div style={{display:'flex',float:'right'}}>
                        <div style={{height:'300px',paddingRight:'35px'}}>
                        <Scrollspy items={ ['11', '12', '13'] } currentClassName="currentres" style={{marginLeft:'-40px'}}>
                            <div><a href="#11"  style={{textDecoration:'none',fontSize:'15px',fontWeight:'400',paddingTop:'5px',color:'black'}}>Recommented</a></div>
                            <div><a href="#12" style={{textDecoration:'none',fontSize:'15px',fontWeight:'400',paddingTop:'5px',color:'black'}}>Meals</a></div>
                            <div><a href="#13" style={{textDecoration:'none',fontSize:'15px',fontWeight:'400',paddingTop:'5px',color:'black'}}>Quick bites</a></div>
                        </Scrollspy>
                        </div>
                       </div>
                       <div style={{}}></div>
                   </Col>
                   <Col span={11} style={{padding:'40px 40px',borderLeft:'1px solid #D4D4D4'}}>
                       <div id="11" style={{borderBottom:'2px solid black'}}>
                           <div style={{fontSize:'32px',fontWeight:'600'}}>Recommented</div>
                           <div class="row" style={{paddingTop:'20px'}}>
                                {this.state.obj.map((p,i)=>{return(
                                <div class="col-6 col-sm-6 col-lg-6" style={{paddingBottom:'30px'}}>
                                   <div class="card" style={{width: '244px'}}>
                                        <img class="card-img-top" src={p.image} />
                                        <div class="card-body">
                                            <div class="card-title" style={{fontSize:'16px',fontWeight:'500',wordBreak:'break-word'}}>{p.name}</div>
                                            <div class="card-text" style={{color:'#686b78',fontSize:'13px',marginTop:'-10px'}}>{p.foodtype}</div>
                                              <Row>
                                                <div style={{float:'left',fontSize:'15px',color:'#535665'}}>
                                                ₹ 400
                                                </div>
                                                <button disabled style={{backgroundColor:'#fff',borderWidth:'1px',float:'right',height:'30px',width:'70px'}}>
                                                    <div style={{color:'#60b246',fontSize:'14px',textAlign:'center'}}>ADD</div> 
                                                </button>
                                              </Row>
                                        </div>
                                    </div>
                                </div>
                                )})}
                      </div>
                       </div>

                       <div id="12" style={{padding:'20px 0px',borderBottom:'2px solid black'}}>
                           <div style={{fontSize:'32px',fontWeight:'600'}}>Meals</div>
                           <div style={{color:'#686b78',fontSize:'13px',fontWeight:'500'}}>4 ITEM</div>
                           <div  style={{paddingTop:'20px'}}>
                                
                                <div style={{float:'left',fontSize:'15px',display:'flex',alignItems:'center'}}><img src="/img/vegIcon.png" style={{height:'15px',width:'15px'}} />&nbsp; Mini Meal</div>
                                
                                <div style={{float:'right'}}>
                                    <button disabled style={{backgroundColor:'#fff',borderWidth:'1px',height:'30px',width:'70px'}}>
                                                        <div style={{color:'#60b246',fontSize:'14px',textAlign:'center'}}>ADD</div> 
                                    </button>
                                </div>
                                <br />
                                <div style={{fontSize:'13px',color:'#7e808c',paddingLeft:'20px'}}>&nbsp;Rice + sambar + rasam +poriyal</div>
                                <div style={{fontSize:'15px',color:'#535665',paddingLeft:'20px'}}>&nbsp;₹ 50</div>
                          </div>
                          <Divider />
                          <div  style={{padding:'20px 0px'}}>
                                
                                <div style={{float:'left',fontSize:'15px',display:'flex',alignItems:'center'}}><img src="/img/vegIcon.png" style={{height:'15px',width:'15px'}} />&nbsp; Veg meal with curd</div>
                                
                                <div style={{float:'right'}}>
                                    <button disabled style={{backgroundColor:'#fff',borderWidth:'1px',height:'30px',width:'70px'}}>
                                                        <div style={{color:'#60b246',fontSize:'14px',textAlign:'center'}}>ADD</div> 
                                    </button>
                                </div>
                                <br />
                                <div style={{fontSize:'13px',color:'#7e808c',paddingLeft:'20px'}}>&nbsp;Rice + sambar + rasam +poriyal</div>
                                <div style={{fontSize:'15px',color:'#535665',paddingLeft:'20px'}}>&nbsp;₹ 100</div>
                          </div>

                          <Divider />
                          <div  style={{paddingTop:'20px'}}>
                                
                                <div style={{float:'left',fontSize:'15px',display:'flex',alignItems:'center'}}><img src="/img/vegIcon.png" style={{height:'15px',width:'15px'}} />&nbsp; Mini Meal</div>
                                
                                <div style={{float:'right'}}>
                                    <button disabled style={{backgroundColor:'#fff',borderWidth:'1px',height:'30px',width:'70px'}}>
                                                        <div style={{color:'#60b246',fontSize:'14px',textAlign:'center'}}>ADD</div> 
                                    </button>
                                </div>
                                <br />
                                <div style={{fontSize:'13px',color:'#7e808c',paddingLeft:'20px'}}>&nbsp;Rice + sambar + rasam +poriyal</div>
                                <div style={{fontSize:'15px',color:'#535665',paddingLeft:'20px'}}>&nbsp;₹ 50</div>
                          </div>
                          <Divider />
                          <div  style={{padding:'20px 0px'}}>
                                
                                <div style={{float:'left',fontSize:'15px',display:'flex',alignItems:'center'}}><img src="/img/vegIcon.png" style={{height:'15px',width:'15px'}} />&nbsp; Veg meal with curd</div>
                                
                                <div style={{float:'right'}}>
                                    <button disabled style={{backgroundColor:'#fff',borderWidth:'1px',height:'30px',width:'70px'}}>
                                                        <div style={{color:'#60b246',fontSize:'14px',textAlign:'center'}}>ADD</div> 
                                    </button>
                                </div>
                                <br />
                                <div style={{fontSize:'13px',color:'#7e808c',paddingLeft:'20px'}}>&nbsp;Rice + sambar + rasam +poriyal</div>
                                <div style={{fontSize:'15px',color:'#535665',paddingLeft:'20px'}}>&nbsp;₹ 100</div>
                                

                          </div>
                       </div>


                       <div id="13" style={{padding:'20px 0px',borderBottom:'2px solid black',paddinTop:'20px'}}>
                           <div style={{fontSize:'32px',fontWeight:'600'}}>Quick bits</div>
                           <div style={{color:'#686b78',fontSize:'13px',fontWeight:'500'}}>4 ITEM</div>
                           <div  style={{paddingTop:'20px'}}>
                                
                                <div style={{float:'left',fontSize:'15px',display:'flex',alignItems:'center'}}><img src="/img/vegIcon.png" style={{height:'15px',width:'15px'}} />&nbsp; Omlete</div>
                                
                                <div style={{float:'right'}}>
                                    <button disabled style={{backgroundColor:'#fff',borderWidth:'1px',height:'30px',width:'70px'}}>
                                                        <div style={{color:'#60b246',fontSize:'14px',textAlign:'center'}}>ADD</div> 
                                    </button>
                                </div>
                                <br />
                                <div style={{fontSize:'15px',color:'#535665',paddingLeft:'20px'}}>&nbsp;₹ 50</div>
                          </div>
                          <Divider />
                          <div  style={{paddingTop:'20px'}}>
                                
                                <div style={{float:'left',fontSize:'15px',display:'flex',alignItems:'center'}}><img src="/img/vegIcon.png" style={{height:'15px',width:'15px'}} />&nbsp; Masala Omlete</div>
                                
                                <div style={{float:'right'}}>
                                    <button disabled style={{backgroundColor:'#fff',borderWidth:'1px',height:'30px',width:'70px'}}>
                                                        <div style={{color:'#60b246',fontSize:'14px',textAlign:'center'}}>ADD</div> 
                                    </button>
                                </div>
                                <br />
                                <div style={{fontSize:'15px',color:'#535665',paddingLeft:'20px'}}>&nbsp;₹ 100</div>

                          </div>
                          <Divider />
                          <div  style={{paddingTop:'20px'}}>
                                
                                <div style={{float:'left',fontSize:'15px',display:'flex',alignItems:'center'}}><img src="/img/vegIcon.png" style={{height:'15px',width:'15px'}} />&nbsp; Omlete</div>
                                
                                <div style={{float:'right'}}>
                                    <button disabled style={{backgroundColor:'#fff',borderWidth:'1px',height:'30px',width:'70px'}}>
                                                        <div style={{color:'#60b246',fontSize:'14px',textAlign:'center'}}>ADD</div> 
                                    </button>
                                </div>
                                <br />
                                <div style={{fontSize:'15px',color:'#535665',paddingLeft:'20px'}}>&nbsp;₹ 50</div>
                          </div>
                          <Divider />
                          <div  style={{paddingTop:'20px'}}>
                                
                                <div style={{float:'left',fontSize:'15px',display:'flex',alignItems:'center'}}><img src="/img/vegIcon.png" style={{height:'15px',width:'15px'}} />&nbsp; Masala Omlete</div>
                                
                                <div style={{float:'right'}}>
                                    <button disabled style={{backgroundColor:'#fff',borderWidth:'1px',height:'30px',width:'70px'}}>
                                                        <div style={{color:'#60b246',fontSize:'14px',textAlign:'center'}}>ADD</div> 
                                    </button>
                                </div>
                                <br />
                                <div style={{fontSize:'15px',color:'#535665',paddingLeft:'20px'}}>&nbsp;₹ 100</div>

                          </div>
                          <Divider />
                          <div  style={{paddingTop:'20px'}}>
                                
                                <div style={{float:'left',fontSize:'15px',display:'flex',alignItems:'center'}}><img src="/img/vegIcon.png" style={{height:'15px',width:'15px'}} />&nbsp; Omlete</div>
                                
                                <div style={{float:'right'}}>
                                    <button disabled style={{backgroundColor:'#fff',borderWidth:'1px',height:'30px',width:'70px'}}>
                                                        <div style={{color:'#60b246',fontSize:'14px',textAlign:'center'}}>ADD</div> 
                                    </button>
                                </div>
                                <br />
                                <div style={{fontSize:'15px',color:'#535665',paddingLeft:'20px'}}>&nbsp;₹ 50</div>
                          </div>

                       </div>
                   </Col>
                   <Col span={7} style={{padding:'40px 40px',position:'sticky',top:'50px'}}>
                      <div style={{fontSize:'32px',fontWeight:'600'}}>Cart</div>
                      <div style={{fontSize:'14px',fontWeight:'300',color:'282c3f'}}>from Subway</div>
                      <div style={{fontSize:'13px',color:'#686b78',fontWeight:'500'}}>1 ITEM</div>
                      <Row style={{paddingTop:'20px'}}>
                        <div style={{color:'#3d4152',fontSize:'17px',fontWeight:'600',float:'left'}}>Subtotal</div>
                        <div style={{float:'right',fontSize:'15px'}}>₹ 250</div>
                        <div style={{float:'right',textDecoration:'line-through',color:'#bebfc5',marginRight:'10px',fontSize:'15px'}}>₹ 350</div>
                      </Row>
                      <div style={{color:'#7e808c',fontSize:'13px',fontWeight:'300'}}>Extra charges may apply</div>
                      <div><Button style={{backgroundColor:'#60b246',border:'none',fontSize:'16px',fontWeight:'600',width:'100%',textAlign:'center',color:'#fff',marginTop:'20px'}}>Checkout </Button></div>
                   </Col>
               </Row>
            </div>
            <div className="mobview">
                <div style={{backgroundColor:'#eee',paddingTop:'12px'}}>
                </div>
                <div style={{padding:'0 20px',height:'72px',alignItems:'center',display:'flex',position:'relative',justifyContent: 'space-between'}}>
                    <div syle={{display: 'flex', alignItems: 'center',height: '14px',overflow: 'hidden',contain: 'content',transform: 'translateZ(0)'}}>
                        <Row>
                         <Col span={12}>
                        <div style={{ display:'flex',flexWrap:'nowrap',whiteSpace:'nowrap',textTransform: 'uppercase', fontSize: '12px', color: '#535665',fontWeight: '700',marginTop:'5px'}}>VEG ONLY </div>
                        </Col>
                        <Col span={12}>
                        <div style={{marginLeft: '16px',}}>
                        <Switch size="small" onChange={onChange}/>

                            {/* <div style={{background:' #cdcfd9', width: '24px', height: '6px', position: 'relative',transition:'background-color .25s linear', willChange: 'background-color',transform: 'translateZ(0)',contain: 'layout'}}>
                                <div style={{position: 'absolute', left: 0,  top: '50%',  width: '14px',  height: '14px', transform: 'translate3d(0,-50%,0)', background: '#fff',border: '1px solid #cdcfd9',transition: 'all .25s linear',backfaceVisibility: 'hidden', willChange: 'transform,border-color',contain:'strict'}}>
                                    <div style={{transition: 'opacity .25s linear', willChange: 'opacity'}}>
                                        <img src='/img/vegIcon.png'/>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        </Col>
                        </Row>
                    </div>
                </div>
                <div style={{padding:'0 20px'}}><hr/></div>
                {/*recommended  */}
                <div style={{padding:'10px 16px 20px 20px', color: '#535665',position: 'relative',fontSize:'12px',paddingTop:'10px',textAlign:'center',paddingBottom:'20x'}}>
                <div style={{fontSize:'15px',color: '#3d4152',fontWeight: '800',float:'left'}}>Recommended</div> 
                 <div style={{paddingTop:'40px'}}>
                    <Row gutter={10}>
                        <Col span={12}>
                        <div style={{paddingTop:'10px'}}>
                         <img src="img/food1.jpg" style={{width:'100%',height:'90px'}}/>
                            <div style={{paddingTop:'10px'}} >
                                {/* <div style={{display:'flex',flex:1,float:'left',fontSize:'15px',}}>
                                             <img src="/img/vegIcon.png" style={{height:'10px',margin:'5px 5px 10px 0'}}/>
                                                 Puri
                                </div> 
                                <div style={{marginTop:'20px',fontSize:'12px',float:'left'}}>Starter </div>   */}
                                <Row>
                                 
                                    <Col span={1}>
                                        <div style={{display:'flex',flex:1,float:'left',fontSize:'15px',}}>
                                             <img src="/img/vegIcon.png" style={{height:'10px',margin:'5px 5px 10px 0'}}/>
                                                 Pasta
                                         </div>   
                                     </Col>
                                        <Col span={1}>
                                            <div style={{marginTop:'20px',fontSize:'12px',padding:'10 0',marginRight:'10px'}}>Starter </div>
                                        </Col>
                                        
                                            <div style={{marginTop:'40px',fontSize:'12px',float:'left'}}>₹105 </div> 
                                            <div  style={{float:'right'}}>
                                            <div style={{height: '28px', width: '72px', border: '1px solid #d4d5d9', backgroundColor: '#fff', contain: 'content', overflow: 'hidden',position: 'relative',marginTop:'40px'}}>
                                                         <div style={{fontSize:'12px', fontWeight: '600', color: '#60b246', textAlign: 'center', lineHeight: '26px'}}>ADD</div>
                                                    </div></div>
                                                
                                       
                                        </Row>
                                        {/* <Col span={8}>
                                             <div style={{width: '82px',minHeight: '24px',marginLeft: '12px',position: 'relative',float:'right'}}>
                                                <div style={{position:'absolute',paddingBottom:'0'}}>
                                                    <div style={{height: '28px', width: '72px', border: '1px solid #d4d5d9', backgroundColor: '#fff', contain: 'content', overflow: 'hidden',position: 'relative'}}>
                                                         <div style={{fontSize:'15px', fontWeight: '600', color: '#60b246', textAlign: 'center', lineHeight: '26px'}}>ADD</div>
                                                    </div>
                                                 </div>
                                            </div>
                                        </Col> */}
                                
                             </div>
                            </div>
                        </Col>
                        <Col span={12}>
                        <div style={{paddingTop:'20px'}}>
                            <img src='img/food7.jpg' style={{width:'100%',height:'90px'}}/>
                            <Row>
                                 
                                 <Col span={1}>
                                     <div style={{display:'flex',flex:1,float:'left',fontSize:'15px',whiteSpace:'nowrap'}}>
                                          <img src="/img/vegIcon.png" style={{height:'10px',margin:'5px 5px 10px 0'}}/>
                                              Chicken Rice
                                      </div>   
                                  </Col>
                                     <Col span={1}>
                                         <div style={{marginTop:'20px',fontSize:'12px',padding:'10 0',marginRight:'10px',display:'flex',whiteSpace:'nowrap'}}>Main Course</div>
                                     </Col>
                                     
                                         <div style={{marginTop:'40px',fontSize:'12px',float:'left'}}>₹95 </div> 
                                         <div  style={{float:'right'}}>
                                         <div style={{height: '28px', width: '72px', border: '1px solid #d4d5d9', backgroundColor: '#fff', contain: 'content', overflow: 'hidden',position: 'relative',marginTop:'40px'}}>
                                                      <div style={{fontSize:'12px', fontWeight: '600', color: '#60b246', textAlign: 'center', lineHeight: '26px'}}>ADD</div>
                                                 </div></div>
                                             
                                    
                                     </Row>
                            </div>
                        </Col>
                    </Row>
                              {/* new 2 column */}
                    <Row gutter={10}>
                        <Col span={12}>
                        <div style={{paddingTop:'30px'}}>
                         <img src="img/food5.jpg" style={{width:'100%',height:'90px'}}/>
                            <div style={{paddingTop:'10px'}} >
                                <Row>
                                 
                                    <Col span={1}>
                                        <div style={{display:'flex',flex:1,float:'left',fontSize:'15px',}}>
                                             <img src="/img/vegIcon.png" style={{height:'10px',margin:'5px 5px 10px 0'}}/>
                                                 Biriyani
                                         </div>   
                                     </Col>
                                        <Col span={1}>
                                            <div style={{marginTop:'20px',fontSize:'12px',padding:'20 0',marginRight:'10px',whiteSpace:'nowrap'}}>Main Course </div>
                                        </Col>
                                        
                                            <div style={{marginTop:'40px',fontSize:'12px',float:'left'}}>₹75 </div> 
                                            <div  style={{float:'right'}}>
                                            <div style={{height: '28px', width: '72px', border: '1px solid #d4d5d9', backgroundColor: '#fff', contain: 'content', overflow: 'hidden',position: 'relative',marginTop:'40px'}}>
                                                         <div style={{fontSize:'12px', fontWeight: '600', color: '#60b246', textAlign: 'center', lineHeight: '26px'}}>ADD</div>
                                            </div>
                                            </div>      
                                        </Row>
                                        </div>
                                        </div>
                                  </Col>
                        <Col span={12}>
                        <div style={{paddingTop:'30px'}}>
                            <img src='img/food6.jpg' style={{width:'100%',height:'90px'}}/>
                            <Row>
                                 
                                 <Col span={1}>
                                     <div style={{display:'flex',flex:1,float:'left',fontSize:'15px',marginTop:'10px'}}>
                                          <img src="/img/vegIcon.png" style={{height:'10px',margin:'5px 5px 10px 0'}}/>
                                              Roast
                                      </div>   
                                  </Col>
                                     <Col span={1}>
                                         <div style={{marginTop:'10px',fontSize:'12px',paddingTop:'20px',marginRight:'10px',whiteSpace:'nowrap'}}>Main Course</div>
                                     </Col>
                                     
                                         <div style={{marginTop:'50px',fontSize:'12px',float:'left'}}>₹30 </div> 
                                         <div  style={{float:'right'}}>
                                         <div style={{height: '28px', width: '72px', border: '1px solid #d4d5d9', backgroundColor: '#fff', contain: 'content', overflow: 'hidden',position: 'relative',marginTop:'50px'}}>
                                                      <div style={{fontSize:'12px', fontWeight: '600', color: '#60b246', textAlign: 'center', lineHeight: '26px'}}>ADD</div>
                                                 </div></div>
                                             
                                    
                                     </Row>
                            </div>
                        </Col>
                    </Row>
                                        
                    </div>
                </div>

                      {/*  New Breakfast        */}
                <div style={{padding:'10px 16px 20px 20px', color: '#535665',position: 'relative',fontSize:'12px',paddingTop:'10px',textAlign:'center',paddingBottom:'30x'}}>
                 <div style={{fontSize:'15px',color: '#3d4152',fontWeight: '800',float:'left'}}>Breakfast</div>
                 <div style={{paddingTop:'10px'}}>
                     <div style={{paddingBottom:'40px',paddingTop:'20px'}}>
                         <Row>
                             <Col span={12}>
                             <Col span={1}>
                         <div style={{display:'flex',flex:1,float:'left',fontSize:'15px'}}>
                         <img src="/img/vegIcon.png" style={{height:'10px',margin:'5px 5px 10px 0'}}/>
                          Pongal
                          </div>
                          </Col>
                          <Col span={1}>
                          <div style={{marginTop:'20px',fontSize:'12px'}}>₹35 </div>
                          </Col>
                          </Col>
                          <Col span={12}>
                          <div style={{width: '82px',minHeight: '24px',marginLeft: '12px',position: 'relative',float:'right'}}>
                         <div style={{position:'absolute',paddingBottom:'0'}}>
                             <div style={{height: '28px', width: '72px', border: '1px solid #d4d5d9', backgroundColor: '#fff', contain: 'content', overflow: 'hidden',position: 'relative'}}>
                                   <div style={{fontSize:'15px', fontWeight: '600', color: '#60b246', textAlign: 'center', lineHeight: '26px'}}>ADD</div>
                             </div>
                         </div>
                     </div>
                     </Col>
                     </Row>
                     </div>

                     <div style={{paddingBottom:'40px'}}>
                         <Row>
                             <Col span={12}>
                             <Col span={1}>
                         <div style={{display:'flex',flex:1,float:'left',fontSize:'15px'}}>
                         <img src="/img/vegIcon.png" style={{height:'10px',margin:'5px 5px 10px 0'}}/>
                          Roast
                          </div>
                          </Col>
                          <Col span={1}>
                          <div style={{marginTop:'20px',fontSize:'12px'}}>₹30 </div>
                          </Col>
                          </Col>
                          <Col span={12}>
                          <div style={{width: '82px',minHeight: '24px',marginLeft: '12px',position: 'relative',float:'right'}}>
                         <div style={{position:'absolute',paddingBottom:'0'}}>
                             <div style={{height: '28px', width: '72px', border: '1px solid #d4d5d9', backgroundColor: '#fff', contain: 'content', overflow: 'hidden',position: 'relative'}}>
                                   <div style={{fontSize:'15px', fontWeight: '600', color: '#60b246', textAlign: 'center', lineHeight: '26px'}}>ADD</div>
                             </div>
                         </div>
                     </div>
                     </Col>
                     </Row>
                     </div>

                     <div style={{paddingBottom:'40px'}}>
                         <Row>
                             <Col span={12}>
                             <Col span={1}>
                         <div style={{display:'flex',flexwrap:'nowrap',whiteSpace:'nowrap',float:'left',fontSize:'15px'}}>
                         <img src="/img/vegIcon.png" style={{height:'10px',margin:'5px 5px 10px 0'}}/>
                          puri
                          </div>
                          </Col>
                          <Col span={1}>
                          <div style={{marginTop:'20px',fontSize:'12px'}}>₹50 </div>
                          </Col>
                          </Col>
                          <Col span={12}>
                          <div style={{width: '82px',minHeight: '24px',marginLeft: '12px',position: 'relative',float:'right'}}>
                         <div style={{position:'absolute',paddingBottom:'0'}}>
                             <div style={{height: '28px', width: '72px', border: '1px solid #d4d5d9', backgroundColor: '#fff', contain: 'content', overflow: 'hidden',position: 'relative'}}>
                                   <div style={{fontSize:'15px', fontWeight: '600', color: '#60b246', textAlign: 'center', lineHeight: '26px'}}>ADD</div>
                             </div>
                         </div>
                     </div>
                     </Col>
                     </Row>
                     </div>
                     <div style={{paddingBottom:'40px'}}>
                         <Row>
                             <Col span={12}>
                             <Col span={1}>
                         <div style={{display:'flex',flexwrap:'nowrap',whiteSpace:'nowrap',float:'left',fontSize:'15px'}}>
                         <img src="/img/vegIcon.png" style={{height:'10px',margin:'5px 5px 10px 0'}}/>
                          Rava Roast
                          </div>
                          </Col>
                          <Col span={1}>
                          <div style={{marginTop:'20px',fontSize:'12px'}}>₹70 </div>
                          </Col>
                          </Col>
                          <Col span={12}>
                          <div style={{width: '82px',minHeight: '24px',marginLeft: '12px',position: 'relative',float:'right'}}>
                         <div style={{position:'absolute',paddingBottom:'0'}}>
                             <div style={{height: '28px', width: '72px', border: '1px solid #d4d5d9', backgroundColor: '#fff', contain: 'content', overflow: 'hidden',position: 'relative'}}>
                                   <div style={{fontSize:'15px', fontWeight: '600', color: '#60b246', textAlign: 'center', lineHeight: '26px'}}>ADD</div>
                             </div>
                         </div>
                     </div>
                     </Col>
                     </Row>

                     </div>
                 </div>
                 </div>
                 <footer>
                     <div style={{padding: '30px 16px 160px', alignItems: 'center', color: '#a9abb2',display: 'flex',backgroundColor: '#f7f8fd'}}>
                         <img  height="25" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_50/fssai_final_edss9i"></img>
                     <div style={{marginLeft:'12px',fontSize:'12px',marginTop:'4px'}}>License No:123456hju789</div>
                     </div>
                 </footer>
            </div>
            </div>
        )
    }
}

export default MidRestaurant
