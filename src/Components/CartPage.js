import React, { Component } from 'react'
import {Col,Row,Card,Layout,Collapse,Icon,Radio,Button,Divider,message} from 'antd'
import Head from './Head'
import Bottom from './Bottom'
import axios from 'axios'
import port from '../port'
import RestaurantCard from './RestaurantCard';
import Addaddress from './Addaddress';
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
    overflow: "hidden",
    deliverAddress:'',
    deliverType:''
  };


export class CartPage extends Component {
    state = {
        openPanel: "1",
        value:'',
        viewCart:[],
        restaurant_name:'',
        viewaddress:false,
        address:[],
        selectedLocation:''
      };

      componentDidMount=async()=>{
        let customerId=localStorage.getItem('id')
        let address=localStorage.getItem('address')
        if(address != null && address != undefined ){
            await this.setState({selectedLocation:address})
        }
        if(customerId != undefined && customerId != null){
            let viewCart=await axios.get(port+`/viewCart?customerId=${customerId}`)
            console.log(viewCart,"viewcart")
            if(viewCart.data.success){
                let cart=viewCart.data.cart
                await this.setState({viewCart:cart})
                if(cart[0]){
                   await this.setState({restaurant_name:cart[0].restaurant_name,restaurant_address:cart[0].restaurant_address,restaurant_image:cart[0].restaurant_image})
                }
            }
            let viewAddress=await axios.post(port+`/viewAddress?customerId=${customerId}`)
            console.log(viewAddress,"viewaddress")
            if(viewAddress.data.address){
                await this.setState({address:viewAddress.data.address})
            }
        }
      }

      changepanel=()=>{
          this.setState({openPanel:'3'})
      }
      onChange=()=>{

      }
      back=()=>{
          window.location.href="/"
      }
      decreament=async(item)=>{
        console.log('inside decrement function',item)
        // let sum=Number(item.price)-Number(item.price/item.quantity)
        // console.log(sum,"sum")
        let quantity=Number(item.quantity)-1
            let customerId=localStorage.getItem('id')
            if(customerId != undefined && customerId != null){
                if(quantity >0){
                    let res=await axios.post(port+'/updateCart',{customerId,itemId:item.item_id,quantity})
                    console.log(res,"response for updatecart")
                    if(res.data.success){
                        let viewCart=await axios.get(port+`/viewCart?customerId=${customerId}`)
                        let res=await axios.get(port+`/getFoodItems?restaurantId=${this.props.id}&customerId=${customerId}`)
                        await this.setState({viewCart:viewCart.data.cart,fooddata:res.data.items})
                    }else{
                        message.error(res.data.message)
                    }
                }else{
                    let removecart=await axios.post(port+'/removeCart',{customerId,itemId:item.item_id,restaurantId:item.restaurant_id})
                    if(removecart.data.success){
                        let viewCart=await axios.get(port+`/viewCart?customerId=${customerId}`)
                        await this.setState({viewCart:viewCart.data.cart})
                    }
        
                }
            }
        }
        
    increament=async(item)=>{
       console.log('inside increment function',item)
       let quantity=Number(item.quantity)+1
       let customerId=localStorage.getItem('id')
       if(customerId != undefined && customerId != null){
           let res=await axios.post(port+'/updateCart',{customerId,itemId:item.item_id,quantity})
           console.log(res,"response for updatecart")
           if(res.data.success){
                let viewCart=await axios.get(port+`/viewCart?customerId=${customerId}`)
                await this.setState({viewCart:viewCart.data.cart})
           }else{
            message.error(res.data.message)
           }
       }
        
    }

    addaddress=()=>{
        console.log('addaddress')
        this.setState({viewaddress:true})
    }

    viewadd=()=>{
        this.setState({viewaddress:false})
    }

    deliver=async(p)=>{
        console.log(p,"deliver function")
        await this.setState({deliverAddress:p.address,deliverType:p.type,openPanel:'2'})

    }
    changefirstpanel=async()=>{
        await this.setState({openPanel:'1'})
    }

