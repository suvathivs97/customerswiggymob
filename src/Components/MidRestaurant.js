import React, { Component } from 'react'
import {Col,Row,Icon,Divider, Button} from 'antd'
import Scrollspy from 'react-scrollspy'
import axios from 'axios'
import port from '../port'
export class MidRestaurant extends Component {
    state={
        categories:[],
        obj:[],
        fooddata:[]
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
        //  await this.setState({obj})

        //  document.getElementById('recom').style.color = "white";
        //  document.getElementById('recom').style.backgroundColor = "#e46d47";
        //  await this.setState({categories:this.props.FoodItem})
        let res=await axios.get(port+`/getFoodItems?restaurantId=${this.props.id}&customerId=5df9de26dc412609dcb686d3`)
        console.log(res,"response in mid")
        await this.setState({fooddata:res.data.items})
        let food=[]
        console.log(this.state.fooddata,"food1")

        for(let i=0;i<this.state.fooddata.length;i++){
            food.push(this.state.fooddata[i].category_name)
        }
        console.log(food,"food")
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
        console.log(outputArray,"outjhhg")
        this.state.categories.push("Recommended")
        for(let i=0;i<outputArray.length;i++){
            this.state.categories.push(outputArray[i])
        }
        console.log(this.state.categories,"categories")
        // await this.setState({categories:outputArray})
          
       }


       
    render() {
        return (
            <div style={{backgroundColor:'#fff'}}>
            <Row>
                <Col span={6} style={{padding:'40px 0px',position:'sticky',top:'50px'}}>
                    <div style={{display:'flex',float:'right'}}>
                     <div style={{height:'300px',paddingRight:'35px'}}>
                     <Scrollspy items={ this.state.categories} currentClassName="currentres" style={{marginLeft:'-40px'}}>
                     {/* <div><a href="#11"  style={{textDecoration:'none',fontSize:'15px',fontWeight:'400',paddingTop:'5px',color:'black'}}>Recommended</a></div> */}
                         {this.state.categories.map(p=>{return(
                             <div><a href={p} id={p=='Recommended' ? 'recom':''} style={{textDecoration:'none',fontSize:'15px',fontWeight:'400',paddingTop:'5px',color:'black'}} >{p}</a></div>
                         )})}
                         {/* <div><a href="#13" style={{textDecoration:'none',fontSize:'15px',fontWeight:'400',paddingTop:'5px',color:'black'}}>Quick bites</a></div> */}
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
                      {this.state.categories.map(p=>{return(
                         <div id={p} style={{padding:'20px 0px',borderBottom:'2px solid black'}}>
                         {p == 'Recommended'?
                          <div></div>:
                          <div>
                             <div style={{fontSize:'32px',fontWeight:'600'}}>{p}</div>
                             <div style={{color:'#686b78',fontSize:'13px',fontWeight:'500'}}>4 ITEM</div>
                          </div>
                          }
                        {this.state.fooddata.filter(q=>q.category_name==p).map(r=>{return(
                          <div>
                          <div style={{paddingTop:'20px'}}>
                               
                               <div style={{float:'left',fontSize:'15px',display:'flex',alignItems:'center'}}><img src="/img/vegIcon.png" style={{height:'15px',width:'15px'}} />&nbsp; {r.name}</div>
                               
                               <div style={{float:'right'}}>
                                   <button style={{backgroundColor:'#fff',borderWidth:'1px',height:'30px',width:'70px'}}>
                                                       <div style={{color:'#60b246',fontSize:'14px',textAlign:'center'}}>ADD</div> 
                                   </button>
                               </div>
                               <br />
                               {r.description?
                               <div style={{fontSize:'13px',color:'#7e808c',paddingLeft:'20px'}}>&nbsp;{r.description}</div>
                               :
                               <div />
                               }
                               <div style={{fontSize:'15px',color:'#535665',paddingLeft:'20px'}}>&nbsp;₹ {r.price}</div>
                         </div>
                         {p == 'Recommended'?
                           <div></div>:
                           <Divider />}  
                         </div>
                         )})}
                         </div>
                      )})}          
                    {/* <div id="12" style={{padding:'20px 0px',borderBottom:'2px solid black'}}>
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

                    </div> */}
                </Col>
                <Col span={7} style={{padding:'40px 40px',position:'sticky',top:'50px'}}>
                   <div style={{fontSize:'32px',fontWeight:'600'}}>Cart</div>
                   <div style={{fontSize:'14px',fontWeight:'300',color:'282c3f'}}>from Subway</div>
                   <div style={{fontSize:'13px',color:'#686b78',fontWeight:'500'}}>1 ITEM</div>
                   <Row>
                                <div  style={{paddingTop:'20px'}}>
                                    <Col span={3} style={{width:'30px',height:'40px'}}>
                                    <img src="/img/vegIcon.png" style={{height:'10px',width:'10px'}} />
                                    </Col>
                                    <Col span={14} style={{maxwidth:'130px',height:'40px',display:'flex',fontWeight:'400',fontSize:'14px'}}>
                                    Aloo Patty Sub ( 15 cm, 6 Inch )
                                    </Col>
                                    <Col span={6} >
                                        <div style={{borderStyle:'solid',borderWidth:'1px',borderColor:'#60b246',textAlign:'center'}}>&nbsp;-&nbsp;&nbsp;1&nbsp;&nbsp;+&nbsp;</div>
                                    </Col>
                                    {/* <div style={{borderStyle:'dashed',borderWidth:'1px',height:'20px'}}> */}
                                    
                                    
                               </div>
                    </Row>
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