import React, { Component } from 'react';
import{Row,Col} from 'antd';

export class MobCart extends Component {
    back =()=>{
        console.log('close');
        window.location.href="/"
    }
    render() {
        return (
            <div>
                 <header className="heading">
            <div style={{padding:'10px',height:'30px',width:'100%',zIndex:'6px',background: '#fff'}}>
                 <img src="/img/left arrow.png" onClick={e=>this.back()} style={{height:"25px",float:'left',marginTop:'10px'}}/>
                  
                 <Row>
                     <Col span={4}>
                 <img src="/img/swiggylogo.png" style={{ height:'40px',marginLeft:'10px'}}/></Col>
                    <Col span={4}>
                 <div style={{fontWeight:"bold",float:'left',marginTop:'10px'}}>Cart </div></Col>
                 </Row>
             </div>
             </header>
             <hr/>

             <div style={{paddingBottom: '136px', position: 'relative'}}>
                  {/* <div style={{paddingBottom: '136px', background: '#f4f4f5', position: 'relative'}}> */}
                     <div style={{padding:'0 16px',display:'flex',position:'relative',alignItems:'center'}}>
                         <img src="img/food5.jpg"style={{height: '48px',width: '48px'}}/>
                         <div style={{margin:'0 16px',flex:1,overflow:'hidden',textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '15px', fontWeight: '600', color: '#3d4152'}}>
                             Geetha Canteen
                             <div style={{fontSize:"12px",fontWeight:'normal'}}>Gandhipuram</div>
                         </div>
                     </div>
                     <div style={{marginTop:'20px'}}>
                         <div style={{position:'relative', paddingTop: '16px', paddingBottom: '16px', overflow: 'auto',padding: '26px 16px',background:'#feedef'}}>
                         <Row>
                             <Col span={6}>
                                 <div style={{fontSize:'12px',whiteSpace:'nowrap'}}>
                             <img src="/img/vegIcon.png" style={{height:'12px',marginRight:'8px'}}/>
                             Combo Meal </div> 
                             </Col>
                             <Col span={10}>
                                <div style={{border: '1px solid rgba(40,44,63,.2)', color:'#7e808c', textAlign: 'center',display: 'flex',justifyContent: 'center',    alignItems: 'center', padding: '0 10px', fontSize: '9px',width:'82px',height:'26px',float:'right'}}>
                                       Item Not Available
                                </div>
                             </Col>
                             <Col span={6}>
                                 <div style={{float:'right'}}>
                                    <img src='/img/delete.png' style={{height:'20px'}}/>
                                    </div>
                             </Col>
                         </Row>
                         
                          </div>
                     </div>

             </div>
            </div>
        )
    }
}

export default MobCart
