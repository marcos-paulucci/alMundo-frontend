import React, { Component } from 'react';
import AlMundoLogo from '../uiAssets/images/logo-almundo.svg';
import FlexView from 'react-flexview';

class HotelsHeader extends Component {
    render() {
        return <FlexView
            grow={1}
            style={{ backgroundColor: '#0B3D78', paddingLeft: '5%' }}
            height='100%'
        >
            <img src={AlMundoLogo} alt="Almundo.com" />
        </FlexView>
    }
}

export default HotelsHeader;