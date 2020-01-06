import React, { Component } from 'react'
import {Card,Icon} from 'antd'
import {Row,Col} from 'antd'
import $ from "jquery";

export class TopOffers extends Component {
    constructor() {
        super();
        this.scroll = this.scroll.bind(this);
        this.state={
            obj:[
                {
                image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/l5wuzsxut9miz7up3ixg"
                },
                {
                    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/gdks66i6srgjugdxnwkh"
                },
                {
                    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jmeqooqz6ibkxeph3uz4"
                },
                {
                    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jmeqooqz6ibkxeph3uz4"
                },
                {
                    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/l5wuzsxut9miz7up3ixg"
                }
            ]
        }
    }
    scroll(direction) {
        let far = ($(".image-container").width() / 2) * direction;
        let pos = $(".image-container").scrollLeft() + far;
        $(".image-container").animate({ scrollLeft: pos }, 1000);
      }
    render() {
        return (
            <div>
                <div className="webview" style={{flex:'1',backgroundColor: '#171a29',paddingTop:'15px'}}>
                    <div style={{width:'100%',position: 'relative',margin:'auto',height: '310px',display: 'flex',alignItems: 'center',contain: 'layout'}}>
                       <button className="prev" onClick={this.scroll.bind(null, -1)}
                               style={{width:'47px',height:'47px',backgroundColor:'#fff',boxShadow:'0 1px 3px 0 rgba(41,48,63,.25)',borderRadius:'100%',cursor:'pointer'}}>
                         {/* <Icon type="arrow-left" style={{fontSize:'1.3rem',verticalAlign:'middle'}}> */}
                         &#10094;
                         {/* </Icon> */}
                        </button>
                        <div className="image-container" style={{ display: "inline-flex",width:'100%',overflowX:'hidden' }}>
                         {this.state.obj.map((p,i)=>{return(
                            <div style={{marginRight:'50px',cursor:'pointer'}}>
                                <a href="">
                                    <img height="240" width="240" src={p.image} />
                                </a>
                            </div>
                        )})}
                        </div>
                        <button className="next" onClick={this.scroll.bind(null, 1)}
                                style={{width:'47px',height:'47px',backgroundColor:'#fff',boxShadow:'0 1px 3px 0 rgba(41,48,63,.25)',borderRadius:'100%',cursor:'pointer'}}>
                                     &#10095;
                           {/* <Icon type="arrow-right" style={{fontSize:'1.3rem',verticalAlign:'middle'}}>
                           </Icon> */}
                        </button>
                    </div>
                </div>
                <div className="mobview">
                    
                    <div style={{display:'flex',flexWrap:'nowrap',overflowX:'auto', margin:'0px 20px',paddingBottom:'20px'}}>
                        <div style={{flex:'0 0 auto',margin:'20px 20px 0 0',borderRadius:'3px'}}>
                          <img  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_384/rng/md/carousel/production/l5wuzsxut9miz7up3ixg" height="150px"  width="150px"></img>
                        </div>
                        <div style={{flex:'0 0 auto',margin:'20px 20px 0 0'}}>
                          <img  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_384/rng/md/carousel/production/s5og8mayfjfwusrkeals" height="150px"  width="150px"></img>
                        </div>
                        <div style={{flex:'0 0 auto',margin:'20px 20px 0 0'}}>
                          <img  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_384/rng/md/carousel/production/lkzkqbcelgrqd9cxay3t" height="150px"  width="150px"></img>
                        </div>
                        <div style={{flex:'0 0 auto',margin:'20px 20px 0 0'}}>
                          <img  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_384/rng/md/carousel/production/lkzkqbcelgrqd9cxay3t" height="150px"  width="150px"></img>
                        </div>

                    </div>
                </div>
                </div>
        )
    }
}

export default TopOffers
