import React, { Component } from 'react'
import {Row,Col,Icon,Divider} from 'antd'
import Scrollspy from 'react-scrollspy'
import AllRestaurants from './AllRestaurants'
import axios from 'axios'
import port from '../port'
import { Link } from "react-router-dom";

export class MidContent extends Component {
    state={
        obj:[],tempids:[11,12,13,14]
    }

     componentDidMount=async()=>{
    //    let obj=[]
    //    obj=[
    //         {
    //            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/en5tssfnk3ag3rzn65kd",
    //            name:'Shree Akssyam',
    //            foodtype:'South Indian'
    //         },
    //         {
    //            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/n98yqjy0v5b1bttgvvul",
    //            name:'Fasos',
    //            foodtype:'Fast Food,North Indian'   
    //         },
    //         {
    //            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/en5tssfnk3ag3rzn65kd",
    //            name:'Sharma Punjab Restaurant',
    //            foodtype:'North Indian'   
    //         },
    //         {
    //            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nqvw6lxqlus3lmdbefn0",
    //            name:'Sharma Punjab Restaurant',
    //            foodtype:'North Indian'   
    //         },
    //         {
    //             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/n98yqjy0v5b1bttgvvul",
    //             name:'Fasos',
    //             foodtype:'Fast Food,North Indian'   
    //          },
    //          {
    //             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/en5tssfnk3ag3rzn65kd",
    //             name:'Sharma Punjab Restaurant',
    //             foodtype:'North Indian'   
    //          },
    //          {
    //             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nqvw6lxqlus3lmdbefn0",
    //             name:'Sharma Punjab Restaurant',
    //             foodtype:'North Indian'   
    //          }
    //     ]
            // await this.setState({obj})

        const res=await axios.get(port+'/customerGetRestaurants')
        // console.log(res,"response")
        if(res.data.success){
            await this.setState({obj:res.data.restaurants})
        }
        document.getElementById('11').style.color = "white";
        document.getElementById('11').style.backgroundColor = "#e46d47";
      }

