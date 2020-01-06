import React, { Component } from 'react'
import Head from './Head'
import Bottom from './Bottom'
import {Layout,Col,Row,Icon} from 'antd'
import MidRestaurant from './MidRestaurant'
import axios from 'axios'
import port from '../port'
const { Header,Footer,Content } = Layout;

export class SingleRestaurant extends Component {
    constructor({ match }) {
        super();
        this.match = match;
        this.state = {
            address:'',
            city:'',
            FoodItem:[],
            restaurant:'',
            image:''
        };
      }

      componentDidMount=async()=>{
        //   console.log(this.match.params,"this.match.params")
         let id=localStorage.getItem('id')
         if(id != undefined && id != null){
            let res=await axios.get(port+`/getFoodItems?restaurantId=${this.match.params.id}&customerId=${id}`)
            //   console.log(res,'res for get one res')
              if(res.data.success){
                  await this.setState({address:this.match.params.address,city:this.match.params.city,FoodItem:res.data.items,restaurant:this.match.params.restaurant,image:this.match.params.image})
              }
              else{
                  console.log('getFoodItems error')
              }
         }else{
             alert('Please Signin')
         }
       
      }
    render() {
        return (
            <div>
            <Layout>
              <Header>
                 <Head />
              </Header>
              <Content style={{marginTop:'20px'}}>
                 <div style={{color:'#93959f',fontSize:'12px',paddingLeft:'100px'}}>Home / {this.state.city}</div>
                 <div style={{backgroundColor:'black',flex:'1'}}>
                    <div style={{padding:'50px 70px'}}>
                        <Row>
                            <Col span={6}>
                               <img height="150" width="240" src={port+`/image/restaurants/${this.state.image}`} alt="" />
                            </Col>
                            <Col span={10} style={{color:'#fff'}}>
                               <div style={{textOverflow:'ellipsis',fontSize:'32px',fontWeight:'300'}}>{this.state.restaurant}</div>
                               <div style={{paddingTop:'4px',fontSize:'15px',opacity:'0.7'}}>North Indian</div>
                               <div style={{paddingTop:'4px',fontSize:'15px',opacity:'0.7'}}>{this.state.address}</div>
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
                 <MidRestaurant id={this.match.params.id}/>
              </Content>
              <Footer>
                  <Bottom />
              </Footer>
            </Layout>
            </div>
        )
    }
}

export default SingleRestaurant
