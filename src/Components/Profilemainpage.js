import React, { Component } from 'react'
import { Breadcrumb,  Menu, Icon, Layout, Avatar,Card } from "antd";
import {Button,Tab,Col,Nav,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Myorders from './Myorders'
import Myprofile from './Myprofile'
import Myfavourite from './Myfavourite'
import Wallet from './Wallet'
import Accounts from './Accounts'
import Head from './Head'
const { Header,Content,Footer } = Layout;

export class Profilemainpage extends Component {
    constructor({ match }) {
        super()
        this.match = match
        this.state={
            color:true,
            color1:false,
            color2:false,
            color3:false,
            color4:false,
            name:this.match.params.name
        }
    }

    componentDidMount=async()=>{
        console.log(this.match.params.name,"this.match.params.name")
        await this.setState({name:this.match.params.name})
        let name=this.match.params.name
        console.log(name,"nameeeeee")
         if(name == 'order'){
           await this.setState({color:true,color1:false,color2:false,color3:false,color4:false,name:'order'})
         }else if(name == 'profile'){
           console.log('inside secong if')
           await this.setState({color1:true,color:false,color2:false,color3:false,color4:false,name:'profile'})
           console.log(name,'state name')
         }else if(name == 'address'){
            await this.setState({color2:true,color:false,color1:false,color3:false,color4:false,name:'address'})
         }else if(name == 'wallet'){
           await this.setState({color3:true,color:false,color1:false,color2:false,color4:false,name:'wallet'})
         }else if(name == 'favourite'){
            await this.setState({color4:true,color:false,color1:false,color2:false,color3:false,name:'favourite'})
         }
     }

     colorchange=async()=>{
        console.log('colorchange')
        await this.setState({color:true,color1:false,color2:false,color3:false,color4:false})
      }
      colorchange1=async()=>{
        console.log('colorchange')
        await this.setState({color1:true,color:false,color2:false,color3:false,color4:false})
      }
      colorchange2=async()=>{
        console.log('colorchange')
        await this.setState({color2:true,color:false,color1:false,color3:false,color4:false})
      }
      colorchange3=async()=>{
        console.log('colorchange')
        await this.setState({color3:true,color:false,color2:false,color1:false,color4:false})
      }
      colorchange4=async()=>{
        console.log('colorchange')
        await this.setState({color4:true,color:false,color2:false,color1:false,color3:false})
      }

    render() {
        return (
            <div>
                <Layout>
                    <Header>
                       <Head />
                    </Header>
                    <Content style={{backgroundColor:'white',padding:'40px'}}>
                        <div style={{marginTop:'20px'}}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey={this.state.name} style={{ height: '200px',  width: '100%'}}>
                            <Row style={{ height: '200px',  width: '100%'}}>
                            <div >
                                <Col span={3} style={{marginRight:'100px'}}>
                                    <Nav variant="pills" className="flex-column" >
                                        <Nav.Item style={{fontSize:'15px', width:'200px',backgroundColor:'#edf1f7'}}>
                                          <Nav.Link eventKey="order" onClick={this.colorchange} style={{backgroundColor:this.state.color?'#e46d47': '',color:this.state.color?'white':'black',display:'flex',alignItems:'center',margin:'5px 0px'}}><Icon type="shopping-cart" style={{marginRight:'10px'}}/>My orders</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item style={{fontSize:'15px', width:'200px',backgroundColor:'#edf1f7'}}>
                                          <Nav.Link eventKey="profile" onClick={this.colorchange1} style={{backgroundColor:this.state.color1?'#e46d47': '',color:this.state.color1?'white':'black',display:'flex',alignItems:'center',margin:'5px 0px'}}><Icon type="user" style={{marginRight:'10px'}}/>My profile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item style={{fontSize:'15px', width:'200px',backgroundColor:'#edf1f7'}}>
                                          <Nav.Link eventKey="favourite" onClick={this.colorchange4} style={{backgroundColor:this.state.color4?'#e46d47': '',color:this.state.color4?'white':'black',display:'flex',alignItems:'center',margin:'5px 0px'}}><Icon type="heart" style={{marginRight:'10px'}}/>Favourite</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item style={{fontSize:'15px', width:'200px',backgroundColor:'#edf1f7'}}>
                                          <Nav.Link eventKey="address" onClick={this.colorchange2} style={{backgroundColor:this.state.color2?'#e46d47': '',color:this.state.color2?'white':'black',display:'flex',alignItems:'center',margin:'5px 0px'}}><Icon type="environment" style={{marginRight:'10px'}}/>Manage Address</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item style={{fontSize:'15px', width:'200px',backgroundColor:'#edf1f7'}}>
                                          <Nav.Link eventKey="wallet" onClick={this.colorchange3} style={{backgroundColor:this.state.color3?'#e46d47': '',color:this.state.color3?'white':'black',display:'flex',alignItems:'center',margin:'5px 0px'}}><Icon type="wallet" style={{marginRight:'10px'}}/>My Wallet</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </div>
                            <Col span={9} style={{ width: "75%", height: "auto"}}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="order">
                                    <Myorders />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="profile">
                                    <Myprofile />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="favourite">
                                    <Myfavourite />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="address">
                                    <Accounts />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="wallet">
                                    <Wallet />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                            </Row>
                    </Tab.Container>
                    </div>
                 </Content>
                </Layout>
            </div>
        )
    }
}

export default Profilemainpage
