import React, { Component } from 'react'
import Head from './Head'
import Bottom from './Bottom'
import TopOffers from './TopOffers'
import { Layout, Row, Col, Input, Button } from "antd";
import TwoOfffers from './TwoOffers'
import MidContent from './MidContent'

const { Header,Footer,Content } = Layout;

export class MainPage extends Component {
  // state = {  webview:false,
  // visible: false };
  // componentDidMount= async()=>{
  //   var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  //   console.log(isMobile,"mobilee")
  //   if(isMobile){
  //   await this.setState({webview:false})
  //   }
  //   else{
  //   await this.setState({webview:true})
  //   }
  //   }
    render() {

        return (
            <div>
              {/* {
                this.state.webview ? */}
              
              <div className='webview'>
                <Layout style={{ height: "auto" }}>
                        <Header>
                          <Head />
                        </Header>
                        <Content>
                            <Row>
                              <TopOffers />
                            </Row>
                            <Row>
                              <TwoOfffers />
                            </Row>
                            <Row>
                             <MidContent />
                            </Row>
                            {/* <Row>
                              <AllRestaurants />
                            </Row> */}
                        </Content>
                        <Footer>
                          <Bottom />
                        </Footer>
                </Layout>
                </div>
                {/* : */}
                <div className="mobview">
               <Head></Head>
               <TopOffers/>
               <TwoOfffers/>
               <MidContent />
               
               
               <Bottom/>
              
                </div>
    {/* } */}
            </div>
        )
    }
}

export default MainPage
