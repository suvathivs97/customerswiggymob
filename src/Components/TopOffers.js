import React, { Component } from 'react'
import {Card,Icon} from 'antd'
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
                <div style={{flex:'1',backgroundColor: '#171a29',paddingTop:'15px'}}>
                    <div style={{maxWidth: '1200px',minWidth: '1200px',position: 'relative',margin:'auto',height: '310px',display: 'flex',alignItems: 'center',contain: 'layout'}}>
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
        )
    }
}

export default TopOffers
