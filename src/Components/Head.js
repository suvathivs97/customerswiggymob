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
    Select,Drawer
  } from "antd";
  import {Link} from 'react-router-dom'
  const { Header } = Layout;

export class Head extends Component {
  state = {  placement: 'left',webview:true,
  visible: false };
 
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

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };
  closeDrawer=async()=>{
      await this.setState({visible:false})
  }

  componentDidMount= async()=>{
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log(isMobile,"mobilee")
    if(isMobile){
    await this.setState({webview:false})
    }
    else{
    await this.setState({webview:true})
    }
    }

    render() {
      console.log('web view',this.state.webview)
        return (
          <div>
            {this.state.webview?
            <div className="webview">
              {/* <Layout className="layout"> */}
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
                                placement={this.state.placement}
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
                              <a href="" style={combine}>
                                <Icon type="login" style={icon}/>
                                <text style={text}>Sign in</text>
                              </a>
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
              {/* </Layout> */}
            </div>
              :
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
             }
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
