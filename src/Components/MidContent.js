import React, { Component } from 'react'
import {Row,Col,Icon,Divider} from 'antd'
import Scrollspy from 'react-scrollspy'
import AllRestaurants from './AllRestaurants'
import { NavLink } from "react-router-dom";
import axios from 'axios'
import port from '../port'
export class MidContent extends Component {
    state={
        obj:[],tempids:[11,12,13,14]
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
        // const res=await axios.get(port+'/getRestaurants')
        // console.log(res,"response")
        // if(res.data){
        //     await this.setState({obj:res.data.restaurants})
        // }
        await this.setState({obj})
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
            <div className="webview"style={{marginTop:'30px'}}>
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
                            <div class="row" >
                                {this.state.obj.map((p,i)=>{return(
                                <div class="col-6 col-sm-4 col-lg-4" style={{paddingBottom:'30px'}}>
                                  <NavLink to={"/SingleRestaurant"} style={{textDecoration:'none'}}>
                                   <div class="card" style={{width: '250px'}}>
                                        <img class="card-img-top" src={port+`/image/fooditems/${p.image}`} />
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
                                                 <img src="/percentage.png"></img>60 % off | Use coupon Welcome60
                                                </div>
                                        </div>
                                    </div>
                                    </NavLink>
                                </div>
                                )})}
                                </div>
                                <hr style={{height:'2px',color:'#bebfc5',borderStyle:'dashed'}} />
                                </div>
                         <div id="filter_12">
                           <div style={{fontSize:'28px',fontWeight:'600',marginBottom:'10px'}}>Express Delivery</div>
                            <div class="row" >
                                {this.state.obj.map((p,i)=>{return(
                                <div class="col-6 col-sm-4 col-lg-4" style={{paddingBottom:'30px'}}>
                                   <div class="card" style={{width: '250px'}}>
                                        <img class="card-img-top" src={port+`/image/fooditems/${p.image}`} />
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
                                                 <img src="/img/percentage.png"></img>60 % off | Use coupon Welcome60
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                )})}
                                </div>
                                <hr style={{height:'2px',color:'#bebfc5',borderStyle:'dashed'}} />
                            </div>
                         
                        <div id="filter_13">
                          <div style={{fontSize:'28px',fontWeight:'600',marginBottom:'10px'}}>Only on Swiggy</div>
                            <div class="row" >
                                {this.state.obj.map((p,i)=>{return(
                                <div class="col-6 col-sm-4 col-lg-4" style={{paddingBottom:'30px'}}>
                                   <div class="card" style={{width: '250px'}}>
                                        <img class="card-img-top" src={p.image} />
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
                                                 <img src="/percentage.png"></img>60 % off | Use coupon Welcome60
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                )})}
                                </div>
                                <hr style={{height:'2px',color:'#bebfc5',borderStyle:'dashed'}} />
                            </div>

                        <div id="filter_14">
                          <div style={{fontSize:'28px',fontWeight:'600',marginBottom:'10px'}}>Vegetarian Options</div>
                            <div class="row" >
                                {this.state.obj.map((p,i)=>{return(
                                <div class="col-6 col-sm-4 col-lg-4" style={{paddingBottom:'30px'}}>
                                   <div class="card" style={{width: '250px'}}>
                                        <img class="card-img-top" src={p.image} />
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
                                                 <img src="/percentage.png"></img>60 % off | Use coupon Welcome60
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                )})}
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
            <div className='mobview'>
                 {/* new */}
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
                                                
                                                  <Row>
                                                      <div  style={{paddingLeft:'20px',marginTop:'10px'}}>
                                                    <NavLink to={"/SingleRestaurant"}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)', borderColor: 'rg',textOverflow: 'ellipsis',
                                                           overflow: 'hidden',
                                                              whiteSpace: 'nowrap',padding:'2 4',fontSize:'10px',textAlign:'center'}}> PROMOTED </div>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food1.jpg" style={{width:'100%',height:'70px'}}/>
                                                           {/* doubt */}
                                                           

                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={16}>
                                                        <div style={{paddingLeft:'20px',
                                                        fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                                        Sita Paanai
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
                                                    </NavLink>
                                                    </div>
                                                </Row>
                                                
                                                <Row>
                                                    <div style={{paddingLeft:'20px',paddingTop:'40px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(250, 74, 91)',color: 'rgb(255, 255, 255)', borderColor: 'rgb(209,42,59)',textOverflow: 'ellipsis',
                                                           overflow: 'hidden',
                                                              whiteSpace: 'nowrap',padding:'2 4',fontSize:'10px',textAlign:'center',textTransform:'uppercase'}}> Exclusive </div>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food2.jpg" style={{width:'100%',height:'70px'}}/>
                                                           {/* doubt */}
                                                           
                                                           
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={16}>
                                                        <div style={{paddingLeft:'20px',
                                                        fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                                        Geetha Canteen
                                                        </div>
                                                        <div style={{paddingLeft:'20px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                                            South Indian
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
                                                            <div style={{paddingLeft:'4px',fontSize:'10px'}}>4.3</div>
                                                            
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>33MINS</div>
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                
                                                                <div style={{paddingLeft:'2px',fontSize:'11px',whiteSpace: 'nowrap',textTransform:'uppercase',textAlign:'center'}}>₹200 For Two</div>
                                                            </div> 
                                                        
                                                        
                                                    </Col>
                                                    </div>
                                                </Row>


                                               


                                                <Row>
                                                    <div style={{paddingLeft:'20px',paddingTop:'40px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food3.jpg" style={{width:'100%',height:'70px'}}/>
                        
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={16}>
                                                        <div style={{paddingLeft:'20px',
                                                        fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                                        SS Hotel
                                                        </div>
                                                        <div style={{paddingLeft:'20px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                                            North Indian,South Indian
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
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>35MINS</div>
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                
                                                                <div style={{paddingLeft:'2px',fontSize:'11px',whiteSpace: 'nowrap',textTransform:'uppercase'}}>₹200 For Two</div>
                                                                
                                                            </div> 
                                                        
                                                        
                                                    </Col>
                                                    </div>
                                                </Row> 



                                                  <Row>
                                                    <div style={{paddingLeft:'20px',paddingTop:'40px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food4.jpg" style={{width:'100%',height:'70px'}}/>
                        
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={16}>
                                                        <div style={{paddingLeft:'20px',
                                                        fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                                        Kannama Thattu Kadai
                                                        </div>
                                                        <div style={{paddingLeft:'20px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                                            South Indian,Chineese
                                                        </div>
                                                        <div style={{display:'flex',flexWrap:'nowrap'}}>
                                                        <img src="/img/percentage.png" style={{paddingLeft:'20px'}}/>
                                                        <div style={{fontWeight: 500,paddingLeft: '4px',color: '#7e808c', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',fontSize: '12px'}}> 
                                                        20% off on all orders
                                                        </div>
                                                        </div>
                                                        <div style={{paddingLeft:'20px'}}>
                                                        <hr/>
                                                        </div>
                                                           <div style={{ paddingLeft:'20px',color: '#7e808c', fontSize:'12px', display: 'flex',width: '100%'}}>  
                                                            <img src='img/star.png'style={{height:'9px',marginTop:'2px'}}/>
                                                            <div style={{paddingLeft:'4px',fontSize:'10px'}}>4.0</div>
                                                            
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>30MINS</div>
                                                                <img style={{paddingLeft:'2px',height:'10px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                
                                                                <div style={{paddingLeft:'2px',fontSize:'11px',whiteSpace: 'nowrap',textTransform:'uppercase'}}>₹150 For Two</div>
                                                                
                                                            </div> 
                                                        
                                                        
                                                    </Col>
                                                    </div>
                                                </Row>                                                             
                                            </div>
               
                                            <div style={{margin:'30px 20px',background: '#282c3f', height: '2px',display: 'block'}}><hr/></div>
                                            
                                                 
            
                                            <div> 
                                                <Row>
                                                    <div style={{paddingLeft:'20px',marginTop:'10px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)', borderColor: 'rg',textOverflow: 'ellipsis',
                                                           overflow: 'hidden',
                                                              whiteSpace: 'nowrap',padding:'2 4',fontSize:'10px',textAlign:'center'}}> PROMOTED </div>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food1.jpg" style={{width:'100%',height:'70px'}}/>
                                                           {/* doubt */}
                                                           

                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={16}>
                                                        <div style={{paddingLeft:'20px',
                                                        fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                                        Sita Paanai
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
                                                    </div>
                                                </Row>


                                               
                                                
                                                <Row>
                                                    <div style={{paddingLeft:'20px',paddingTop:'40px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(250, 74, 91)',color: 'rgb(255, 255, 255)', borderColor: 'rgb(209,42,59)',textOverflow: 'ellipsis',
                                                           overflow: 'hidden',
                                                              whiteSpace: 'nowrap',padding:'2 4',fontSize:'10px',textAlign:'center',textTransform:'uppercase'}}> Exclusive </div>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food2.jpg" style={{width:'100%',height:'70px'}}/>
                                                           {/* doubt */}
                                                           
                                                           
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={16}>
                                                        <div style={{paddingLeft:'20px',
                                                        fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                                        Geetha Canteen
                                                        </div>
                                                        <div style={{paddingLeft:'20px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                                            South Indian
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
                                                            <div style={{paddingLeft:'4px',fontSize:'10px'}}>4.3</div>
                                                            
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>33MINS</div>
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                
                                                                <div style={{paddingLeft:'2px',fontSize:'11px',whiteSpace: 'nowrap',textTransform:'uppercase',textAlign:'center'}}>₹200 For Two</div>
                                                            </div> 
                                                        
                                                        
                                                    </Col>
                                                    </div>
                                                </Row>


                                               


                                                <Row>
                                                    <div style={{paddingLeft:'20px',paddingTop:'40px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food3.jpg" style={{width:'100%',height:'70px'}}/>
                        
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={16}>
                                                        <div style={{paddingLeft:'20px',
                                                        fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                                        SS Hotel
                                                        </div>
                                                        <div style={{paddingLeft:'20px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                                            North Indian,South Indian
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
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>35MINS</div>
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                
                                                                <div style={{paddingLeft:'2px',fontSize:'11px',whiteSpace: 'nowrap',textTransform:'uppercase'}}>₹200 For Two</div>
                                                                
                                                            </div> 
                                                        
                                                        
                                                    </Col>
                                                    </div>
                                                </Row> 



                                                  <Row>
                                                    <div style={{paddingLeft:'20px',paddingTop:'40px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food4.jpg" style={{width:'100%',height:'70px'}}/>
                        
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={16}>
                                                        <div style={{paddingLeft:'20px',
                                                        fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                                        Kannama Thattu Kadai
                                                        </div>
                                                        <div style={{paddingLeft:'20px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                                            South Indian,Chineese
                                                        </div>
                                                        <div style={{display:'flex',flexWrap:'nowrap'}}>
                                                        <img src="/img/percentage.png" style={{paddingLeft:'20px'}}/>
                                                        <div style={{fontWeight: 500,paddingLeft: '4px',color: '#7e808c', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',fontSize: '12px'}}> 
                                                        20% off on all orders
                                                        </div>
                                                        </div>
                                                        <div style={{paddingLeft:'20px'}}>
                                                        <hr/>
                                                        </div>
                                                           <div style={{ paddingLeft:'20px',color: '#7e808c', fontSize:'12px', display: 'flex',width: '100%'}}>  
                                                            <img src='img/star.png'style={{height:'9px',marginTop:'2px'}}/>
                                                            <div style={{paddingLeft:'4px',fontSize:'10px'}}>4.0</div>
                                                            
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>30MINS</div>
                                                                <img style={{paddingLeft:'2px',height:'10px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                
                                                                <div style={{paddingLeft:'2px',fontSize:'11px',whiteSpace: 'nowrap',textTransform:'uppercase'}}>₹150 For Two</div>
                                                                
                                                            </div> 
                                                        
                                                        
                                                    </Col>
                                                    </div>
                                                </Row>                                                             
                                            </div>
               
                                            <div style={{margin:'30px 20px',background: '#282c3f', height: '2px',display: 'block'}}><hr/></div>
                                            
                {/* popular brands */}
                    <div style={{color: '#3d4152', marginLeft: '20px', marginTop: '30px', fontSize: '15px', fontWeight: '600',display: 'block'}}> Popular Brands
                    </div>
                    <div style={{width: 'auto', overflowX: 'scroll', overflowY: 'hidden', display:'flex',flexWrap:'nowrap', margin:'10px 20px',paddingBottom:'20px',color:'#282C3F'}}>
                        <div style={{flex:'0 0 auto',marginRight:'30px'}}>
                        <img height="80" width="80" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,e_trim/rpkifa9fipyyc4avyfpj"/>
                        <div style={{maxWidth:'80px',wordBreak:'break-word',whiteSpace:'pre-line',fontWeight:'600',fontSize:'11px',paddingTop:'10px',textAlign:'center',textTransform:'uppercase'}}>Domino's Pizza</div>
                        </div>

                        <div style={{flex:'0 0 auto',marginRight:'30px'}}>
                        <img   height="80" width="80" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,e_trim/qhzzefsu4ntxri7mttq1"/>
                        
                        <div style={{maxWidth:'80px',wordBreak:'break-word',whiteSpace:'pre-line',fontWeight:'600',fontSize:'11px',paddingTop:'10px',textAlign:'center',textTransform:'uppercase'}}>Burger King</div>
                        </div>

                        <div style={{flex:'0 0 auto',marginRight:'30px'}}>
                        <img   height="80" width="80" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,e_trim/u6vzlpphieceu3r47hha"></img>
                        
                        <div style={{maxWidth:'80px',wordBreak:'break-word',whiteSpace:'pre-line',fontWeight:'600',fontSize:'11px',paddingTop:'10px',textAlign:'center',textTransform:'uppercase'}}>Sree Anandhas</div>
                        </div>

                        <div style={{flex:'0 0 auto',marginRight:'30px'}}>
                        <img  height="80" width="80" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,e_trim/hs6qtfwctqnbejkhsczs"></img>
                        <div style={{maxWidth:'80px',wordBreak:'break-word',whiteSpace:'pre-line',fontWeight:'600',fontSize:'11px',paddingTop:'10px',textAlign:'center',textTransform:'uppercase'}}>Anna Proona</div>
                        </div>

                        <div style={{flex:'0 0 auto',marginRight:'30px'}}>
                        <img  height="80" width="80" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,e_trim/vfx3dby2ermkjh1ms5e5"/>
                        <div style={{maxWidth:'80px',wordBreak:'break-word',whiteSpace:'pre-line',fontWeight:'600',fontSize:'11px',paddingTop:'10px',textAlign:'center',textTransform:'uppercase'}}>cafe coffee day</div>
                        </div>

                        <div style={{flex:'0 0 auto',marginRight:'30px'}}>
                        <img  height="80" width="80" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,e_trim/rng/md/carousel/production/lbn5xz4fmbcjzcsypypp"/>
                        <div style={{maxWidth:'80px',wordBreak:'break-word',whiteSpace:'pre-line',fontWeight:'600',fontSize:'11px',paddingTop:'10px',textAlign:'center',textTransform:'uppercase'}}>BreakFast Express</div>
                        </div>

                        <div style={{flex:'0 0 auto',marginRight:'30px'}}>
                        <img  height="80" width="80" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,e_trim/wojsi3n5lu9lw37hfsyv"></img>
                        <div style={{maxWidth:'80px',wordBreak:'break-word',whiteSpace:'pre-line',fontWeight:'600',fontSize:'11px',paddingTop:'10px',textAlign:'center',textTransform:'uppercase'}}>Keventers</div>
                        </div>

                        <div style={{flex:'0 0 auto',marginRight:'30px'}}>
                        <img  height="80" width="80" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,e_trim/i6fdzjojx8cdbgb87qez"/>
                        <div style={{maxWidth:'80px',wordBreak:'break-word',whiteSpace:'pre-line',fontWeight:'600',fontSize:'11px',paddingTop:'10px',textAlign:'center',textTransform:'uppercase'}}>Geetha Canteen</div>
                        </div>
 
                   
                    </div>
                    <div style={{margin:' 20px',background: '#282c3f', height: '2px',display: 'block'}}><hr/></div>


                   <div>
                    <Row>
                      <div style={{paddingLeft:'20px',marginTop:'30px'}}>
                        <Col span={6}>
                           <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                              <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)', borderColor: 'rg',textOverflow: 'ellipsis',
                                           overflow: 'hidden',  whiteSpace: 'nowrap',padding:'2 4',fontSize:'10px',textAlign:'center'}}> PROMOTED </div>
                                    <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                            <img src="/img/food4.jpg" style={{width:'100%',height:'70px'}}/>
                                                    {/* doubt */}  </div>  </div>
                                        </Col>
                                       <Col span={16}>
                                          <div style={{paddingLeft:'20px',fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                                       Hydrabad Biriyani Hotel
                                          </div>
                                          <div style={{paddingLeft:'20px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                              Non Veg,Chineese
                                                        </div>
                                                       
                                                        <div style={{paddingLeft:'20px'}}>
                                                        <hr/>
                                                        </div>
                                                           <div style={{ paddingLeft:'20px',color: '#7e808c', fontSize:'12px', display: 'flex',width: '100%'}}>  
                                                            <img src='/img/star.png'style={{height:'9px',marginTop:'2px'}}/>
                                                            <div style={{paddingLeft:'4px',fontSize:'10px'}}>4.3</div>
                                                            
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>30MINS</div>
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                
                                                                <div style={{paddingLeft:'2px',fontSize:'11px',whiteSpace: 'nowrap',textTransform:'uppercase',textAlign:'center'}}>₹300 For Two</div>
                                                                
                                                            </div> 
                                                        
                                                        
                                                    </Col>
                                                    </div>
                                                </Row>

                                                
                                                <Row>
                                                    <div style={{paddingLeft:'20px',paddingTop:'40px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(250, 74, 91)',color: 'rgb(255, 255, 255)', borderColor: 'rgb(209,42,59)',textOverflow: 'ellipsis',
                                                           overflow: 'hidden',
                                                              whiteSpace: 'nowrap',padding:'2 4',fontSize:'10px',textAlign:'center',textTransform:'uppercase'}}> Exclusive </div>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food7.jpg" style={{width:'100%',height:'70px'}}/>
                                                           {/* doubt */}
                                                           
                                                           
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={16}>
                                                        <div style={{paddingLeft:'20px',
                                                        fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                                        Velu Nayakar Mess
                                                        </div>
                                                        <div style={{paddingLeft:'20px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                                            South Indian,North Indian
                                                        </div>
                                                        <div style={{display:'flex',flexWrap:'nowrap'}}>
                                                        <img src="/img/percentage.png" style={{paddingLeft:'20px'}}/>
                                                        <div style={{fontWeight: 500,paddingLeft: '4px',color: '#7e808c', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',fontSize: '12px'}}> 
                                                        20% off of all orders
                                                        </div>
                                                        </div>
                                                        <div style={{paddingLeft:'20px'}}>
                                                        <hr/>
                                                        </div>
                                                           <div style={{ paddingLeft:'20px',color: '#7e808c', fontSize:'12px', display: 'flex',width: '100%'}}>  
                                                           <img src='/img/star.png'style={{height:'9px',marginTop:'2px'}}/>
                                                            <div style={{paddingLeft:'4px',fontSize:'10px'}}>4.0</div>
                                                            
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>41MINS</div>
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                
                                                                <div style={{paddingLeft:'2px',fontSize:'11px',whiteSpace: 'nowrap',textTransform:'uppercase',textAlign:'center'}}>₹150 For Two</div>
                                                            </div> 
                                                        
                                                        
                                                    </Col>
                                                    </div>
                                                </Row>

                                                <Row>
                                                    <div style={{paddingLeft:'20px',paddingTop:'40px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(250, 74, 91)',color: 'rgb(255, 255, 255)', borderColor: 'rgb(209,42,59)',textOverflow: 'ellipsis',
                                                           overflow: 'hidden',
                                                              whiteSpace: 'nowrap',padding:'2 4',fontSize:'10px',textAlign:'center',textTransform:'uppercase'}}> Exclusive </div>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food8.jpg" style={{width:'100%',height:'70px'}}/>
                                                           {/* doubt */}
                                                           
                                                           
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={16}>
                                                        <div style={{paddingLeft:'20px',
                                                        fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                                        Dindugal Dum Biriyani
                                                        </div>
                                                        <div style={{paddingLeft:'20px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                                            South Indian,North Indian
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
                                                           <img src='/img/star.png'style={{height:'9px',marginTop:'2px'}}/>
                                                            <div style={{paddingLeft:'4px',fontSize:'10px'}}>3.8</div>
                                                            
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>45MINS</div>
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                
                                                                <div style={{paddingLeft:'2px',fontSize:'11px',whiteSpace: 'nowrap',textTransform:'uppercase',textAlign:'center'}}>₹250 For Two</div>
                                                            </div> 
                                                        
                                                        
                                                    </Col>
                                                    </div>
                                                </Row>


                                                <Row>
                                                    <div style={{paddingLeft:'20px',paddingTop:'40px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food4.jpg" style={{width:'100%',height:'70px'}}/>
                        
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={16}>
                                                        <div style={{paddingLeft:'20px',
                                                        fontSize:'15px',color:'#3d4152',fontWeight:'600'}}>
                                                        Shree Renuga Mess
                                                        </div>
                                                        <div style={{paddingLeft:'20px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                                           Chettinad
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
                                                            <img src='/img/star.png'style={{height:'9px',marginTop:'2px'}}/>
                                                            <div style={{paddingLeft:'4px',fontSize:'10px'}}>4.1</div>
                                                            
                                                                <img style={{paddingLeft:'2px',height:'12px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>32MINS</div>
                                                                <img style={{paddingLeft:'2px',height:'10px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                
                                                                <div style={{paddingLeft:'2px',fontSize:'11px',whiteSpace: 'nowrap',textTransform:'uppercase'}}>₹300 For Two</div>
                                                                
                                                            </div> 
                                                        
                                                        
                                                    </Col>
                                                    </div>
                                                </Row>                                                             
                                            </div>
               
                                            <div style={{margin:'30px 20px',background: '#282c3f', height: '2px',display: 'block'}}><hr/></div>
                                               {/* only on swiggy */}
                                            <div style={{color: '#3d4152', marginLeft: '20px', marginTop: '30px', fontSize: '15px', fontWeight: '600',display: 'block'}}> Only on Swiggy
                                            </div>
                                            <div style={{width: 'auto', overflowX: 'scroll', overflowY: 'hidden', display:'flex',flexWrap:'nowrap', margin:'10px 20px',paddingBottom:'20px',color:'#282C3F'}}>

                                            <div style={{paddingLeft:'20px',paddingTop:'20px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food7.jpg" style={{width:'100%',height:'70px'}}/>
                        
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <div style={{whiteSpace:"nowrap",marginLeft:'40px'}}>
                                                        <div style={{paddingLeft:'20px',
                                                        fontSize:'12px',color:'#3d4152',fontWeight:'600'}}>
                                                        Tandoori Tonight
                                                        </div>
                                                        <div style={{paddingLeft:'20px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                                           Indian,Chinese
                                                        </div>
                                                        <div style={{display:'flex',flexWrap:'nowrap'}}>
                                                        <img src="/img/percentage.png" style={{paddingLeft:'20px'}}/>
                                                        <div style={{fontWeight: 500,paddingLeft: '4px',color: '#7e808c', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',fontSize: '12px'}}> 
                                                        60% off 
                                                        </div>
                                                        </div>
                                                        <div style={{paddingLeft:'20px'}}>
                                                        <hr/>
                                                        </div>
                                                           <div style={{ paddingLeft:'20px',color: '#7e808c', fontSize:'12px', display: 'flex',width: '100%'}}>  
                                                            <img src='/img/star.png'style={{height:'9px',marginTop:'2px'}}/>
                                                            <div style={{paddingLeft:'4px',fontSize:'10px'}}>4.1</div>
                                                            
                                                                <img style={{paddingLeft:'2px',height:'13px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>32MINS</div>    
                                                            </div> 
                                                          </div>
                                                    </div>


                                                            {/* new */}
                                                    <div style={{paddingLeft:'20px',paddingTop:'20px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/sweet1.jpg" style={{width:'100%',height:'70px'}}/>
                        
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <div style={{whiteSpace:"nowrap",marginLeft:'50px'}}>
                                                        <div style={{paddingLeft:'30px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',
                                                        fontSize:'12px',color:'#3d4152',fontWeight:'600'}}>
                                                        Agarwal Sweet Palace
                                                        </div>
                                                        <div style={{paddingLeft:'30px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px'}}>
                                                        Fast Food
                                                        </div>
                                                        
                                                        <div style={{paddingLeft:'30px'}}>
                                                        <hr/>
                                                        </div>
                                                           <div style={{ paddingLeft:'30px',color: '#7e808c', fontSize:'12px', display: 'flex',width: '100%'}}>  
                                                            <img src='/img/star.png'style={{height:'9px',marginTop:'2px'}}/>
                                                            <div style={{paddingLeft:'4px',fontSize:'10px'}}>4.1</div>
                                                            
                                                                <img style={{paddingLeft:'2px',height:'13px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>32MINS</div>    
                                                            </div>     
                                                    </div>
                                                    </div>
                                                             {/* new */}
                                                    <div style={{paddingLeft:'20px',paddingTop:'20px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food9.jpg" style={{width:'100%',height:'70px'}}/>
                        
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <div style={{whiteSpace:"nowrap",marginLeft:'40px'}}>
                                                        <div style={{paddingLeft:'30px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',
                                                        fontSize:'12px',color:'#3d4152',fontWeight:'600'}}>
                                                        LFC
                                                        </div>
                                                        <div style={{paddingLeft:'30px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px',textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                                                        Fast Food
                                                        </div>
                                                         <div style={{display:'flex',flexWrap:'nowrap'}}>
                                                        <img src="/img/percentage.png" style={{paddingLeft:'30px'}}/>
                                                        <div style={{fontWeight: 500,paddingLeft: '4px',color: '#7e808c', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',fontSize: '12px'}}> 
                                                        60% off 
                                                        </div>
                                                        </div>
                                                        <div style={{paddingLeft:'30px'}}>
                                                        <hr/>
                                                        </div>
                                                           <div style={{ paddingLeft:'30px',color: '#7e808c', fontSize:'12px', display: 'flex',width: '100%'}}>  
                                                            <img src='/img/star.png'style={{height:'9px',marginTop:'2px'}}/>
                                                            <div style={{paddingLeft:'4px',fontSize:'10px'}}>4.1</div>
                                                            
                                                                <img style={{paddingLeft:'2px',height:'13px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>32MINS</div>
                                                               
                                                                
                                                            </div> 
                                                        
                                                        
                                                    </div>
                                                    </div>
                                                   
                                                     {/* new */}
                                                     <div style={{paddingLeft:'20px',paddingTop:'20px'}}>
                                                    <Col span={6}>
                                                        <div style={{position: 'absolute', top: 0,  left: 0, right: 0, bottom: 0,backgroundColor: 'rgba(40,44,63,.05)',backgroundBlendMode: 'overlay'}}>
                                                        <div style={{background: 'rgb(58, 60, 65)',color: 'rgb(255, 255, 255)',borderColor: 'rgb(30, 32, 35) transparent'}}>
                                                           <img src="/img/food10.jpg" style={{width:'100%',height:'70px'}}/>
                        
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <div style={{whiteSpace:"nowrap",marginLeft:'40px'}}>
                                                        <div style={{paddingLeft:'30px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',
                                                        fontSize:'12px',color:'#3d4152',fontWeight:'600'}}>
                                                        Hang Out
                                                        </div>
                                                        <div style={{paddingLeft:'30px',flex: 1, color: '#7e808c',  width: '100%', fontSize: '12px',maxWidth:'100px',textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                                                        Arabian,Chinese,Indian,Berverage,South Indian
                                                        </div>
                                                         <div style={{display:'flex',flexWrap:'nowrap'}}>
                                                        <img src="/img/percentage.png" style={{paddingLeft:'30px'}}/>
                                                        <div style={{fontWeight: 500,paddingLeft: '4px',color: '#7e808c', fontSize: '12px'}}> 
                                                        60% off 
                                                        </div>
                                                        </div>
                                                        <div style={{paddingLeft:'30px'}}>
                                                        <hr/>
                                                        </div>
                                                           <div style={{ paddingLeft:'30px',color: '#7e808c', fontSize:'12px', display: 'flex',width: '100%'}}>  
                                                            <img src='/img/star.png'style={{height:'9px',marginTop:'2px'}}/>
                                                            <div style={{paddingLeft:'4px',fontSize:'10px'}}>4.1</div>
                                                            
                                                                <img style={{paddingLeft:'2px',height:'13px',marginTop:'2px'}}
                                                                src="/img/dot.png"/>
                                                                <div style={{paddingLeft:'2px',fontSize:'11px'}}>32MINS</div>    
                                                            </div> 
                                                    </div>
                                                    </div>
                                            </div>
                                            {/* line */}
                                            <div style={{margin:' 20px',background: '#282c3f', height: '2px',display: 'block'}}><hr/></div>
                                             
                                             
                                                      
                                                 
                                             

                                              


                    
                </div>
            </div>

        )
    }
}

export default MidContent
