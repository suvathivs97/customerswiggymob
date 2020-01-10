import React, { Component } from 'react'
import {Row,Col} from 'antd'
export class TwoOffers extends Component {
    state={
        obj:[]
    }
    // componentDidMount=async()=>{
    //    let obj=[]
    //    obj=[
    //         {
    //            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180,h_180,c_fill/ss3yi294lseqiiuoyga3",
    //            text:'Introducing Swiggy Pop',
    //            message:'Single Serve Meals, Free Delivery, No Extra Charges'
    //         },
    //         {
    //            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/SuperNewLogo_loz2q9",
    //            text:'The membership program you have been waiting for. Grab it at unbelievable introductory prices!',
    //         }
    //     ]
    // }
    render() {
        return (
            <div >
            <div className="webview" style={{zIndex:'1'}}>
                <div style={{backgroundColor:'#f2f6fc',height:'130px',display:'block',padding:'0px 20px'}}>
                    <div style={{maxWidth:'1200px',minWidth:'1200px',position:'relative',display:'flex',alignItems:'center',height:'100%',justifyContent:'space-between',margin:'0 auto'}}>
                        <div style={{display:'flex',padding:'20px 0px',marginLeft:'50px'}}>
                          <div style={{display:'flex',alignItems:'center',width:'100%',maxWidth:'580px'}}>
                              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180,h_180,c_fill/ss3yi294lseqiiuoyga3" height="68" width="70" />
                              <div style={{flex:'1',paddingLeft:'20px',maxWidth:'300px',color:'#282c3f'}}>
                               Introducing Swiggy Pop
                               <div style={{color:'#93959f',fontSize: '14px',marginTop:'2px',maxWidth:'300px'}}>
                               Single Serve Meals, Free Delivery, No Extra Charges
                               </div>
                              </div>
                              <button style={{width:'110px',height:'36px',backgroundColor:'#e46d47',boxShadow:'0 1px 3px 0 rgba(0,0,0,.12)',color:'white',border:'none',fontSize:'14px',fontWeight:'600'}}>Order Now</button>
                          </div>
                        </div>
                        <div style={{display:'flex',padding:'20px 0px',marginRight:'50px'}}>
                          <div style={{display:'flex',alignItems:'center',width:'100%',maxWidth:'580px'}}>
                              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/SuperNewLogo_loz2q9" height="68" width="70" />
                              <div style={{flex:'1',paddingLeft:'20px',maxWidth:'300px',color:'#282c3f'}}>
                               Introducing Swiggy Super
                               <div style={{color:'#93959f',fontSize: '14px',marginTop:'2px',maxWidth:'300px'}}>
                               The membership program you have been waiting for. Grab it at unbelievable introductory prices!
                               </div>
                              </div>
                              <button style={{width:'auto',height:'36px',backgroundColor:'#e46d47',boxShadow:'0 1px 3px 0 rgba(0,0,0,.12)',color:'white',border:'none',fontSize:'14px',fontWeight:'600'}}>Get Super Now</button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobview">
            <div  style={{padding:'0 20px'}}>
                                        <div style={{ display:'flex',flexWrap:'nowrap',border: '1px solid #dfdfe7',boxShadow:'0 2px 10px 0 rgba(0,0,0,.07)',alighItems:'center',padding:'10px'}}>
                                                <div >
                                                <img style={{width:'52px'}}
                                                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_104,h_104/swiggy_pop_3x_fz2a63" alt="pop-icon"/>  
                                                </div>
                                                <div style={{marginLeft:'15px',flex:1}}>
                                                <div style={{color: '#3d4152',fontWeight: 600,}}>
                                                    Swiggy Pop
                                                </div>
                                                <div style={{marginTop: '3px', fontSize:'10px',color: '#282c3f'}}> Free Delivery,All Inclusive Prices</div>
                                                </div>
                                                <div>
                                                </div>
                                        </div>
                                    </div>
                                           {/* new */}
                                           <div style={{display:'flex',flexWrap:'nowrap',overflowX:'auto', marginLeft: '20px',paddingBottom:'20px'}}>
                                        
                                            <div style={{flex:'0 0 auto',marginTop:'20px'}}>
                                                <div style={{backgroundColor: '#eff1f6',height: '30px',width:'50px',borderRadius: '3px'}}>
                                                <img style={{width:'30px',marginTop:'10px',marginLeft:'10px',}}
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/gsv9d6xakyjz8ozmlhj1"/>
                                                </div>
                                                <div style={{ textAlign:'center',marginTop:'10px',fontSize:'10px',maxWidth:'50px',wordBreak:'break-word',whiteSpace:'pre-line',textAlign:'center'}}>Only on Swiggy
                                                </div>
                                            </div>

                                             <div style={{flex:'0 0 auto',marginTop:'20px',marginLeft:'30px',}}>
                                                <div style={{backgroundColor: '#eff1f6',height: '30px',width:'50px',borderRadius: '3px'}}>
                                                <img style={{width:'30px',marginTop:'10px',marginLeft:'10px',}}
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/kiw4jpruaqehxkv6rlzz"/> 
                                                </div>
                                            <div>
                                                <div style={{textAlign:'center',marginTop:'10px',fontSize:'10px',maxWidth:'50px',wordBreak:'break-word',whiteSpace:'pre-line',textAlign:'center'}}>Express Delivery</div>
                                            </div>
                                            </div>

                                            <div style={{flex:'0 0 auto',marginTop:'20px',marginLeft:'30px'}}>
                                                <div style={{backgroundColor: '#eff1f6',height: '30px',width:'50px',borderRadius: '3px'}}>
                                                <img style={{width:'30px',marginTop:'10px',marginLeft:'10px',}}
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/humnsoc94aobowrcn7f2"/>
                                                </div>
                                                <div style={{fontSize:'10px',marginTop:'10px',maxWidth:'50px',wordBreak:'break-word',whiteSpace:'pre-line',textAlign:'center'}}>Veg Only</div>
                                            </div>

                                            <div style={{flex:'0 0 auto',marginTop:'20px',marginLeft:'30px'}}>
                                                <div style={{backgroundColor: '#eff1f6',height: '30px',width:'50px',borderRadius: '3px'}}>
                                                <img style={{width:'30px',marginTop:'10px',marginLeft:'10px',}}
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/jsizpq6kqchafmyidgbc"/>    
                                                </div>
                                                <div style={{fontSize:'10px',marginTop:'10px',maxWidth:'50px',wordBreak:'break-word',whiteSpace:'pre-line',textAlign:'center'}}>Pocket Friendly</div>
                                            </div>

                                            <div style={{flex:'0 0 auto',marginTop:'20px',marginLeft:'30px'}}>
                                                <div style={{backgroundColor: '#eff1f6',height: '30px',width:'50px',borderRadius: '3px'}}>
                                                <img style={{width:'30px',marginTop:'10px',marginLeft:'10px'}}
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/bxuxr85ahhkfqievapxa"/>     
                                                </div>
                                                <div style={{fontSize:'10px',marginTop:'10px',maxWidth:'50px',wordBreak:'break-word',whiteSpace:'pre-line',textAlign:'center'}}>Top Rate</div>
                                            </div>
                                    </div> 

            </div>
            </div>
        )
    }
}

export default TwoOffers
