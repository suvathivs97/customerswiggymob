import React, { Component } from 'react'
import {
    Layout,
    Menu,
    Col,
    Input,
    Row,
    Icon,
    Button,
    Badge,
    Modal,
    Avatar,
    Divider,
    Dropdown,
    Select,Drawer,message
  } from "antd";
  import {Link} from 'react-router-dom'
import axios from 'axios';
import port from '../port'

message.config({
  top: 150,
  duration: 2,
  maxCount: 3,
});

const { Header } = Layout;

export class Head extends Component {
  state = { visible: false, 
            placement: 'left',
            login:false,
            loginPlace:'right',
            OtpLogin:false,
            phoneno:'',otp:'',
            signUp:false,
            orders:true,
            verify:false };


componentDidMount=async()=>{
  let id=localStorage.getItem('id')
  if(id == null && id == undefined){
    await this.setState({orders:false})
  }else{
    await this.setState({orders:true})
  }
}
 

//Location
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  closeDrawer=async()=>{
      await this.setState({visible:false})
  }

  //Login
  loginDrawer=async()=>{
    await this.setState({login:true,LoginOrOtp:true})
  }
  CloseLoginDrawer=async()=>{
    await this.setState({login:false})
  }
  loginSubmit=async()=>{
    if(this.state.phoneno != ''){
      const res=await axios.post(port+'/sendOTPLogin',{phoneno:this.state.phoneno})
      console.log(res,"response")
      if(res.data.success){
        message.success(res.data.message)
        await this.setState({OtpLogin:true,LoginOrOtp:false})
      }else{
        message.error(res.data.message)
      }
    }else{
      message.error('Please enter the phone number')
    }

  }

  //Otp Login
  BackToLogin=()=>{
     this.setState({login:true,LoginOrOtp:true,OtpLogin:false})
  }
  CloseOtpLogin=()=>{
    this.setState({login:false,OtpLogin:false})
  }
  LoginOtpSubmit=async()=>{
    if(this.state.otp != ''){
      const res=await axios.post(port+'/verifyOTPLogin',{otp:this.state.otp,phoneno:this.state.phoneno})
      if(res.data.success){
        localStorage.setItem('id',res.data.name)
        await this.setState({login:false,OtpLogin:false})
      }else{
        message.error(res.data.message) 
      }
    }else{
      message.error('Please enter OTP')
    }
  }

  //SignUp

  SignUpDrawer=()=>{
    this.setState({signUp:true,login:false,OtpLogin:false})
  }
  CloseSignUpDrawer=()=>{
    this.setState({signUp:false,login:false,OtpLogin:false})
  }
  signupSubmit=async()=>{
    
    this.setState({signUp:false,login:false,OtpLogin:false})
    localStorage.setItem('id','123456')
  }
  GoTologinDrawer=async()=>{
    await this.setState({login:true,LoginOrOtp:true,signUp:false})
  }

  //Logout
  logout=async()=>{
    localStorage.removeItem('id')
    window.location.reload()
  }


