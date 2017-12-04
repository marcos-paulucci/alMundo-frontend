import React, { Component } from 'react';

export class Star extends Component {
    render() {
        const { height, width, fillColor } = this.props;
        return (
        <svg x="0px" y="0px" width={width} height={height}
         viewBox="0 0 538.6 538.6" enableBackground="new 0 0 538.6 538.6">
            <g>
                <path style={{fill: fillColor}}   d="M501.2,218.5c0,2-0.7,4.1-2,6.3c-1.3,2.3-3.1,4.7-5.4,7.3l-102.1,99.6l23.9,140.6c0,0.7,0.1,1.5,0.2,2.4
                    c0.2,1,0.2,2.1,0.2,3.4c0,2-0.2,3.7-0.7,5.4c-0.5,1.6-1.2,3.1-2.2,4.4c-1,1.6-2.2,2.8-3.7,3.4c-1.5,0.6-3.2,1-5.1,1
                    c-1.6,0-3.4-0.3-5.4-1c-2-0.7-3.9-1.5-5.9-2.4l-126.5-66.4L140.3,489c-2,1-3.9,1.8-5.9,2.4c-2,0.6-3.7,1-5.4,1c-2,0-3.7-0.3-5.1-1
                    c-1.5-0.7-2.7-1.8-3.7-3.4c-1-1.3-1.7-2.8-2.2-4.4c-0.5-1.6-0.7-3.4-0.7-5.4c0-0.6,0-1.5,0-2.4s0.2-2.1,0.5-3.4l23.9-140.6
                    L39.3,232.2c-2.3-2.6-4-5-5.1-7.3c-1.1-2.3-1.7-4.4-1.7-6.3c0-3.6,1.3-6.4,3.9-8.5c2.6-2.1,6.5-3.7,11.7-4.6l141.6-20.5l63.5-127.9
                    c1.6-3.9,3.6-6.8,5.9-8.8c2.3-2,4.9-2.9,7.8-2.9s5.5,1,7.8,2.9c2.3,2,4.2,4.9,5.9,8.8l63.5,127.9l141.6,20.5
                    c5.2,1,9.1,2.5,11.7,4.6C499.9,212.1,501.2,214.9,501.2,218.5z"/>
            </g>
    </svg>
        )
    }
};

export class Search extends Component {
    render() {
        const { height, width, fillColor } = this.props;
        return (
            <svg x="0px" y="0px" width={width} height={height} viewBox="0 0 538.6 538.6" enableBackground="new 0 0 538.6 538.6">
                <g>
                    <path style={{fill: fillColor}} d="M349.8,262.4c-9.1,21.2-21.5,39.6-37.1,55.2s-33.9,28-54.9,37.1c-21,9.1-43.5,13.7-67.6,13.7c-24.1,0-46.6-4.6-67.6-13.7
                        c-21-9.1-39.3-21.5-54.9-37.1s-28-34-37.1-55.2c-9.1-21.2-13.7-43.6-13.7-67.4c0-24.1,4.6-46.6,13.7-67.6
                        c9.1-21,21.5-39.3,37.1-54.9s33.9-28,54.9-37.1c21-9.1,43.5-13.7,67.6-13.7c24.1,0,46.6,4.6,67.6,13.7c21,9.1,39.3,21.5,54.9,37.1
                        s28,33.9,37.1,54.9c9.1,21,13.7,43.5,13.7,67.6C363.5,218.8,358.9,241.3,349.8,262.4z M190.1,327.9c18.2,0,35.4-3.5,51.5-10.5
                        c16.1-7,30.2-16.5,42.2-28.6c12-12,21.6-26.1,28.6-42.2c7-16.1,10.5-33.3,10.5-51.5c0-18.6-3.5-35.9-10.5-52
                        c-7-16.1-16.5-30.1-28.6-42c-12-11.9-26.1-21.3-42.2-28.3c-16.1-7-33.3-10.5-51.5-10.5c-18.2,0-35.4,3.5-51.5,10.5
                        c-16.1,7-30.2,16.4-42.2,28.3c-12,11.9-21.6,25.9-28.6,42c-7,16.1-10.5,33.4-10.5,52c0,18.2,3.5,35.4,10.5,51.5
                        c7,16.1,16.5,30.2,28.6,42.2c12,12,26.1,21.6,42.2,28.6C154.7,324.4,171.9,327.9,190.1,327.9z M505.6,439.2
                        c7.5,7.5,11.2,16.6,11.2,27.3s-3.7,19.7-11.2,26.9l-11.2,11.2c-7.5,7.5-16.5,11.2-27.1,11.2c-10.6,0-19.6-3.7-27.1-11.2
                        L303.9,367.9c13-8.5,24.9-18.3,35.6-29.5s20-23.5,27.8-36.9L505.6,439.2z"/>
                </g>
            </svg>
        )
    }
};