    render() {
        return (
            <div >
                <div className="webview">
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
                            <Panel
                             showArrow={false}
                             header={
                                    <div>Delivery Address
                                      <text style={{color:'#fc8019',float:'right',padding:'5px',fontSize:'14px'}} onClick={this.changefirstpanel}>CHANGE</text>
                                      {this.state.openPanel != '1'?
                                        <div>
                                            <div style={{fontSize:'14px',color:'rgb(40, 44, 63)',marginTop:'10px',fontWeight:'500px'}}>{this.state.deliverType}</div>
                                            <div style={{fontSize:'14px',color:'#93959f'}}>{this.state.deliverAddress}</div>
                                        </div>:
                                        <div></div>}
                                    </div>} key="1" style={customPanelStyle}>
                               
                                <div class="row">
                                {this.state.address.map(p=>{return(
                                <div class="col-6 col-sm-6 col-lg-6">
                                    <Card style={{margin:'10px',height:'230px'}}> 
                                        <Col span={2} style={{width:'20px',height:'180px'}}>
                                          <Icon type="home" />
                                        </Col>
                                        <Col span={25}>
                                            <div style={{fontSize:'17px',fontWeight:'500',color:'#282c3f',display:'flex',alignItems:'center'}}>
                                             {p.type}
                                            </div>
                                            <div style={{color:'#93959f',fontSize:'13px'}}>{p.address}</div>
                                            {/* <div style={{color:'#282c3f',marginTop:'30px',fontSize:'14px'}}>29 MINS</div> */}
                                            <Button style={{backgroundColor:'#60b246',marginTop:'30px',border:0,fontSize:'16px',fontWeight:'600',textAlign:'center',color:'#fff'}} onClick={e=>this.deliver(p)}>Deliver Here</Button>
                                        </Col>
                                        
                                    </Card>
                                </div>
                                )})}
                                {/* <div class="col-6 col-sm-6 col-lg-6">
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
                                </div> */}
                                <div class="col-6 col-sm-6 col-lg-6">
                                  <Card style={{margin:'10px'}} onClick={this.addaddress}> 
                                      <Col span={2} style={{width:'20px',height:'180px'}}>
                                          <Icon type="home" />
                                        </Col>
                                        <Col span={25}>
                                            <div style={{fontSize:'17px',fontWeight:'500',color:'#282c3f',display:'flex',alignItems:'center'}}>
                                             Add New Address
                                            </div>
                                            <div style={{color:'#93959f',fontSize:'13px'}}>{this.state.selectedLocation}</div>
                                            <Button style={{borderColor:'#60b246',marginTop:'5px',fontSize:'12px',fontWeight:'600',textAlign:'center',color:'#60b246',marginTop:'30px'}}>ADD NEW</Button>
                                        </Col>
                                   </Card>
                                </div>
                                {this.state.viewaddress?
                                <div>
                                    <Addaddress viewadd={this.viewadd}/>
                                </div>:
                                <div></div>
                                }
                                </div>
                                {/* <Button style={{ fontSize: 12, color: "red", fontWeight: 600 }} onClick={this.addaddress}>
                                    <img src="/img/plus.png" />
                                      ADD NEW ADDRESS
                                </Button> */}
                            </Panel>
                            <Panel showArrow={false} header="Payment" key="2"style={customPanelStyle}>
                            <p></p>
                            </Panel>
                        </Collapse>
                    </Col>

                    {/* CART */}
                    <Col span={8} style={{padding:'0px 30px',position:'sticky',top:'50px'}}>
                        <Card style={{backgrounColor:'#f7f7f7'}}>
                            <Row>
                                <Col span={6}>
                                  <img src={port+`/image/restaurants/${this.state.restaurant_image}`} width="50px" height="50px"/>
                                </Col>
                                <Col span={17}>
                                    <Row span={2} style={{fontSize:'17px',color:'#282c3f'}}>
                                        {this.state.restaurant_name}
                                    </Row>
                                    <Row span={2} style={{fontSize:'13px',color:'#686b78'}}>
                                        {this.state.restaurant_address}
                                    </Row>
                                </Col>
                            </Row>
                            <div style={{overflowY:'auto',maxHeight:'350px'}}>
                                {/* <Row>
                                    <div  style={{paddingTop:'20px'}}>
                                        <Col span={3} style={{width:'30px',height:'40px'}}>
                                        <img src="/img/vegIcon.png" style={{height:'10px',width:'10px'}} />
                                        </Col>
                                        <Col span={10} style={{maxwidth:'130px',height:'40px',display:'flex',fontWeight:'400',fontSize:'14px'}}>
                                        Aloo Patty Sub ( 15 cm, 6 Inch )
                                        </Col>
                                        <Col span={6} >
                                                <div style={{borderStyle:'solid',borderWidth:'1px',borderColor:'#60b246',textAlign:'center'}}>
                                                    <text style={{margin:'0px 10px',cursor:'pointer'}} onClick={e=>this.decreament()}>-</text>1
                                                    <text style={{margin:'0px 10px',cursor:'pointer'}} onClick={e=>this.increament()}>+</text>
                                                </div>
                                        </Col> 
                                        <div style={{float:'right'}}>
                                                <Col style={{fontSize:'13px',color:'rgb(104, 107, 120)'}}>
                                                ₹ 55
                                                </Col>  
                                        </div>                                     
                                    </div>
                                </Row> */}
                                {this.state.viewCart.map(p=>
                                 {return(
                                  <RestaurantCard item={p} increament={this.increament} decreament={this.decreament}/>
                                )})}
                             <Row>
                                <div style={{borderStyle:'dashed',
                                            borderWidth:'1px',textAlign:'center',
                                            marginTop:'20px',height:'50px',display:'flex',
                                            alignItems:'center'}}>
                                    <img src="/img/percentage.png" style={{marginLeft:'10px'}}></img>
                                    <text style={{marginLeft:'10px'}}>Apply Coupon</text>
                                </div>
                                <div style={{fontSize:'13px',fontWeight:'500',color:'#282c3f',margin:'10px 0px'}}>Bill Details</div>
                                <Row>
                                    <Col style={{float:'left',color:'#686b78'}}>Item Total</Col>
                                    <Col style={{float:'right',color:'#686b78',marginBottom:'10px'}}>₹ 69.52</Col>
                                </Row>
                                <Row>
                                    <Col style={{float:'left',color:'#686b78'}}>Restaurant Charges</Col>
                                    <Col style={{float:'right',color:'#686b78',marginBottom:'10px'}}>₹ 17.48</Col>
                                </Row>
                                <hr style={{color:'#686b78',height:'1px'}} />
                                <Row>
                                    <Col style={{float:'left',color:'#686b78'}}>Delivery Fee</Col>
                                    <Col style={{float:'right',color:'#686b78',marginBottom:'10px'}}>₹ 30</Col>
                                </Row>
                                    <Divider style={{height:'2px',fontWeight:'300',color:'#282c3f'}} />
                            </Row>
                            </div>
                                <Row style={{position:'sticky',top:'0px'}}>
                                    <Col style={{float:'left',color:'#282c3f'}}>To Pay</Col>
                                    <Col style={{float:'right',color:'#282c3f',marginBottom:'10px'}}>₹ 1117</Col>
                                </Row>
                        </Card>
                    </Col>
                </div>
                </Content>
            </div>
            <div className="mobview">
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
                                {this.state.restaurant_name}
                                    <div style={{fontSize:"12px",fontWeight:'normal'}}>
                                    {this.state.restaurant_address}
                                    </div>
                                </div> 
                                
                                    
                        </div>
                        <div style={{padding:'0 16px', paddingBottom:'20px',position:'relative',alignItems:'center'}}>
                        {this.state.viewCart.map(p=>
                                 {return(
                                  <RestaurantCard item={p} increament={this.increament} decreament={this.decreament}/>
                                )})}
                        </div>
                         
                         {/* <div style={{position:'relative',background:'#feedef',padding:'20px 16px'}}>
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
                        </div>  */}
                        <div style={{background:'#fff',width:'100%',height:'50px'}}>
                        <div style={{paddingLeft:'16px',paddingRight:'16px',}}>
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
                                             <div style={{position: 'absolute', top: '7px',right: '7px', fontSize: '18px', height: '26px',width: '24px',  textAlign: 'center', color: '#fff', backgroundColor: '#60b246', transform: 'scaleY(.9) translateY(-1px)'}}>+</div>
                                                 <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_76,c_fill/n3z3i3du9n2qasm3ndvv"/>
                                                    <div style={{marginTop: '13px',fontSize:'12px',wordBreak: 'break-word', wordWrap: 'break-word'}}>
                                                     </div>
                                                     <div style={{ color:'#7e808c',fontSize:'10px',marginLeft:'20px'}}>₹35</div>
                                        </div>
                                     </div>
                                     <div style={{height:'auto',width:'116px',marginRight:'16px'}}>
                                         <div style={{position: 'relative', }}>
                                             <div style={{position: 'absolute', top: '7px',right: '7px',  fontSize: '18px', height: '26px',width: '24px',  textAlign: 'center', color: '#fff', backgroundColor: '#60b246', transform: 'scaleY(.9) translateY(-1px)'}}>+</div>
                                             <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_76,c_fill/op8sfqyzakqvtkwis0sv"></img>
                                                    <div style={{marginTop: '13px',fontSize:'12px',wordBreak: 'break-word', wordWrap: 'break-word'}}>
                                                        <img src="\img\vegIcon.png" style={{height:'12px',marginRight:'8px'}}/>Ginger Tea
                                                     </div>
                                                     <div style={{ color:'#7e808c',fontSize:'10px',marginLeft:'20px'}}>₹10</div>
                                        </div>
                                     </div>
                                     <div style={{height:'auto',width:'116px',marginRight:'16px'}}>
                                         <div style={{position: 'relative', }}>
                                             <div style={{position: 'absolute', top: '7px',right: '7px',fontSize: '18px', height: '26px',width: '24px',  textAlign: 'center', color: '#fff', backgroundColor: '#60b246', transform: 'scaleY(.9) translateY(-1px)'}}>+</div>
                                             <img  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_76,c_fill/cqgsppjnoggcrlklq5jo"/>
                                                    <div style={{marginTop: '13px',fontSize:'12px',wordBreak: 'break-word', wordWrap: 'break-word'}}>
                                                        <img src="\img\vegIcon.png" style={{height:'12px',marginRight:'8px'}}/>Chocolate Roll
                                                     </div>
                                                     <div style={{ color:'#7e808c',fontSize:'10px',marginLeft:'20px'}}>₹15</div>
                                        </div>
                                     </div>
                                     <div style={{height:'auto',width:'116px',marginRight:'16px'}}>
                                     <div style={{position: 'relative', }}>
                                             <div style={{position: 'absolute', top: '7px',right: '7px', fontSize: '18px', height: '26px',width: '24px',  textAlign: 'center', color: '#fff', backgroundColor: '#60b246', transform: 'scaleY(.9) translateY(-1px)'}}>+</div>
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
                     <div style={{marginTop:'20px',background:'#fff',width:'100%',height:'100%',padding:'20px 16px',marginBottom:'30px'}}>
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
                     
                     <div style={{paddingBottom:'60px',textAlign: 'center', color: '#a9abb2',display: 'flex',}}>
                     <a style={{fontSize: '12px',textAlign:'center',marginLeft:'100px',color: '#5d8ed5',fontWeight:'bold'}}>CLEAR CART</a>

                     </div>
                     
                         <div style={{bottom:'0',left:0,position:'fixed',width:'100%',}}>
                     <div style={{position: 'realative',transform: 'translateZ(0)',}}>
                                        <button style={{lineHeight:'42px',background: '0 0', border: 'none',width: '100%', textDecoration: 'none',cursor: 'pointer' ,display: 'inline-block', textAlign: 'center', backgroundColor: '#fc8019',  color: '#fff',fontWeight: '600',fontSize:'14px'}}
                                        onClick={this.Onsendotp}>
                                            CONTINUE
                                        </button>
                                    </div>
                     </div>
                     </div>
            </div>
            </div>
            </div>
        )
    }
}

export default CartPage
