import React, { Component } from 'react';
import FlexView from 'react-flexview';

import HotelItem from './hotelItem.js';


class HotelsList extends Component {

    render() {
        return <FlexView
            grow={1}
            height={'100%'}
        >
                <FlexView
                    grow={1}
                    width={'100%'}
                    column
                >
                    {this.props.hotels.map((hotel, i) => {
                        return (
                                <HotelItem key={i} hotel={hotel}/>
                        )
                    })}
                </FlexView>
        </FlexView>
    }
}

export default HotelsList;