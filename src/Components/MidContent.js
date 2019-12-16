import React, { Component } from 'react'
import {Row,Col} from 'antd'
export class MidContent extends Component {
    render() {
        return (
            <Row>
            <div>

                <div style={{padding:'0 20px'}}>
                    <div style={{position:'relative',maxWidth:'1200px',minWidth:'1200px',margin:'0 auto'}}> 
                        <div style={{display:'flex'}}>
                            <div style={{width:'254px',position:'relative'}}>
                              <div style={{height:'545px',boxShadow:'0 2px 4px 0 rgba(48,56,97,.2)'}}> 
                                <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
                                    <div style={{height:'445px',overflow:'hidden',position:'relative'}}>
                                        <div style={{position:'relative',overflow:'hidden',height:'100%',width:'100%'}}>
                                            <div>
                                                <a href="#filter 11">
                                                    <div style={{backgroundColor:'#e46d47',color:'#fff'}}>
                                                    <div style={{display:'flex',alignItems:'center',height:'100%',justifyContent:'center',height:'85px',display:'flex',flexDirection:'column',padding:'0 20px'}}>
                                                        Popular Brands
                                                    </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#filter 12">
                                                    <div style={{backgroundColor:'',color:'black'}}>
                                                    <div style={{display:'flex',alignItems:'center',height:'100%',justifyContent:'center',height:'85px',display:'flex',flexDirection:'column',padding:'0 20px'}}>
                                                        Express Delivery
                                                    </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#filter 13">
                                                    <div style={{backgroundColor:'',color:'black'}}>
                                                    <div style={{display:'flex',alignItems:'center',height:'100%',justifyContent:'center',height:'85px',display:'flex',flexDirection:'column',padding:'0 20px'}}>
                                                        Only on Swiggy
                                                    </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#filter 13">
                                                    <div style={{backgroundColor:'',color:'black'}}>
                                                    <div style={{display:'flex',alignItems:'center',height:'100%',justifyContent:'center',height:'85px',display:'flex',flexDirection:'column',padding:'0 20px'}}>
                                                        Vegetarian Options
                                                    </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a></a>
                                </div>
                              </div>
                            </div>
                            <div style={{paddingLeft:'60px',flex:'1',contain:'layout'}}>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <Row>
                  <Col span={3}>
                      fgdfg
                  </Col>
                  <Col span={7}>
                      dfgdf
                  </Col>
                </Row> */}

            </div>
            </Row>

        )
    }
}

export default MidContent
