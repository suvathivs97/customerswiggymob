import React, { Component } from 'react'
import {Card, Layout} from 'antd'
import Scrollspy from 'react-scrollspy'
import {Row,Col,Icon,Divider} from 'antd'
import axios from 'axios'
import port from '../port'
import { Link } from "react-router-dom";
export class AllRestaurants extends Component {
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
    //     await this.setState({obj})
        const res=await axios.get(port+'/customerGetRestaurants')
        console.log(res,"response")
        if(res.data.success){
            await this.setState({obj:res.data.restaurants})
        }
      }
    render() {

        return (
            <div style={{padding:'30px'}}>
                <Card>
                    <div><h4 style={{textAlign:'center'}}>All Restaurants</h4></div>
                    <div style={{paddingTop:'20px'}}>
                    <div class="row" >
                                {this.state.obj.map((p,i)=>{return(
                                <div class="col-6 col-sm-3 col-lg-3" style={{paddingBottom:'30px'}}>
                                  <Link to={"/Pestcontrol/" + p.restaurant_id + '/' + p.address + '/' + p.city + '/' + p.name + '/' + p.image}>
                                   <div class="card" style={{width: '250px'}}>
                                        <img class="card-img-top" src={port+`/image/restaurants/${p.image}`} height="150px" width="150px" />
                                        <div class="card-body">
                                            <div class="card-title" style={{fontSize:'16px',fontWeight:'500',wordBreak:'break-word'}}>{p.name}</div>
                                            <div class="card-text" style={{color:'#686b78',fontSize:'13px',marginTop:'-10px'}}>North Indian</div>
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
                                                 <img src="/img/percentage.png"></img>60 % off | Use coupon Welcome60
                                                </div>
                                        </div>
                                    </div>
                                  </Link>
                                </div>
                                )})}
                      </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default AllRestaurants
