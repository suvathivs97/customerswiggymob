import React, { Component } from 'react'
import {Row,Col} from 'antd'
export class RestaurantCard extends Component {
    render() {
        return (
            <div>
                <div className="webview">
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
                    <div className="mobview">
                    <Row style={{marginBottom:"10px"}}>
                               <Col span={8}>
                            <div style={{display:'flex',flexwrap:'nowrap',whiteSpace:'nowrap',fontSize:'15px'}}>
                                 <img src="/img/vegIcon.png" style={{height:'10px',margin:'5px 5px 10px 0'}}/>
                                 {this.props.item.item_name}
                                </div> </Col>
                                <Col span={8}>
                               <div style={{cursor: 'pointer',width: '82px',height: '26px', background: '#fff',border: '1px solid #e9e9eb',marginLeft: '30px',fontSize: '.86rem',color: '#7e808c',position: 'relative', contain: 'content'  }} >
                               <Row>
                                   <Col span={8}>
                                       <div style={{cursor: 'pointer', position: 'absolute',left: 0, width: '27.33333px', height: '100%',  textAlign: 'center',color: '#60b246'}}>
                                         <text onClick={e=>this.props.decreament(this.props.item)}>  -</text>
                                       </div>
                                   </Col>
                                   <Col span={8}>
                                       <div style={{cursor: 'pointer', position: 'absolute',left: 0, width: '27.33333px', height: '100%',  textAlign: 'center',color: '#60b246'}}>
                                       {this.props.item.quantity}
                                       </div>
                                   </Col>
                                   <Col span={8}>
                                       <div style={{cursor: 'pointer', position: 'absolute',left: 0, width: '27.33333px', height: '100%',  textAlign: 'center',color: '#60b246'}}>
                                        <text onClick={e=>this.props.increament(this.props.item)}>   + </text>
                                       </div>
                                   </Col>
                               </Row>
                                </div>
                                </Col>
                                <Col span={8}>
                                  <div style={{fontSize:'12px',paddingleft:'30px',float:'right'}}>  ₹ {Number(this.props.item.price) * Number(this.props.item.quantity)}</div>
                                </Col>
                                </Row>
                    </div>
                                    
            </div>
        )
    }
}

export default RestaurantCard
