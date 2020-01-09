import React, { Component } from 'react'
import {Col,Row,Icon,Divider, Button, message} from 'antd'
import Scrollspy from 'react-scrollspy'
import axios from 'axios'
import port from '../port'
import Addtocart from './Addtocart';
import { relativeTimeThreshold } from 'moment';
import RestaurantCard from './RestaurantCard';
export class MidRestaurant extends Component {
    state={
        categories:[],
        obj:[],
        fooddata:[],
        addQuant:false,
        viewCart:[],
        cartlength:0,
        load:false
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
        let custid=localStorage.getItem('id')
        let res
        if(custid != undefined && custid != null){
            res=await axios.get(port+`/getFoodItems?restaurantId=${this.props.id}&customerId=${custid}`)
            await this.setState({fooddata:res.data.items})
        }else{
            res=await axios.get(port+`/getFoodItems?restaurantId=${this.props.id}`)
            await this.setState({fooddata:res.data.items})
        }
      
        let food=[]

        for(let i=0;i<this.state.fooddata.length;i++){
            food.push(this.state.fooddata[i].category_name)
        }
        let outputArray = []; 
        let count = 0; 
        let start = false; 
          
        for (let j = 0; j < food.length; j++) {  
            for (let k = 0; k < outputArray.length; k++) { 
                if ( food[j] == outputArray[k] ) { 
                    start = true; 
                } 
            } 
            count++; 
            if (count == 1 && start == false) { 
                outputArray.push(food[j]); 
            } 
            start = false; 
            count = 0; 
        }
        let categories=this.state.categories
        categories.push("Recommended")
        for(let i=0;i<outputArray.length;i++){
            categories.push(outputArray[i])
        }
        await this.setState({categories,obj})
        let customer_id=localStorage.getItem('id')
        if(customer_id != undefined && customer_id != null){
            let viewCart=await axios.get(port+`/viewCart?customerId=${customer_id}`)
            console.log(viewCart,"viewcart")
            await this.setState({viewCart:viewCart.data.cart,length:viewCart.data.cart.length,load:true})
            
        }
       }

       calculatetotal=()=>{
            // console.log('inside calculate total')
            let sum=0
                // let viewCart=await axios.get(port+`/viewCart?customerId=${customer_id}`)
                let cart=this.state.viewCart
                let price = cart.map(p=>p.price)
                let quantity = cart.map(p=>p.quantity)
                for (let i=0;i<cart.length;i++){
                    sum=Number(sum) + Number(price[i] * quantity[i])
                }
            //  console.log(sum,"sum")
             return sum
       }

