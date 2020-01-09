import React, { Component } from 'react'
import {Drawer,Input,Col,Icon,Row,Card, message} from 'antd'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import { Button } from 'antd/lib/radio';
import port from '../port'

export class Addaddress extends Component {
    state = { visible: true, 
        placement: 'left',
        others:false,
        address:'',
        type:'',
        markObj :{ lat: '',
                   lng: ''},
        homecolor:false,
        workcolor:false,
        othercolor:false
    }
    onClose=()=>{
        this.setState({visible:false})
        this.props.viewadd()
    }
   
    onMarkerClick = (props, marker, e) =>{
        console.log(props,marker)
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }

    handleSelect = async(address) => {
        let addresslatlng=await geocodeByAddress(address)
        console.log(addresslatlng[0],"address")
        let result=await getLatLng(addresslatlng[0])
        // console.log(result,"result")
        await this.setState({markObj:{lat:result.lat,lng:result.lng}})
        if(addresslatlng[0]){
            await this.setState({address:addresslatlng[0].formatted_address})
        }
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleClick = async(t, map, coord) =>{
        console.log("inside handleclick",t)
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        console.log(lat,lng,"lattt")
        await this.setState({markObj:{lat:lat,lng:lng}})
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${lat},${lng}&key=AIzaSyASz1UkWHmuSBq5Obktwpapwunp3UI3OQo`)
        .then(async(res)=>{
        if(res.data.results[0]){
            await this.setState({address:res.data.results[0].formatted_address})
        }})
    }

    getGeoLocation = async(e) => {
        e.preventDefault()
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                      this.setState({markObj:{lat:position.coords.latitude,lng:position.coords.longitude}})
                     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyASz1UkWHmuSBq5Obktwpapwunp3UI3OQo`)
                     .then(async(res)=>{
                     if(res.data.results[0]){
                        console.log(res.data.results[0].address_components,"position")   
                        let address= res.data.results[0].formatted_address
                        console.log(address,"address")
                        await this.setState({address})

                     }
                     
                    }           
                  )
                }
                
            )
           
        } else {
             console.log('error')
        }
    }

    selectType1=async()=>{
           console.log('selectType')
           await this.setState({others:false,type:'Home',homecolor:true,workcolor:false,othercolor:false})
    }

    selectType2=async()=>{
           console.log('selectType')
           await this.setState({others:false,type:'Work',workcolor:true,homecolor:false,othercolor:false})
    }

    selectType3=async()=>{
           console.log('selectType')
           await this.setState({others:true,othercolor:true,workcolor:false,homecolor:false})
    }

    submitaddress=async()=>{
        console.log('inside submitaddress')
        let {address,markObj,type} = this.state
        let customerId=localStorage.getItem('id')
        console.log(address,markObj.lat,markObj.lng,type,customerId)
        if(address != '' || type != '' || markObj.lat != '' || markObj.lng != ''){
            if(customerId != undefined && customerId != null){
                let submit=await axios.post(port+'/newAddress',{customerId,latitude:markObj.lat,longitude:markObj.lng,address,type})
                console.log('submit',submit)
                if(submit.data.success){
                    message.success(submit.data.message)
                    await this.setState({visible:false})
                    this.props.viewadd()
                }else{
                    message.error(submit.data.message)
                }
            }else{
                console.log('cutomerId null')
            }
        }else{
            alert('Enter all the field')
        }


    }

    render() {
        return (
            <div>
                            <Drawer
                                title={<Icon type="close" onClick={this.onClose} />}
                                placement={this.state.placement}
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.visible}
                                width="400px"
                             >
                              <div>
                              <div>
                              <div  className="Searchboxfff">
                                <PlacesAutocomplete
                                    value={this.state.address}
                                    onChange={this.handleChange}
                                    onSelect={this.handleSelect}
                                >
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div>
                                    <input
                                        {...getInputProps({
                                        placeholder: 'Search Places ...',
                                        className: 'location-search-input',
                                        })}
                                        style={{width:'340px'}}
                                    />
                                    <div className="autocomplete-dropdown-container">
                                        {loading && <div>Loading...</div>}
                                        {suggestions.map(suggestion => {
                                        const className = suggestion.active
                                            ? 'suggestion-item--active'
                                            : 'suggestion-item';
                                        // inline style for demonstration purpose
                                        const style = suggestion.active
                                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                        return (
                                            <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                            >
                                            <span>{suggestion.description}</span>
                                            </div>
                                        );
                                        })}
                                    </div>
                                    </div>
                                )}
                                </PlacesAutocomplete>
                                </div>
                                <Card style={{height:'330px',width:'340px'}}>
                                    <Map google={this.props.google}
                                        onClick={this.handleClick}
                                        style={style}
                                        center={{
                                            lat: this.state.markObj.lat,
                                            lng: this.state.markObj.lng
                                        }}
                                        zoom={15}
                                    >
                                       <Marker onClick={this.onMarkerClick}
                                               position={{lat: this.state.markObj.lat, lng: this.state.markObj.lng}}
                                               name={'Current location'} />
                                    </Map>
                                </Card>
                                <a style={{textDecoration:'none'}} onClick={this.getGeoLocation}>
                                    <div style={{border:'1px solid #d4d5d9',marginBottom:'5%',width:'340px',marginTop:'5%'}}>
                                    <div style={{fontSize:'16px',color:'#282c3f',fontWeight:'500',padding:'5px 24px',minHeight:'70px',display:'flex',alignItems:'center'}}>
                                    <div>
                                        <img src="/img/current.png" style={{width:'18px',height:'18px',marginRight:'4px'}}></img>Get Current Location
                                        <div style={{fontSize:'13px',color:'#93959f',marginTop:'5px',marginLeft:'15%'}}>Using GPS</div>
                                    </div>
                                    </div>
                                    </div>
                                </a>
                                <div style={{border:'1px solid #d4d5d9',marginBottom:'5%',width:'340px'}}>
                                <div style={{fontSize:'16px',color:'#282c3f',fontWeight:'500',padding:'5px 24px',minHeight:'70px',display:'flex',alignItems:'center'}}>
                                    <div>
                                        <div style={{marginRight:'4px',color:'#93959f',fontSize:'13px'}}>Address</div>
                                        <div style={{marginTop:'5px'}}>{this.state.address}</div>
                                    </div>
                                    </div>
                                </div>
                                <Row style={{width:'340px',minHeight:'70px',border:'1px solid #d4d5d9'}}>
                                     <Col span={8} style={{borderRight:'1px solid #d4d5d9',height:'70px',padding:'25px',cursor:'pointer'}} >
                                         <a onClick={this.selectType1} style={{textDecoration:'none'}}>
                                            <div style={{display:'flex',alignItems:'center'}}>
                                            <Icon type="home" style={{marginRight:'3px'}} theme={this.state.homecolor?"filled":'outlined'}/> Home
                                            </div>
                                         </a>
                                     </Col>
                                     <Col span={8} style={{borderRight:'1px solid #d4d5d9',height:'70px',padding:'25px',display:'flex',alignItems:'center',cursor:'pointer'}} >
                                          <a style={{textDecoration:'none'}} onClick={this.selectType2}>
                                            <div style={{display:'flex',alignItems:'center'}}>
                                              <Icon type="laptop" style={{marginRight:'3px'}} theme={this.state.workcolor?"filled":'outlined'}/>  Work
                                            </div>
                                         </a>
                                     </Col>
                                     <Col span={8} style={{padding:'25px',display:'flex',alignItems:'center',cursor:'pointer'}} >
                                          <a onClick={this.selectType3} style={{textDecoration:'none'}}>
                                            <div style={{display:'flex',alignItems:'center'}}>
                                               <Icon type="search" theme={this.state.othercolor?"filled":'outlined'}/> Other
                                             </div>
                                         </a>
                                     </Col>
                                </Row>
                                {this.state.others?
                                <input style={{width:'340px',minHeight:'30px',border:'none',borderBottom:'1px solid #d4d5d9',marginTop:'5%'}}
                                       placeholder="Enter label"
                                       value={this.state.type}
                                       onChange={e=>this.setState({type:e.target.value})}>
                                   
                                </input>
                                :
                                <div style={{display:'none'}}></div>}
                                
                                </div>
                              </div>
                              <div style={{marginTop:'5%'}}>
                                    <Button style={{padding:'10px 40px',backgroundColor:'#fc8019',display:'flex',alignItems:'center',height:'70px',justifyContent:'center'}}
                                            onClick={this.submitaddress}>SAVE ADDRESS AND PROCEED</Button>
                              </div>
                            </Drawer>
            </div>
        )
    }
}

const style = {
     height:'330px',
     width:'340px',
     position:'absolute',
     marginLeft:'-25px',
     marginTop:'-25px'
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyASz1UkWHmuSBq5Obktwpapwunp3UI3OQo")
  })(Addaddress)
