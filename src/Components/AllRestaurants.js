import React, { Component } from 'react'
import {Card, Layout} from 'antd'
import Scrollspy from 'react-scrollspy'
import {Row,Col,Icon,Divider} from 'antd'
import axios from 'axios'
import port from '../port'
import { Link,NavLink } from "react-router-dom";
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
            <div>
            <div  className="webview"style={{padding:'30px'}}>
                <Card>
                    <div><h4 style={{textAlign:'center'}}>All Restaurants</h4></div>
                    <div style={{paddingTop:'20px'}}>
                    <div class="row" >
                                {this.state.obj.map((p,i)=>{return(
                                <div class="col-6 col-sm-3 col-lg-3" style={{paddingBottom:'30px'}}>
                                  <Link to={"/SingleRestaurant/" + p.restaurant_id + '/' + p.address + '/' + p.city + '/' + p.name + '/' + p.image}>
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
            <div className="mobview">
            <div  class='sticky'style={{textAlign:'center',margin:'-9px 0 11px 0',paddingTop:'13px'}}>
                                                       <Row>
                                                <div style={{display: 'flex',fontSize:'13px'}}>
                                                    <Col span={12}>
                                                  ALL RESTAURANTS 
                                                  </Col>
                                                  
                                                  <Col span={6}>
                                                  <img src='/img/filter.png' style={{height:'20px',float:'right'}}/>
                                                  </Col >
                                                  <Col span={6}>
                                                  <div style={{fontSize:'16px'}}>Sort/Filter</div>
                                                  </Col>
                                                  
                                                  </div>
                                                  </Row>
                                            </div>
                                            <div>
                                            {this.state.obj.map((p,i)=>{return(
                                                  <Row>
                                                      <div  style={{paddingLeft:'20px',marginTop:'10px'}}>
                                                      <Link to={"/SingleRestaurant/" + p.restaurant_id + '/' + p.address + '/' + p.city + '/' + p.name + '/' + p.image}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)', borderColor: 'rg',textOverflow: 'ellipsis',
                                                           overflow: 'hidden',
                                                              whiteSpace: 'nowrap',padding:'2 4',fontSize:'10px',textAlign:'center'}}> PROMOTED </div>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src={port+`/image/restaurants/${p.image}`} style={{width:'100%',height:'70px'}}/>
                                                           {/* doubt */}
                                                           

                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={16}>
                                                        <div style={{paddingLeft:'20px',
                                                        fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                                        {p.name}
                                                        </div>
                                                        <div style={{paddingLeft:'20px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                                            Indian,Chineese
                                                        </div>
                                                        <div style={{display:'flex',flexWrap:'nowrap'}}>
                                                        <img src="/img/percentage.png" style={{paddingLeft:'20px'}}/>
                                                        <div style={{fontWeight: 500,paddingLeft: '4px',color: '#7e808c', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',fontSize: '12px'}}> 
                                                        60% off | Use Coupon Welcome60
                                                        </div>
                                                        </div>
                                                        <div style={{paddingLeft:'20px'}}>
                                                        <hr/>
                                                        </div>
                                                           <div style={{ paddingLeft:'20px',color: '#7e808c', fontSize:'12px', display: 'flex',width: '100%'}}>  
                                                            <img src='img/star.png'style={{height:'9px',marginTop:'2px'}}/>
                                                            <div style={{paddingLeft:'4px',fontSize:'10px'}}>4.1</div>
                                                            
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>39MINS</div>
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                
                                                                <div style={{paddingLeft:'2px',fontSize:'11px',whiteSpace: 'nowrap',textTransform:'uppercase',textAlign:'center'}}>₹300 For Two</div>
                                                                
                                                            </div> 
                                                        
                                                        
                                                    </Col>
                                                    </Link>
                                                    </div>
                                                </Row>
                                            )})}
                                                
                                                                                                     
                                            </div>
               
                                            <div style={{margin:'30px 20px',background: '#282c3f', height: '2px',display: 'block'}}><hr/></div>

                
                </div>
            </div>
           
        )
    }
}

export default AllRestaurants
