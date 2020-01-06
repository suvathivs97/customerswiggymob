import React, { Component } from 'react'
import {Divider} from 'antd'
import axios from 'axios'
import port from '../port'

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
        // console.log(id,"customerid")
        if(id != undefined && id!= null)
        {
            const addtocart=await axios.post(port+'/addToCart',{customerId:id,itemId:p.item_id,restaurantId:p.restaurant_id,quantity:1})
            console.log(addtocart,"addtocart response")
            if(addtocart.data.success){
                await this.setState({addQuant:true})
                this.props.refreshcart()
            }
        }else{
            alert('Please Login')
        }
    }

    decreament=async(item)=>{
        console.log('inside decrement function')
        let sum=Number(item.price)-Number(item.price/item.quantity)
        console.log(sum,"sum")
        let quantity=Number(item.quantity)-1
        let customerId=localStorage.getItem('id')
        if(customerId != undefined && customerId != null){
            let res=await axios.post(port+'/updateCart',{customerId,itemId:item.item_id,quantity,price:sum})
            console.log(res,"response for updatecart")
        }
    }
    increament=async(item)=>{
       console.log('inside increment function')
       let sum=Number(item.price)+Number(item.price/item.quantity)
       console.log(sum,"sum")
       let quantity=Number(item.quantity)+1
       let customerId=localStorage.getItem('id')
       if(customerId != undefined && customerId != null){
           let res=await axios.post(port+'/updateCart',{customerId,itemId:item.item_id,quantity,price:sum})
           console.log(res,"response for updatecart")
       }
        
    }

    render() {
        return (
            <div>
                <div>
                          <div style={{paddingTop:'20px'}}>
                               
                               <div style={{float:'left',fontSize:'15px',display:'flex',alignItems:'center'}}><img src="/img/vegIcon.png" style={{height:'15px',width:'15px'}} />&nbsp; {this.props.item.name}</div>
                               <div style={{float:'right'}}>
                                   {this.state.addQuant == false ?
                                   <button style={{backgroundColor:'#fff',borderWidth:'1px',height:'30px',width:'70px',color:'#60b246',fontSize:'14px',textAlign:'center'}} onClick={e=>this.addtocart(this.props.item)}>
                                                       ADD
                                   </button>
                                   :
                                   <div style={{borderStyle:'solid',borderWidth:'1px',borderColor:'#60b246',textAlign:'center'}}>
                                       <text style={{margin:'0px 15px',cursor:'pointer'}} onClick={e=>this.decreament(this.props.item)}>-</text>
                                            {this.props.item.quantity == 0?this.state.quantity:this.props.item.quantity}
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
            </div>
        )
    }
}

export default Addtocart