    render() {
      const menu = (
        <Menu style={{width:'150px'}}>
           <Menu.Item>
             <a href="/Profilemainpage/profile" style={{textDecoration:'none'}}>Profile</a>
           </Menu.Item>
          <Menu.Item>
            <a href="/Profilemainpage/order" style={{textDecoration:'none'}}>
              Orders
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="/Profilemainpage/favourite" style={{textDecoration:'none'}}>
              Favourite
            </a>
          </Menu.Item>
          <Menu.Item>
            <a onClick={this.logout} style={{textDecoration:'none'}}>
              Logout
            </a>
          </Menu.Item>
        </Menu>
      );
        return (
            <div>
              <Layout className="layout">
                <Header className="heading">
                    <Row>
                    <div className="row" style={{padding:'10px 10px 10px 10px'}}>
                        <div style={{paddingLeft:'6%'}}>
                           <img src="./logo192" />
                        </div>
                          <div style={{display:'flex',cursor:'pointer',marginLeft:'30px',maxWidth:'300px',alignItems:'center',marginBottom:'-1px',height:'100%'}}>
                            <a style={{textDecoration:'none'}} onClick={this.showDrawer}>
                              <span style={{float:'left',color:'#3d4152',fontWeight:'700'}}>
                                <text style={{display:'block',fontWeight:"700",color:'#3d4152',whiteSpace:'nowrap',borderBottomWidth:'2px',overflow:'hidden',minWidth:'30px',fontSize:'14px',textOverflow:'ellipsis'}}>Saravanmpatty</text>
                              </span>
                              <text style={{fontSize:'14px',marginLeft:'5px',paddingLeft:'5px',color:'#686b78',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',display:'block'}}>Coimbatore,Tamilnadu</text>
                              {/* <Icon type="down" style={{color:'#fc8019',fontSize:'12px',paddingLeft:'5px',fontWeight:"700"}} /> */}
                            </a>
                            <Drawer
                                title={<Icon type="close" onClick={this.closeDrawer} />}
                                // placement={this.state.placement}
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.visible}
                                width="400px"
                             >
                                <div style={{padding:'20px 0px'}}>
                                  <Input style={{boxShadow:'1px solid #d4d5d9',
                                                 border:'1px solid #d4d5d9',
                                                height:'50px'}}
                                         placeholder="Search for area,streat Name.. "></Input>
                                </div>
                                <div style={{border:'1px solid #d4d5d9',marginBottom:'5%'}}>
                                  <div style={{fontSize:'16px',color:'#282c3f',fontWeight:'500',padding:'5px 24px',minHeight:'70px',display:'flex',alignItems:'center'}}>
                                   <div>
                                       <img src="/img/current.png" style={{width:'18px',height:'18px',marginRight:'4px'}}></img>Get Current Location
                                       <div style={{fontSize:'13px',color:'#93959f',marginTop:'5px',marginLeft:'15%'}}>Using GPS</div>
                                   </div>
                                  </div>
                                </div>
                                <div style={{border:'1px solid #d4d5d9',padding:'10px 0px',marginBottom:'5%'}}>
                                  <div style={{color:'#7e808c',fontSize:'12px',marginLeft:'56px'}}>SAVED ADDRESS</div>
                                  <Row style={{padding:'5px 24px'}}>
                                    <Col span={2} >
                                      <Icon type="home" />
                                    </Col>
                                    <Col span={20}>
                                      <Row style={{fontSize:'16px',color:'#282c3f',fontWeight:'500'}}>Home</Row>
                                      <Row style={{fontSize:'13px',color:'#93959f',marginTop:'5px'}}>12, sara complex, Saravanampatti, Coimbatore, Tamil Nadu 641035, India</Row>
                                    </Col>
                                  </Row>
                                </div>
                            </Drawer>
                          </div>
                        
                        <ul style={{flex:'1',display:'flex',flexDirection:'row-reverse',alignItems:'center',height:'100%',listStyleType:'none'}}>
                          <li style={style}>
                           <div style={eachitem}>
                            <a href="/Cartpage" style={combine}>
                               <Icon type="shopping-cart" style={icon}/>
                               <text style={text}>Cart</text>
                            </a>
                           </div>
                          </li>
                          <li style={style}>
                            <div style={eachitem}>
                              <a style={combine} onClick={this.loginDrawer}>
                                <Icon type="login" style={icon}/>
                                {this.state.orders?
                                 <Dropdown overlay={menu} >
                                   <text style={text}>Name</text>
                                 </Dropdown>
                                 :
                                 <text style={text}>Sign in</text>
                                }
                              </a>
                              {this.state.LoginOrOtp?
                                  <Drawer
                                    title={<Icon type="close" onClick={this.CloseLoginDrawer} />}
                                    placement={this.state.loginPlace}
                                    closable={false}
                                    onClose={this.CloseLoginDrawer}
                                    visible={this.state.login}
                                    width="400px"
                                  >
                                    <div style={{padding:'0px 20px'}}>
                                      <div style={{display:'flex',alignItems:'center'}}>
                                          <Col span={19} style={{float:'left'}}>
                                            <div style={{fontSize:'25px',fontWeight:'500'}}>Login</div>
                                            <div>or <text style={{color:'#fc8019',cursor:'pointer'}} onClick={this.SignUpDrawer}>Create an account</text></div>
                                          </Col>
                                          <Col span={6} style={{float:'right'}}>
                                              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" width="80" height="85"></img>
                                          </Col>
                                      </div>
                                      <div style={{marginTop:'20px'}}>
                                        <input placeholder="Phone Number"
                                               style={{padding:'15px',width:'100%'}}
                                               onChange={e=>this.setState({phoneno:e.target.value})}
                                        >
                                        </input>
                                      </div>
                                      <div style={{marginTop:'20px'}}>
                                          <button style={{backgroundColor:'#fc8019',border:'none',textAlign:'center',width:'100%',padding:'10px'}} onClick={this.loginSubmit}>Login</button>
                                      </div>
                                    </div>
                                </Drawer>
                             :
                              <Drawer
                                  title={<Icon type="arrow-left" onClick={this.BackToLogin}/>}
                                  placement={this.state.loginPlace}
                                  closable={false}
                                  onClose={this.CloseOtpLogin}
                                  visible={this.state.OtpLogin}
                                  width="400px"
                              >
                                  <div style={{padding:'0px 20px'}}>
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <Col span={19} style={{float:'left'}}>
                                          <div style={{fontSize:'25px',fontWeight:'500'}}>Enter OTP</div>
                                          <div>We've sent an OTP to your phone number.</div>
                                        </Col>
                                        <Col span={6} style={{float:'right'}}>
                                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" width="80" height="85"></img>
                                        </Col>
                                    </div>
                                    <div style={{marginTop:'20px'}}>
                                      <input placeholder="Phone Number"
                                             style={{padding:'15px',width:'100%'}}
                                             value={this.state.phoneno}
                                             onChange={e=>this.setState({phoneno:e.target.value})}
                                      >
                                      </input>
                                    </div>
                                    <div style={{marginTop:'20px'}}>
                                      <input placeholder="OTP"
                                             style={{padding:'15px',width:'100%'}}
                                             value={this.state.otp}
                                             onChange={e=>this.setState({otp:e.target.value})}
                                      >
                                      </input>
                                    </div>
                                    
                                    <div style={{marginTop:'20px'}}>
                                        <button style={{backgroundColor:'#fc8019',border:'none',textAlign:'center',width:'100%',padding:'10px'}} onClick={this.LoginOtpSubmit}>Verify OTP</button>
                                    </div>
                                  </div>
                              </Drawer>
                             }
                              <Drawer
                                    title={<Icon type="close" onClick={this.CloseSignUpDrawer} />}
                                    placement={this.state.loginPlace}
                                    closable={false}
                                    onClose={this.CloseSignUpDrawer}
                                    visible={this.state.signUp}
                                    width="400px"
                                  >
                                    <div style={{padding:'0px 20px'}}>
                                      <div style={{display:'flex',alignItems:'center'}}>
                                          <Col span={19} style={{float:'left'}}>
                                            <div style={{fontSize:'25px',fontWeight:'500'}}>Sign up</div>
                                            <div>or <text style={{color:'#fc8019',cursor:'pointer'}} onClick={this.GoTologinDrawer}>login to your account</text></div>
                                          </Col>
                                          <Col span={6} style={{float:'right'}}>
                                              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" width="80" height="85"></img>
                                          </Col>
                                      </div>
                                      <div style={{marginTop:'20px'}}>
                                        
                                        <input placeholder="Phone Number"
                                              style={{padding:'15px',width:'100%'}}
                                              value={this.state.phoneno}
                                              onChange={e=>this.setState({phoneno:e.target.value})}
                                        >
                                        </input>
                                      </div>
                                      <div style={{marginTop:'20px'}}>
                                          <input placeholder="Name"
                                                style={{padding:'15px',width:'100%'}}
                                                value={this.state.name}
                                                onChange={e=>this.setState({name:e.target.value})}
                                                disabled={!this.state.verify}
                                          >
                                          </input>
                                      </div>
                                      <div style={{marginTop:'20px'}}>
                                          <input placeholder="Email"
                                                style={{padding:'15px',width:'100%'}}
                                                value={this.state.email}
                                                onChange={e=>this.setState({email:e.target.value})}
                                                disabled={!this.state.verify}
                                          >
                                          </input>
                                      </div>
                                      <div style={{marginTop:'20px'}}>
                                          <input placeholder="Password"
                                                style={{padding:'15px',width:'100%'}}
                                                value={this.state.password}
                                                onChange={e=>this.setState({password:e.target.value})}
                                                disabled={!this.state.verify}
                                          >
                                          </input>
                                      </div>
                                      <div style={{marginTop:'20px'}}>
                                          <button style={{backgroundColor:'#fc8019',border:'none',textAlign:'center',width:'100%',padding:'10px'}} onClick={this.signupSubmit}>CONTINUE</button>
                                      </div>
                                    </div>
                                </Drawer>
                            </div>
                          </li>
                          <li style={style}>
                            <div style={eachitem}>
                              <a href="" style={combine}>
                                <Icon type="question-circle" style={icon}/>
                                <text style={text}>Help</text>
                              </a>
                            </div>
                          </li>
                          <li style={style}>
                            <div style={eachitem}>
                              <a href="" style={combine}>
                                <Icon type="percentage" style={icon}/>
                                <text style={text}>Offers</text>
                              </a>
                            </div>
                          </li>
                          <li style={style}>
                          <div style={eachitem}>
                            <a href="" style={combine}>
                                <Icon type="search" style={icon}/>
                                <text style={text}>Search</text>
                              </a>
                            </div>
                          </li>
                        </ul>
                    </div>
                    </Row>
                    {/* <Menu align="right"
                            theme=""
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' ,borderBottom:'200px'
                            }}
                            >
                            <Menu.Item key="1" >
                               <Icon type="search" />
                               <h6>Search</h6>
                            </Menu.Item>
                            <Menu.Item key="2">
                               <Icon type="percentage" />
                               <h6>Offers</h6>
                            </Menu.Item>
                            <Menu.Item key="3">
                            
                            </Menu.Item>
                            <Menu.Item key="4">
                            
                            </Menu.Item>
                    </Menu> */}
                </Header>
              </Layout>
            </div>
        )
    }
}

const style={
  marginRight: '60px',color: '#3d4152',fontSize: '16px',fontWeight: '500'
}

const eachitem={
 position:'relative',
 height:'80px',
 cursor:'pointer'
}
const combine={
  display:'flex',
  alignItems:'center',
  paddingLeft:'28px',
  textDecoration:'none'
}
const icon={
  color:'#3d4152',
  paddingRight:'5px',
  fontSize:'15px',
}
const text={
  fontSize:'14px',
  fontWeight:"500",
  color:'#3d4152'
}

export default Head
