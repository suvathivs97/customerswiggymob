import React, { Component } from 'react'
import {Drawer} from 'antd'
export class Location extends Component {
    state={
        visible:true
    }
    render() {
        return (
            <div>
                <Drawer
                    title="Basic Drawer"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                 </Drawer>
            </div>
        )
    }
}

export default Location
