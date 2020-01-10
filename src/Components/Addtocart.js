import React, { Component } from 'react'
import {Divider,message,Row,Col} from 'antd'
import axios from 'axios'
import port from '../port'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
export class Addtocart extends Component {
    state={
        addQuant:false,
        quantity:1
    }

    componentDidMount=async()=>{
        let customer_id=localStorage.getItem('id')
        if(customer_id != undefined && customer_id != null){
            let viewCart=await axios.get(port+`/viewCart?customerId=${customer_id}`)
            let id = viewCart.data.cart.map(p=>p.item_id)
            for (let i=0;i<viewCart.data.cart.length;i++){
                if(this.props.item.item_id == id[i]){
                    // console.log('true')
                    await this.setState({addQuant:true})
                    // console.log('true',this.state.addQuant,this.props.item.item_id,id[i])
                }
            }
           
        }
    }

    addtocart=async(p)=>{
        console.log('addtocart',p)
        let id=localStorage.getItem('id')
        let check=0
        // console.log(id,"customerid")
        if(id != undefined && id!= null)
        {
            let viewCart=await axios.get(port+`/viewCart?customerId=${id}`)
            let cart=viewCart.data.cart
            let restaurant=cart.map(p=>p.restaurant_id)
            for(let i=0;i<restaurant.length;i++){
                    if(p.restaurant_id == restaurant[i]){
                        check=0
                    }else{
                        check=i+1
                    }
            }
            console.log(check,'check')
            if(check == 0){
                console.log('addtocart')
                const addtocart=await axios.post(port+'/addToCart',{customerId:id,itemId:p.item_id,restaurantId:p.restaurant_id,quantity:1})
                console.log(addtocart,"addtocart response")
                if(addtocart.data.success){
                    await this.setState({addQuant:true})
                    this.props.refreshcart()
                }else{
                    message.error(addtocart.data.message)
                }
            }else{
                
                console.log('deletecart')
                confirmAlert({
                    title: 'Item already in cart',
                    message: 'Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?',
                    buttons: [
                      {
                        label: 'Yes',
                        onClick: async() => 
                        {
                            const removecart=await axios.post(port+'/clearCart',{customerId:id})
                            console.log(removecart,"removecart")
                            if(removecart.data.success){
                                const addtocart=await axios.post(port+'/addToCart',{customerId:id,itemId:p.item_id,restaurantId:p.restaurant_id,quantity:1})
                                console.log(addtocart,"addtocart response")
                                if(addtocart.data.success){
                                    await this.setState({addQuant:true})
                                    this.props.refreshcart()
                                }else{
                                    message.error(addtocart.data.message)
                                }
                            }
                        }
                      },
                      {
                        label: 'No',
                        onClick: () => console.log('said no')
                      }
                    ]
                  });
                
            }

        }else{
            alert('Please Login')
        }
    }

    decreament=async(item)=>{
        this.props.decreament(item)
    }
    increament=async(item)=>{
       this.props.increament(item)
    }

    

    render() {
        return (
            <div>
                <div className="webview">
                          <div style={{paddingTop:'20px'}}>
                               <div style={{float:'left',fontSize:'15px',display:'flex',alignItems:'center'}}><img src="/img/vegIcon.png" style={{height:'15px',width:'15px'}} />&nbsp; {this.props.item.name}</div>
                               <div style={{float:'right'}}>
                                   {this.state.addQuant == false || this.props.item.quantity == 0 ?
                                   <button style={{backgroundColor:'#fff',borderWidth:'1px',height:'30px',width:'70px',color:'#60b246',fontSize:'14px',textAlign:'center'}} onClick={e=>this.addtocart(this.props.item)}>
                                                       ADD
                                   </button>
                                   :
                                   <div style={{borderStyle:'solid',borderWidth:'1px',borderColor:'#60b246',textAlign:'center'}}>
                                       <text style={{margin:'0px 15px',cursor:'pointer'}} onClick={e=>this.decreament(this.props.item)}>-</text>
                                            {/* {this.props.item.quantity == 0 ?this.state.quantity:this.props.item.quantity} */}
                                            {this.props.item.quantity}
                                       <text style={{margin:'0px 15px',cursor:'pointer'}} onClick={e=>this.increament(this.props.item)}>+</text></div>
                                   }
                               </div>
                               <br />
                               {this.props.item.description?
                               <div style={{fontSize:'13px',color:'#7e808c',paddingLeft:'20px'}}>&nbsp;{this.props.item.description}</div>
                               :
                               <div />
                               }
                               <div style={{fontSize:'15px',color:'#535665',paddingLeft:'20px'}}>&nbsp;₹ {this.props.item.price}</div>
                         </div>
                             {this.props.p == 'Recommended'?
                              <div></div>:
                             <Divider />}  
                </div>
                <div className="mobview">
                <div style={{paddingTop:'10px'}}>
                     <div style={{paddingTop:'20px'}}>
                         <Row>
                             <Col span={12}>
                             <Col span={1}>
                         <div style={{display:'flex',flex:1,float:'left',fontSize:'15px',whiteSpace:'nowrap'}}>
                         <img src="/img/vegIcon.png" style={{height:'10px',margin:'5px 5px 10px 0'}}/>
                         {this.props.item.name}
                          </div>
                          </Col>
                          <Col span={1}>
                          <div style={{marginTop:'20px',fontSize:'12px'}}>₹35 </div>
                          </Col>
                          </Col>
                          <Col span={12}>
                          {this.state.addQuant == false || this.props.item.quantity == 0 ?
                          <a style={{textDecoration:'none'}}  onClick={e=>this.addtocart(this.props.item)}>
                          <div style={{width: '82px',minHeight: '24px',marginLeft: '12px',position: 'relative',float:'right'}}>
                            <div style={{position:'absolute',paddingBottom:'0'}}>
                                <div style={{height: '28px', width: '72px', border: '1px solid #d4d5d9', backgroundColor: '#fff', contain: 'content', overflow: 'hidden',position: 'relative'}}>
                                    <div style={{fontSize:'15px', fontWeight: '600', color: '#60b246', textAlign: 'center', lineHeight: '26px'}}>ADD</div>
                                </div>
                            </div>
                           </div>
                           </a>
                            :
                            <div style={{width: '82px',height: '26px',marginLeft:'50px',borderStyle:'solid',borderWidth:'1px',borderColor:'#60b246',textAlign:'center'}}>
                                <text style={{margin:"0 10px",cursor:'pointer'}} onClick={e=>this.decreament(this.props.item)}>-</text>
                                    {/* {this.props.item.quantity == 0 ?this.state.quantity:this.props.item.quantity} */}
                                    {this.props.item.quantity}
                                <text style={{margin:"0 10px",cursor:'pointer'}} onClick={e=>this.increament(this.props.item)}>+</text>
                            </div>
                     }
                     </Col>
                     </Row>
                     
                     </div>

                 </div>
                </div>
            </div>
        )
    }
}

export default Addtocart



