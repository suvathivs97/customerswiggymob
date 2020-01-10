import React, { Component } from 'react'
import {NavLink}from'react-router-dom'
import {Icon} from'antd'
 
export class Login extends Component {
    back=()=>{
        window.location.href="/"
    }

    render() {
        return (
            <div>
<div style={{height: '100%'}}>
<div style={{height: '160px',position: 'relative',padding:'16px', backgroundColor: 'rgba(211,219,234,.3)'}}>
    <img style={{position: 'absolute', right: '24px', bottom: '0', maxHeight: '134px'}} height="134" width="75" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/create_account_graphics_2x_brdvrk"/>
    <div style={{ cursor:'pointer',position: 'absolute',top: 0,left: 0,textAlign: 'left', padding: '16px 16px',}}>
        <Icon type="arrow-left"  onClick={this.back}/>
    </div>
    <div style={{cursor: 'pointer',position: 'absolute', bottom: '20px',}}>
         <div style={{fontSize:'18px',fontWeight:'bold'}}>LOGIN</div>
         {/* <div stye={{marginRight: '85px',color: '#7e808c',fontSize:'6px',}}> */}
         <div style={{fontSize:'12px',color:'#7e808c',marginRight:'85px'}}>   Enter your phone number to continue</div>
         <div  style={{fontSize:'12', }}>or 
         <NavLink to="/SignUp" >
         <text style={{color:'#fc8019',cursor:'pointer',fontSize:'15px',textDecoration:'none',marginLeft:'4px'}}>create an account</text>
         </NavLink></div>
          
        
     </div>
</div>
<div style={{padding: '5px 16px',position: 'relative'}}>
    <div style={{marginTop: '50px', padding: 0, display: 'block',position: 'relative'}}>
    <label style={{fontWeight:'600',marginBottom:'30px',position: 'absolute',bottom: '13px',left: 0,fontSize:'12px'}}
     value={this.state.phoneno}
     onChange={e=>this.setState({phoneno:e.target.value})}>PHONE NUMBER</label> 
        <input type='tel' placeholder="Enter your phone number" style={{backgroundColor: 'transparent',lineHeight: 'normal', border: 'none', borderBottom: '1px solid #bebfc5',  outline: 0,  height: '42px', width: '100%', fontSize: '15px', margin: 0,padding: 0,}}></input>
    </div>
    <div style={{marginTop:'30px',position: 'relative',transform: 'translateZ(0)'}}>
        <button style={{lineHeight:'42px',background: '0 0', border: 'none',width: '100%', textDecoration: 'none',cursor: 'pointer' ,display: 'inline-block', textAlign: 'center', backgroundColor: '#fc8019',  color: '#fff',fontWeight: '600',fontSize:'14px'}}
        onClick={this.login}>
            CONTINUE
        </button>
    </div>
</div>
</div>
</div>

)
    }
}
export default Login
