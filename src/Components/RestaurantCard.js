import React, { Component } from 'react'
import {Row,Col} from 'antd'
export class RestaurantCard extends Component {
    render() {
        return (
            <div>
                   <Row>
                                    <div  style={{paddingTop:'20px'}}>
                                        <Col span={3} style={{width:'30px',height:'40px'}}>
                                        <img src="/img/vegIcon.png" style={{height:'10px',width:'10px'}} />
                                        </Col>
                                        <Col span={10} style={{maxwidth:'130px',height:'40px',display:'flex',fontWeight:'400',fontSize:'14px'}}>
                                        {this.props.item.item_name}
                                        </Col>
                                        <Col span={6} >
                                            <div style={{borderStyle:'solid',borderWidth:'1px',borderColor:'#60b246',textAlign:'center'}}>
                                                <text style={{margin:'0px 10px',cursor:'pointer'}} onClick={e=>this.props.decreament(this.props.item)}>-</text>{this.props.item.quantity}
                                                <text style={{margin:'0px 10px',cursor:'pointer'}} onClick={e=>this.props.increament(this.props.item)}>+</text>
                                            </div>
                                        </Col>  
                                        <div style={{float:'right'}}>
                                            <Col style={{fontSize:'13px',color:'rgb(104, 107, 120)'}}>
                                            ₹ {Number(this.props.item.price) * Number(this.props.item.quantity)}
                                            </Col>  
                                        </div>                                
                                    </div>
                    </Row>
                                    
            </div>
        )
    }
}

export default RestaurantCard
