import React, { Component } from 'react'
import {Col,Row,Icon,Divider, Button} from 'antd'
import Scrollspy from 'react-scrollspy'

export class MidRestaurant extends Component {
    state={
        categories:[
            {
                _id:'11',
                name:'aaa'
            }
        ],
        obj:[]
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
            <div style={{backgroundColor:'#fff'}}>
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
        )
    }
}

export default MidRestaurant
