import React, { Component } from 'react';
import FlexView from 'react-flexview';
import {Star } from '../uiAssets/icons/filters/iconComponents';
import MediaQuery from 'react-responsive';

class HotelItem extends Component {
    state = {
        width: window.innerWidth,
    };
    componentWillMount = () => {
        window.addEventListener('resize', this.handleWindowSizeChange);
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    };

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        let priceDisplay,
            priceWidth;
        if (this.state.width > 1100){
            priceDisplay = 'inline-block';
            priceWidth = 'auto';
        } else {
            priceDisplay = 'block';
            priceWidth = '100%';
        }
        let starsIcons = [],
            HotelSectionAmenities = <FlexView grow={3}
                                              hAlignContent='left'
                                              column>
                <FlexView grow={1}
                          hAlignContent='left'
                          vAlignContent='center'
                          style={{margin: '0.4em 0'}}>
                    <span className="blueAlmundo" style={{fontSize: '20px', fontWeight: 600}}>{this.props.hotel.name}</span>
                </FlexView>
                <FlexView grow={1}
                          style={{height:"5%", margin: '4% 0'}}
                          hAlignContent='left'
                          vAlignContent='center'>
                    {starsIcons}
                </FlexView>
                <FlexView grow={1}
                          style={{height:"8%", margin: '3% 0px 10% 0'}}
                          hAlignContent='left'
                          vAlignContent='center'
                          row="true">
                    {this.props.hotel.amenities.map((amenity, i) =>
                        <img key={i} style={{width: 20, height: 20, margin: 3}} src={require('../uiAssets/icons/amenities/' + amenity + '.svg')} alt={amenity} />
                    )}
                </FlexView>
            </FlexView>;

        let HotelSectionPrice = <FlexView grow={3}
                                          hAlignContent='left'
                                          column>
            <FlexView grow={1}
                      column
                      hAlignContent='center'
                      vAlignContent='center'
                      style={{width: '100%', height: '15%', padding: '1em 0'}}>
                <FlexView className="blueAlmundo" grow={1}
                          hAlignContent='center'
                          vAlignContent='center' style={{textAlign: 'center', fontWeight: 400, marginBottom: '0.2em'}}>
                    Precio por noche por habitación
                </FlexView>
                <div className="orangeAlmundo" style={{margin: '0.3em 0'}}>
                                <span style={{width: priceWidth, display:  priceDisplay, textAlign: 'center', fontSize: '1.4em', marginRight: '0.3em', fontWeight: 500, marginBottom: '0.2em'}}>
                                    ARS
                                </span>
                    <span style={{width: priceWidth, display:  priceDisplay, fontSize: '2em', textAlign: 'center', fontWeight: 800}}>
                                   {this.props.hotel.price}
                                </span>
                </div>
            </FlexView>
            <FlexView grow={1}
                      hAlignContent='center'
                      vAlignContent='center' style={{width: '100%'}}>
                <button style={{fontSize: '1.4em', fontWeight: 600, width: '100%', borderRadius: 5, height: '2.2em', color: 'white', backgroundColor: '#022A7C', borderWidth: 0}}>Ver hotel</button>
            </FlexView>
        </FlexView>;
        for (var i = 0; i < this.props.hotel.stars; i++) {
            starsIcons.push(<Star key={i} height="19" width="19" fillColor="#EDBD38"/>);
        }
        return <div className="hotelItemWrapper" key={this.props.hotel.id} style={{padding: '0.8em 0.5em', backgroundColor: 'white', marginBottom: '1em'}}>
            <MediaQuery query="(max-device-width: 800px)">
                <div className="mobileHotelItem" style={{height: '100%', margin: 0}}>
                    <FlexView grow={6}
                              hAlignContent='center'
                              vAlignContent='center'>
                        <img src={require('../uiAssets/images/hotels/' + this.props.hotel.image)} style={{width: '100%', height: '100%', margin: 3}} alt="hotel image" />
                    </FlexView>
                    {HotelSectionAmenities}
                    <FlexView grow={1}
                              hAlignContent='center'
                              vAlignContent='center' style={{borderTop: '1px dashed #bcc7d8'}}>
                        {HotelSectionPrice}
                    </FlexView>

                </div>
            </MediaQuery>
            <MediaQuery query="(min-device-width: 800px)">
                <FlexView className="hotelItem" grow={1}
                          height='16em'
                          hAlignContent='center'
                          vAlignContent='center'
                          row="true">
                    <FlexView width='30%'
                              hAlignContent='left'
                              vAlignContent='center'>
                        <img src={require('../uiAssets/images/hotels/' + this.props.hotel.image)} style={{width: '90%', height: '15em', margin: '0 auto'}} alt="hotel image" />
                    </FlexView>
                    <FlexView width='45%'
                              hAlignContent='left'
                              vAlignContent='top'
                              height='100%'
                              column>
                        <FlexView height='50%'
                                  hAlignContent='left'
                                  vAlignContent='top'>
                            {HotelSectionAmenities}
                        </FlexView>


                    </FlexView>
                    <FlexView width='25%'
                              column
                              height='100%'
                              hAlignContent='center'
                              vAlignContent='center'
                              style={{borderLeft: '1px dashed #bcc7d8'}}>
                        <FlexView width='80%'
                                  hAlignContent='center'
                                  vAlignContent='center'>
                            {HotelSectionPrice}
                        </FlexView>
                    </FlexView>

                </FlexView>
            </MediaQuery>
        </div>;
    }
    
}
    


export default HotelItem;