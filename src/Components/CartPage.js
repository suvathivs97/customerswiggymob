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
    overflow: "hidden"
  };


export class CartPage extends Component {
    state = {
        openPanel: "1",
        value:'',
        viewCart:[],
        restaurant_name:'',
        viewaddress:false,
        address:[]
      };

      componentDidMount=async()=>{
        let customerId=localStorage.getItem('id')
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
                                            <Button style={{backgroundColor:'#60b246',marginTop:'30px',border:0,fontSize:'16px',fontWeight:'600',textAlign:'center',color:'#fff'}}>Deliver Here</Button>
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
                                            <div style={{color:'#93959f',fontSize:'13px'}}>12, sara complex, Saravanampatti, Coimbatore, Tamil Nadu 641035, India</div>
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
                            <Panel  header="Payment" key="2"style={customPanelStyle}>
                            <p>sdfsdf</p>
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
        )
    }
}

export default CartPage