      changecolor=(data)=>{
        //   console.log('inside changecolor function',data)
        //   for(let i=0;i<this.state.tempids.length;i++){
        //       if(this.state.tempids[i] == data){
        //         // console.log(this.state.tempids[i],"this.state.tempids[i]")
        //         document.getElementById(this.state.tempids[i]).style.color = "white";
        //         document.getElementById(this.state.tempids[i]).style.backgroundColor = "#e46d47";
        //       }else{
        //         document.getElementById(this.state.tempids[i]).style.color = "black";
        //         document.getElementById(this.state.tempids[i]).style.backgroundColor = "";
        //       }
        //   }
      }
    render() {
        return (
            // <Row>
            <div>
            <div style={{marginTop:'30px'}}>
                <div style={{padding:'0 20px'}}>
                    <div style={{position:'relative',maxWidth:'1200px',minWidth:'1200px',margin:'0 auto'}}> 
                        <div style={{display:'flex'}}>
                            <div style={{width:'254px',position:'relative'}}>
                              <div style={{height:'440px',boxShadow:'0 2px 4px 0 rgba(48,56,97,.2)',position:'sticky',top:'100px'}}> 
                                <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
                                    <div style={{height:'340px',overflow:'hidden',position:'relative'}}>
                                        <div style={{position:'relative',overflow:'hidden',height:'100%',width:'100%'}}>
                                        <Scrollspy items={ ['filter_11', 'filter_12', 'filter_13','filter_14'] } currentClassName="iscurrent" style={{marginLeft:'-40px'}}>
                                            <div>
                                                {/* <a href="#filter_11" onClick={e=>this.changecolor(11)}> */}
                                                <a href="#filter_11" id="11" style={{textDecoration:'none'}}>
                                                    <div style={{backgroundColor:'',color:'black'}} >
                                                    {/* <div style={id="#filter_11"?{backgroundColor:'#e46d47'}:{backgroundColor:'#e46d47'}}> */}
                                                    <div style={{display:'flex',alignItems:'center',height:'100%',justifyContent:'center',height:'85px',display:'flex',flexDirection:'column',padding:'0 20px'}}>
                                                        Popular Brands
                                                    </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#filter_12" style={{textDecoration:'none'}}>
                                                    <div style={{backgroundColor:'',color:'black'}} >
                                                    <div style={{display:'flex',alignItems:'center',height:'100%',justifyContent:'center',height:'85px',display:'flex',flexDirection:'column',padding:'0 20px'}}>
                                                        Express Delivery
                                                    </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#filter_13" style={{textDecoration:'none'}}>
                                                    <div style={{backgroundColor:'',color:'black'}} >
                                                    <div style={{display:'flex',alignItems:'center',height:'100%',justifyContent:'center',height:'85px',display:'flex',flexDirection:'column',padding:'0 20px'}}>
                                                        Only on Swiggy
                                                    </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#filter_14" style={{textDecoration:'none'}}>
                                                    <div style={{backgroundColor:'',color:'black'}}>
                                                    <div style={{display:'flex',alignItems:'center',height:'100%',justifyContent:'center',height:'85px',display:'flex',flexDirection:'column',padding:'0 20px'}}>
                                                        Vegetarian Options
                                                    </div>
                                                    </div>
                                                </a>
                                            </div>
                                            </Scrollspy>
                                        </div>
                                    </div>
                                    <a href="#filter_15" style={{textDecoration:'none'}}>
                                        <div style={{backgroundColor:'',color:'black'}}>
                                            <div style={{display:'flex',alignItems:'center',height:'100%',justifyContent:'center',height:'85px',display:'flex',flexDirection:'column',padding:'0 20px'}}>
                                                 SEE ALL
                                            </div>
                                        </div>
                                    </a>
                                </div>
                              </div>
                            </div>
                            <div style={{paddingLeft:'60px',flex:'1',contain:'layout'}}>
                            <div id="filter_11">
                            <div style={{fontSize:'28px',fontWeight:'600',marginBottom:'10px'}}>Popular Brands</div>
                            <div class="row" style={{marginTop:'20px'}}>
                                {this.state.obj.map((p,i)=>{
                                 if(i<3){
                                    return(
                                <div class="col-6 col-sm-4 col-lg-4" style={{paddingBottom:'30px'}}>
                                  <Link to={"/SingleRestaurant/" + p.restaurant_id + '/' + p.address + '/' + p.city + '/' + p.name + '/' + p.image} style={{textDecoration:'none'}}>
                                   <div class="card" style={{width: '250px'}}>
                                        <img class="card-img-top" src={port+`/image/restaurants/${p.image}`} height="150px" width="150px" alt=""/>
                                        <div class="card-body">
                                            <div class="card-title" style={{fontSize:'16px',fontWeight:'500',wordBreak:'break-word'}}>{p.name}</div>
                                            <div class="card-text" style={{color:'#686b78',fontSize:'13px',marginTop:'-10px'}}>{p.foodtype}</div>
                                                <div style={{marginTop:'10px',justifyContent:'space-between',color:'#535665',fontSize:'12px',display:'flex',alignContent:'center',height:'20px'}}>
                                                      <div>
                                                       <button disabled style={{backgroundColor:'#48c479',border:'none'}}>
                                                         <div style={{display:'flex',alignItems:'center'}}><Icon type="star" theme="filled"/>4.3</div> 
                                                       </button>
                                                       </div>
                                                    {/* <div >|</div> */}
                                                    <div >37 mins</div>
                                                    {/* <div >|</div> */}
                                                    <div >₹ 200 for Two</div>
                                                </div>
                                                <hr style={{height:'1px'}} />
                                                <div style={{color:'#8a584b',fontSize:'12px',justifyContent:'space-between',display:'flex'}}>
                                                 <img src="/percentage.png" alt=""></img>60 % off | Use coupon Welcome60
                                                </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                )} })}
                                </div>
                                <hr style={{height:'2px',color:'#bebfc5',borderStyle:'dashed'}} />
                                </div>
                         <div id="filter_12">
                           <div style={{fontSize:'28px',fontWeight:'600',marginBottom:'10px'}}>Express Delivery</div>
                            <div class="row" >
                                {this.state.obj.map((p,i)=>{
                              if(i<3){
                               return(
                                <div class="col-6 col-sm-4 col-lg-4" style={{paddingBottom:'30px'}}>
                                   <Link to={"/SingleRestaurant/" + p.restaurant_id + '/' + p.address + '/' + p.city + '/' + p.name + '/' + p.image} style={{textDecoration:'none'}}>
                                   <div class="card" style={{width: '250px'}}>
                                        <img class="card-img-top" src={port+`/image/restaurants/${p.image}`} height="150px" width="150px" alt=""/>
                                        <div class="card-body">
                                            <div class="card-title" style={{fontSize:'16px',fontWeight:'500',wordBreak:'break-word'}}>{p.name}</div>
                                            <div class="card-text" style={{color:'#686b78',fontSize:'13px',marginTop:'-10px'}}>{p.foodtype}</div>
                                                <div style={{marginTop:'10px',justifyContent:'space-between',color:'#535665',fontSize:'12px',display:'flex',alignContent:'center',height:'20px'}}>
                                                      <div>
                                                       <button disabled style={{backgroundColor:'#48c479',border:'none'}}>
                                                         <div style={{display:'flex',alignItems:'center'}}><Icon type="star" theme="filled"/>4.3</div> 
                                                       </button>
                                                       </div>
                                                    {/* <div >|</div> */}
                                                    <div >37 mins</div>
                                                    {/* <div >|</div> */}
                                                    <div >₹ 200 for Two</div>
                                                </div>
                                                <hr style={{height:'1px'}} />
                                                <div style={{color:'#8a584b',fontSize:'12px',justifyContent:'space-between',display:'flex'}}>
                                                 <img src="/img/percentage.png" alt=""></img>60 % off | Use coupon Welcome60
                                                </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                )} })}
                                </div>
                                <hr style={{height:'2px',color:'#bebfc5',borderStyle:'dashed'}} />
                            </div>
                         
                        <div id="filter_13">
                          <div style={{fontSize:'28px',fontWeight:'600',marginBottom:'10px'}}>Only on Swiggy</div>
                            <div class="row" >
                                {this.state.obj.map((p,i)=>{
                                    if(i<3){
                                    return(
                                <div class="col-6 col-sm-4 col-lg-4" style={{paddingBottom:'30px'}}>
                                  <Link to={"/SingleRestaurant/" + p.restaurant_id + '/' + p.address + '/' + p.city + '/' + p.name + '/' + p.image} style={{textDecoration:'none'}}>
                                   <div class="card" style={{width: '250px'}}>
                                        <img class="card-img-top" src={port+`/image/restaurants/${p.image}`} height="150px" width="150px" alt=""/>
                                        <div class="card-body">
                                            <div class="card-title" style={{fontSize:'16px',fontWeight:'500',wordBreak:'break-word'}}>{p.name}</div>
                                            <div class="card-text" style={{color:'#686b78',fontSize:'13px',marginTop:'-10px'}}>{p.foodtype}</div>
                                                <div style={{marginTop:'10px',justifyContent:'space-between',color:'#535665',fontSize:'12px',display:'flex',alignContent:'center',height:'20px'}}>
                                                      <div>
                                                       <button disabled style={{backgroundColor:'#48c479',border:'none'}}>
                                                         <div style={{display:'flex',alignItems:'center'}}><Icon type="star" theme="filled"/>4.3</div> 
                                                       </button>
                                                       </div>
                                                    {/* <div >|</div> */}
                                                    <div >37 mins</div>
                                                    {/* <div >|</div> */}
                                                    <div >₹ 200 for Two</div>
                                                </div>
                                                <hr style={{height:'1px'}} />
                                                <div style={{color:'#8a584b',fontSize:'12px',justifyContent:'space-between',display:'flex'}}>
                                                 <img src="/percentage.png" alt=""></img>60 % off | Use coupon Welcome60
                                                </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                )} })}
                                </div>
                                <hr style={{height:'2px',color:'#bebfc5',borderStyle:'dashed'}} />
                            </div>

                        <div id="filter_14">
                          <div style={{fontSize:'28px',fontWeight:'600',marginBottom:'10px'}}>Vegetarian Options</div>
                            <div class="row" >
                                {this.state.obj.map((p,i)=>{
                                    if(i<3){
                                    return(
                                <div class="col-6 col-sm-4 col-lg-4" style={{paddingBottom:'30px'}}>
                                 <Link to={"/SingleRestaurant/" + p.restaurant_id + '/' + p.address + '/' + p.city + '/' + p.name + '/' + p.image} style={{textDecoration:'none'}}>
                                   <div class="card" style={{width: '250px'}}>
                                        <img class="card-img-top" src={port+`/image/restaurants/${p.image}`} height="150px" width="150px" alt=""/>
                                        <div class="card-body">
                                            <div class="card-title" style={{fontSize:'16px',fontWeight:'500',wordBreak:'break-word'}}>{p.name}</div>
                                            <div class="card-text" style={{color:'#686b78',fontSize:'13px',marginTop:'-10px'}}>{p.foodtype}</div>
                                                <div style={{marginTop:'10px',justifyContent:'space-between',color:'#535665',fontSize:'12px',display:'flex',alignContent:'center',height:'20px'}}>
                                                      <div>
                                                       <button disabled style={{backgroundColor:'#48c479',border:'none'}}>
                                                         <div style={{display:'flex',alignItems:'center'}}><Icon type="star" theme="filled"/>4.3</div> 
                                                       </button>
                                                       </div>
                                                    {/* <div >|</div> */}
                                                    <div >37 mins</div>
                                                    {/* <div >|</div> */}
                                                    <div >₹ 200 for Two</div>
                                                </div>
                                                <hr style={{height:'1px'}} />
                                                <div style={{color:'#8a584b',fontSize:'12px',justifyContent:'space-between',display:'flex'}}>
                                                 <img src="/percentage.png" alt=""></img>60 % off | Use coupon Welcome60
                                                </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                )} })}
                                </div>
                                <hr style={{height:'2px',color:'#bebfc5',borderStyle:'dashed'}} />
                              </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="filter_15">
               <AllRestaurants />
            </div>
            </div>

        )
    }
}

export default MidContent