       refreshcart=async()=>{
           let customer_id=localStorage.getItem('id')
            if(customer_id != undefined && customer_id != null){
                let viewCart=await axios.get(port+`/viewCart?customerId=${customer_id}`)
                let res=await axios.get(port+`/getFoodItems?restaurantId=${this.props.id}&customerId=${customer_id}`)
                await this.setState({viewCart:viewCart.data.cart,length:viewCart.data.cart.length,load:true,fooddata:res.data.items})
            }

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
                        await this.setState({viewCart:viewCart.data.cart,fooddata:res.data.items,length:viewCart.data.cart.length})
                    }else{
                        message.error(res.data.message)
                    }
                }else{
                    let removecart=await axios.post(port+'/removeCart',{customerId,itemId:item.item_id,restaurantId:item.restaurant_id})
                    if(removecart.data.success){
                        let viewCart=await axios.get(port+`/viewCart?customerId=${customerId}`)
                        let res=await axios.get(port+`/getFoodItems?restaurantId=${this.props.id}&customerId=${customerId}`)
                        await this.setState({viewCart:viewCart.data.cart,fooddata:res.data.items,length:viewCart.data.cart.length})
                    }
        
                }
            }
        }
    increament=async(item)=>{
    //    console.log('inside increment function',item)
       let quantity=Number(item.quantity)+1
       let customerId=localStorage.getItem('id')
       if(customerId != undefined && customerId != null){
           let res=await axios.post(port+'/updateCart',{customerId,itemId:item.item_id,quantity})
        //    console.log(res,"response for updatecart")
           if(res.data.success){
                let viewCart=await axios.get(port+`/viewCart?customerId=${customerId}`)
                let res=await axios.get(port+`/getFoodItems?restaurantId=${this.props.id}&customerId=${customerId}`)
                await this.setState({viewCart:viewCart.data.cart,fooddata:res.data.items,length:viewCart.data.cart.length})

           }else{
            message.error(res.data.message)
           }
       }
        
    }

    checkout=()=>{
        window.location.href='/CartPage'
    }



       
    render() {
        // console.log(this.state.categories,"this.state.categories")
        return (
             <div style={{backgroundColor:'#fff'}}>
            <Row>
                <Col span={6} style={{padding:'40px 0px',position:'sticky',top:'50px'}}>
                    <div style={{display:'flex',float:'right'}}>
                     <div style={{height:'300px',paddingRight:'35px'}}>
                     <Scrollspy items={ this.state.categories } currentClassName="currentres" style={{marginLeft:'-40px'}}>
                         {this.state.categories.map(p=>{return(
                             <div><a href={p} id={p=='Recommended' ? 'recom':''} style={{textDecoration:'none',fontSize:'15px',fontWeight:'400',paddingTop:'5px',color:'black'}} >{p}</a></div>
                         )})}
                     </Scrollspy>
                     </div>
                    </div>
                    <div style={{}}></div>
                </Col>
                <Col span={11} style={{padding:'40px 40px',borderLeft:'1px solid #D4D4D4'}}>
                    <div id="Recommended">
                        <div style={{fontSize:'32px',fontWeight:'600'}}>Recommended</div>
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
                                             <button style={{backgroundColor:'#fff',borderWidth:'1px',float:'right',height:'30px',width:'70px',color:'#60b246',fontSize:'14px',textAlign:'center'}} >
                                                 ADD
                                             </button>
                                           </Row>
                                     </div>
                                 </div>
                             </div>
                             )})}
                        </div>
                    </div>
                      {this.state.categories.map(p=>{return(
                         <div id={p} style={{padding:'20px 0px',borderBottom:'2px solid black'}}>
                         {p == 'Recommended'?
                          <div></div>:
                          <div>
                             <div style={{fontSize:'32px',fontWeight:'600'}}>{p}</div>
                             <div style={{color:'#686b78',fontSize:'13px',fontWeight:'500'}}>{this.state.categories.length} ITEM</div>
                          </div>
                          }
                        {this.state.fooddata.filter(q=>q.category_name==p).map(r=>{return(
                        <div>
                            <Addtocart p={p} item={r} refreshcart={this.refreshcart} increament={this.increament} decreament={this.decreament}/>
                        </div>
                         )})}
                         </div>
                         )})}   
                </Col>
                <Col span={7} style={{padding:'40px 40px',position:'sticky',top:'50px'}}>
                {this.state.length != 0?
                    <div>
                    {this.state.load?
                    <div>
                    <div style={{fontSize:'32px',fontWeight:'600'}}>Cart</div>
                    <div style={{fontSize:'14px',fontWeight:'300',color:'282c3f'}}>from Subway</div>
                    <div style={{fontSize:'13px',color:'#686b78',fontWeight:'500'}}>{this.state.length} ITEM</div>
                    {this.state.viewCart.map(p=>
                    {return(
                        <RestaurantCard item={p} increament={this.increament} decreament={this.decreament} />
                    )})}
                    <Row style={{paddingTop:'20px'}}>
                        <div style={{color:'#3d4152',fontSize:'17px',fontWeight:'600',float:'left'}}>Subtotal</div>
                        <div style={{float:'right',fontSize:'15px'}}>₹ {this.calculatetotal()}</div>
                        {/* <div style={{float:'right',textDecoration:'line-through',color:'#bebfc5',marginRight:'10px',fontSize:'15px'}}>₹ 350</div> */}
                    </Row>
                    <div style={{color:'#7e808c',fontSize:'13px',fontWeight:'300'}}>Extra charges may apply</div>
                    <div><Button style={{backgroundColor:'#60b246',border:'none',fontSize:'16px',fontWeight:'600',width:'100%',textAlign:'center',color:'#fff',marginTop:'20px'}} onClick={this.checkout}>Checkout </Button></div>
                    </div>
                    :
                    <div></div>
                    }
                    </div>
                    :
                    <div>
                    <div style={{fontSize:'32px',fontWeight:'600'}}>Cart Empty</div>
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" alt="" width="250px" height="200px" style={{opacity:0.5,marginTop:'20px'}}></img>
                    </div>
                 }
                </Col>
            </Row>
         </div>
     )
 }
}

export default MidRestaurant