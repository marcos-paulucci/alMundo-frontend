import React, { Component } from 'react';
import './App.css';
import 'react-flexview/lib/flexView.css'
import FlexView from 'react-flexview';
import HotelsHeader from './layout/hotelsHeader.js';
import HotelsContent from './layout/hotelsContent.js';

class App extends Component {
  render() {
    return (
        <div style={{height: '100%'}}>
            <FlexView column width={'100%'} height={'100%'}>
                <FlexView
                    grow={1}
                    height={100}
                >
                    <HotelsHeader />
                </FlexView>
                <FlexView
                    grow={7}
                    height={'100%'}
                    style={{width: '90%', margin: 'auto'}}
                >
                    <HotelsContent />
                </FlexView>
            </FlexView>

        </div>
    );
  }
}

export default App;
