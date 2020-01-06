import React, { Component } from 'react';
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

export class MobLocation extends Component {
    back =()=>{
        window.location.href="/"
    }
    render() {
        return (
            
            <div className="mobview">
                <div style={{textAlign:'center',padding:'10px',height:'30px'}}>
                    <img src="/img/left arrow.png" onClick={this.back} style={{height:"25px",float:'left'}}/>
               <input  type="text" class="no-outline" placeholder="Enter area, street name.." style={{borderTopStyle:'hidden',
         borderBottomStyle:'hidden',
         borderRightStyle:'hidden',
         borderLeftStyle:'hidden',backgroundColor:'white'}}/>
         <img src='/img/search.png'style={{height:"20px",float:'right'}}/>
         
         </div>
         
         <div style={{backgroundColor:'#eee',height:'15px',marginTop:'20px'}}></div>
         <Row>
            
            <div style={{padding:'20px'}}>
              <img src="/img/current.png" style={{width:'18px',height:'18px'}}></img>
              <a style={{ marginLeft:'15%'}}>Get Current Location</a>
              <div style={{fontSize:'13px',color:'#93959f',marginTop:'5px',marginLeft:'25%'}}>Using GPS</div>
              
              </div>
              <hr style={{paddingBottom:'54px'}}></hr>
         </Row>
        
         </div>
        )
    }
}

export default MobLocation
