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
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Location from './Location'

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
            phoneno:'',otp:'',mail:'',
            signUp:false,
            orders:true,
            verify:false,
            submitname:'SEND OTP',
            address:'',
            disphone:false,
            mappedAddress:[],
            name:'',
            selectedPlace:'',
            type:'Select Location',
            markObj :{ lat: '',
            lng: ''} };


componentDidMount=async()=>{
  let id=localStorage.getItem('id')
  let name=localStorage.getItem('name')
  let type=localStorage.getItem('type')
  let address=localStorage.getItem('address')
  
  if(id == null && id == undefined){
    await this.setState({orders:false})
    if(name != null && name != undefined){
      await this.setState({name})
    }
    
  }else{
    
    await this.setState({orders:true})
    if(name != null && name != undefined){
      await this.setState({name})
    }
    let viewAddress=await axios.post(port+`/viewAddress?customerId=${id}`)
            if(viewAddress.data.address){
                await this.setState({mappedAddress:viewAddress.data.address})
            }
  }
  if(type!= undefined && type != null && address != undefined && address != null){
    await this.setState({type,selectedPlace:address})
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
    if(!this.state.orders){
      await this.setState({login:true,LoginOrOtp:true})
    }else{
      window.location.href='/Profilemainpage/profile'
    }
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
        await this.setState({OtpLogin:true,LoginOrOtp:false,disphone:true})
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
        localStorage.setItem('id',res.data.customerId)
        localStorage.setItem('name',res.data.name)
        await this.setState({login:false,OtpLogin:false,name:res.data.name})
        message.success('Successfully login in')
        setTimeout(() => {
          window.location.reload()
        }, 1000);
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
  signupSubmit=async(data)=>{
        if(data == 'send'){
          if(this.state.phoneno != ''){
              let res=await axios.post(port+'/sendOTPSignup',{phoneno:this.state.phoneno})
              console.log(res,"signupres")
              if(res.data.success){
                  message.success(res.data.message)
                  await this.setState({verify:true,submitname:'CONTINUE'})
              }else{
                  message.error(res.data.message)
              }
          }else{
            message.error('Please enter the required parameters')
          }
        }else if(data == 'cont'){
          if(this.state.phoneno != '' && this.state.otp != '' && this.state.name != '' && this.state.mail != ''){
            let res=await axios.post(port+'/verifyOTPSignup',{phoneno:this.state.phoneno,otp:this.state.otp,name:this.state.name,mail:this.state.mail})
            console.log(res,'res for verifyOTPSignup')
            if(res.data.success){
                  message.success('Successfully signed up')
                  localStorage.setItem('id',res.data.customerId)
                  localStorage.setItem('name',res.data.name)
                  await this.setState({signUp:false,login:false,OtpLogin:false,phoneno:'',otp:'',name:'',mail:'',name:res.data.name})
                  setTimeout(() => {
                    window.location.reload()
                  }, 1000);
            }else{
                  message.error(res.data.message)
            }
          }else{
             message.error('Please enter the required parameters')
          }
        }
  }
  GoTologinDrawer=async()=>{
    await this.setState({login:true,LoginOrOtp:true,signUp:false})
  }

  //Logout
  logout=async()=>{
    localStorage.removeItem('id')
    window.location.reload()
  }

  handleChange = address => {
    this.setState({ address });
  };

handleSelect = async(address) => {
  let addresslatlng=await geocodeByAddress(address)
  console.log(addresslatlng[0],"address")
  let result=await getLatLng(addresslatlng[0])
  // console.log(result,"result")
  await this.setState({markObj:{lat:result.lat,lng:result.lng}})
  if(addresslatlng[0]){
      await this.setState({address:addresslatlng[0].formatted_address,visible:false,viewaddress:true})
  }
}

getGeoLocation = async(e) => {
  e.preventDefault()
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          position => {
                this.setState({markObj:{lat:position.coords.latitude,lng:position.coords.longitude}})
               axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyASz1UkWHmuSBq5Obktwpapwunp3UI3OQo`)
               .then(async(res)=>{
               if(res.data.results[0]){
                  console.log(res.data.results[0].address_components,"position")   
                  let address= res.data.results[0].formatted_address
                  console.log(address,"address")
                  await this.setState({address,visible:false,viewaddress:true})

               }
               
              }           
            )
          }
          
      )
     
  } else {
       console.log('error')
  }
}

viewadd=async()=>{
    await this.setState({viewaddress:false})
}

goback=async()=>{
  await this.setState({visible:true})
}

selectAddress=async(p)=>{
  console.log(p,'selected address ')
  localStorage.setItem('address',p.address)
  localStorage.setItem('type',p.type)
  await this.setState({selectedPlace:p.address,type:p.type,visible:false,viewaddress:false})

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
              <div className='webview'>
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
                                <text style={{display:'block',fontWeight:"700",color:'#3d4152',whiteSpace:'nowrap',borderBottomWidth:'2px',overflow:'hidden',minWidth:'30px',fontSize:'14px',textOverflow:'ellipsis'}}>{this.state.type}</text>
                              </span>
                              <text style={{fontSize:'14px',marginLeft:'5px',paddingLeft:'5px',color:'#686b78',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',display:'block',width:'200px'}}>{this.state.selectedPlace} </text>
                              
                              {/* <Icon type="down" style={{color:'#fc8019',fontSize:'12px',paddingLeft:'5px',fontWeight:"700"}} /> */}
                            </a>
                            <Drawer
                                title={<Icon type="close" onClick={this.closeDrawer} />}
                                placement={this.state.placement}
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.visible}
                                width="400px"
                            >
                                <div style={{padding:'20px 0px'}}>
                                  {/* <Input style={{boxShadow:'1px solid #d4d5d9',
                                                 border:'1px solid #d4d5d9',
                                                height:'50px'}}
                                         placeholder="Search for area,streat Name.. "></Input> */}
                                         <div  className="Searchboxfff">
                                    <PlacesAutocomplete
                                        value={this.state.address}
                                        onChange={this.handleChange}
                                        onSelect={this.handleSelect}
                                    >
                                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                        <div>
                                        <Input
                                            {...getInputProps({
                                            placeholder: 'Search Places ...',
                                            className: 'location-search-input',
                                            })}
                                            style={{width:'340px'}}
                                            value={this.state.address}
                                        />
                                        <div className="autocomplete-dropdown-container">
                                            {loading && <div>Loading...</div>}
                                            {suggestions.map(suggestion => {
                                            const className = suggestion.active
                                                ? 'suggestion-item--active'
                                                : 'suggestion-item';
                                            // inline style for demonstration purpose
                                            const style = suggestion.active
                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                            return (
                                                <div
                                                {...getSuggestionItemProps(suggestion, {
                                                    className,
                                                    style,
                                                })}
                                                >
                                                <span>{suggestion.description}</span>
                                                </div>
                                            );
                                            })}
                                        </div>
                                        </div>
                                    )}
                                    </PlacesAutocomplete>
                                </div>
                                </div>
                                <a style={{textDecoration:'none'}} onClick={this.getGeoLocation}>
                                  <div style={{border:'1px solid #d4d5d9',marginBottom:'5%'}}>
                                    <div style={{fontSize:'16px',color:'#282c3f',fontWeight:'500',padding:'5px 24px',minHeight:'70px',display:'flex',alignItems:'center'}}>
                                    <div>
                                        <img src="/img/current.png" style={{width:'18px',height:'18px',marginRight:'4px'}}></img>Get Current Location
                                        <div style={{fontSize:'13px',color:'#93959f',marginTop:'5px',marginLeft:'15%'}}>Using GPS</div>
                                    </div>
                                    </div>
                                  </div>
                                </a>
                                <div style={{border:'1px solid #d4d5d9',padding:'10px 0px',marginBottom:'5%'}}>
                                  <div style={{color:'#7e808c',fontSize:'12px',marginLeft:'56px'}}>SAVED ADDRESS</div>
                                  {this.state.mappedAddress.map(p=>{
                                    return(
                                    <a style={{textDecoration:'none'}} onClick={e=>this.selectAddress(p)} key={p._id}>
                                      <Row style={{padding:'5px 24px'}}>
                                        {/* <Col span={2} >
                                          <Icon type="home" />
                                        </Col>
                                        <Col span={20}> */}
                                          <Row style={{fontSize:'16px',color:'#282c3f',fontWeight:'500'}}>{p.type}</Row>
                                          <Row style={{fontSize:'13px',color:'#93959f',marginTop:'5px'}}>{p.address}</Row>
                                        {/* </Col> */}
                                        <hr style={{borderStyle:'dashed',marginTop:'15px'}}/>
                                      </Row>
                                      
                                    </a>
                                  )})}
                                </div>
                            </Drawer>
                            {this.state.viewaddress?
                               <Location viewadd={this.viewadd} address={this.state.address} markObj={this.state.markObj} goback={this.goback}/>
                               :<div style={{display:'none'}}></div>
                            }
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
                                   <text style={text}>{this.state.name}</text>
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
                                             disabled={this.state.disphone == true}
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
                                        {this.state.verify == false?
                                          <input placeholder="Phone Number"
                                                 style={{padding:'15px',width:'100%'}}
                                                 value={this.state.phoneno}
                                                 onChange={e=>this.setState({phoneno:e.target.value})}
                                          >
                                          </input>
                                          :
                                          <input placeholder="Enter OTP"
                                                 style={{padding:'15px',width:'100%'}}
                                                 value={this.state.otp}
                                                 onChange={e=>this.setState({otp:e.target.value})}
                                          >
                                          </input>
                                        }
                                      </div>
                                      <div style={{marginTop:'20px'}}>
                                          <input placeholder="Name"
                                                style={{padding:'15px',width:'100%'}}
                                                value={this.state.name}
                                                onChange={e=>this.setState({name:e.target.value})}
                                                disabled={this.state.verify == false}
                                          >
                                          </input>
                                      </div>
                                      <div style={{marginTop:'20px'}}>
                                          <input placeholder="Email"
                                                style={{padding:'15px',width:'100%'}}
                                                value={this.state.mail}
                                                onChange={e=>this.setState({mail:e.target.value})}
                                                disabled={this.state.verify == false}
                                          >
                                          </input>
                                      </div>
                                      <div style={{marginTop:'20px'}}>
                                          <input placeholder="Password"
                                                style={{padding:'15px',width:'100%'}}
                                                value={this.state.password}
                                                onChange={e=>this.setState({password:e.target.value})}
                                                disabled={this.state.verify == false}
                                          >
                                          </input>
                                      </div>
                                      <div>
                                        {this.state.submitname == 'SEND OTP'?
                                        <div style={{marginTop:'20px'}}>
                                            <button style={{backgroundColor:'#fc8019',border:'none',textAlign:'center',width:'100%',padding:'10px'}} onClick={e=>this.signupSubmit('send')}>{this.state.submitname}</button>
                                        </div>
                                        :
                                        <div style={{marginTop:'20px'}}>
                                            <button style={{backgroundColor:'#fc8019',border:'none',textAlign:'center',width:'100%',padding:'10px'}} onClick={e=>this.signupSubmit('cont')}>{this.state.submitname}</button>
                                        </div>
                                        }
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
            <div className='mobview'>
              
              
              <header  style={{
                padding:'10px 0 0 10px',alignItems: 'center', borderBottom: '1px solid #e9e9eb'
              }}>
                <Row>
              <Col span={12}>
                <a href="/MobLocation" style={{fontSize:'12px',
                fontWeight: "600",color:'black',textDecoration:'none'}}>Others</a>
                  <div style={{fontSize:'10px'}}>Coimbatore,Tamilnadu</div>
                </Col>
                
                <Col span={12}>
                <a href='/Moboffers' style={{fontSize:'12px',paddingRight:'10px',color:'black',textDecoration:'none',float:'right'}}>
                  <img style={{height:'25px'}} src='/img/service.png'/> Offers</a>
                  </Col>
                  </Row>
               
              </header>
            
          </div>
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

// export default Head
export default GoogleApiWrapper({
  apiKey: ("AIzaSyASz1UkWHmuSBq5Obktwpapwunp3UI3OQo")
})(Head)
