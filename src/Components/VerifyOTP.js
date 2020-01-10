import React, { Component } from 'react'
import {Icon,Row,Col}from 'antd'

export class VerifyOTP extends Component {
    back =()=>{
        console.log('close');
        window.location.href="/"
    }
    render() {
        return (
            <div className="mobview">
                <div style={{padding: '16px',backgroundColor: 'rgba(211,219,234,.3)',height: '160px',position: 'relative'}}>
                     <div style={{ cursor:'pointer',position: 'absolute',top: 0,left: 0,textAlign: 'left', padding: '16px 16px',}}>
                                        <Icon type="arrow-left"  onClick={this.back}/>
                    </div>
                    <div style={{cursor: 'pointer',position: 'absolute', bottom: '20px',}}>
                        <div style={{fontSize:'18px',fontWeight:'bold'}}>VERIFY DETAILS</div>
                        <div style={{fontSize:'12px',color:'#7e808c',marginRight:'85px'}}>Send OTP to  </div>
                    </div>
                </div>
                <div style={{padding:'5px 16px',position:'relative'}}>
                <div style={{marginTop: '50px', padding: 0, display: 'block',position: 'relative'}}>
                                    <label style={{fontWeight:'600',marginBottom:'30px',position: 'absolute',bottom: '13px',left: 0,fontSize:'12px'}}>SEND OTP</label> 
                                        <input type='tel' placeholder="Enter your phone number" style={{backgroundColor: 'transparent',lineHeight: 'normal', border: 'none', borderBottom: '1px solid #bebfc5',  outline: 0,  height: '42px', width: '100%', fontSize: '15px', margin: 0,padding: 0,}}></input>
                                    </div>
                                    <div style={{marginTop:'30px',position: 'relative',transform: 'translateZ(0)'}}>
                                        <button style={{lineHeight:'42px',background: '0 0', border: 'none',width: '100%', textDecoration: 'none',cursor: 'pointer' ,display: 'inline-block', textAlign: 'center', backgroundColor: '#fc8019',  color: '#fff',fontWeight: '600',fontSize:'14px'}}>
                                            VerifyOTP
                                        </button>
                                        </div>
             </div>
                
            </div>
        )
    }
}

export default VerifyOTP
