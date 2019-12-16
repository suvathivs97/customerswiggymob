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
    Select
  } from "antd";
  const { Header } = Layout;

export class Head extends Component {
    render() {
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
                          <span style={{float:'left',color:'#3d4152',fontWeight:'700'}}>
                            <text style={{display:'block',fontWeight:"700",color:'#3d4152',whiteSpace:'nowrap',borderBottomWidth:'2px',overflow:'hidden',minWidth:'30px',fontSize:'14px',textOverflow:'ellipsis'}}>Saravanmpatty</text>
                          </span>
                           <text style={{fontSize:'14px',marginLeft:'5px',paddingLeft:'5px',color:'#686b78',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',display:'block'}}>Coimbatore,Tamilnadu</text>
                           <Icon type="down" style={{color:'#fc8019',fontSize:'12px',paddingLeft:'5px',fontWeight:"700"}} />
                        </div>
                        <ul style={{flex:'1',display:'flex',flexDirection:'row-reverse',alignItems:'center',height:'100%',listStyleType:'none'}}>
                          <li style={style}>
                           <div style={eachitem}>
                            <a href="" style={combine}>
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
