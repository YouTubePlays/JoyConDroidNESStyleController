import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onButtonEvent = this.onButtonEvent.bind(this);
    }

    onButtonEvent(name, pressed) {
        // if (!window.joyconJS) {
        //     return;
        // }
        var audio = new Audio("/click.mp3");
        if(pressed) {
            audio.play();
        }
        var x = 0;
        var y = 0;

        if(name === "down") {
            y += pressed? 1 : 0;
            this.setState({downPressed: pressed});
        } else {
            y += this.state.downPressed? 1 : 0;
        }
        if(name === "up") {
            y += pressed? -1 : 0;
            this.setState({upPressed: pressed});
        } else {
            y += this.state.upPressed? -1 : 0;
        }
        if(name === "left") {
            x += pressed? -1 : 0;
            this.setState({leftPressed: pressed});
        } else {
            x += this.state.leftPressed? -1 : 0;
        }
        if(name === "right") {
            x += pressed? 1 : 0;
            this.setState({rightPressed: pressed});
        } else {
            x += this.state.rightPressed? 1 : 0;
        }

        if (name === "down" ||  name === "up" || 
        name === "right" ||  name === "left"
        ) {
            if (x === 0 && y === 0) {
                window.joyconJS.onRightJoystick(0,0);
            } else {
                window.joyconJS.onRightJoystick(100,Math.atan2(x, y));
            }
        }

        if(name === "home") {
            window.joyconJS.onHome(pressed);
            this.setState({homePressed: pressed});
        }
        if(name === "plus") {
            window.joyconJS.onPlus(pressed);
            this.setState({plusPressed: pressed});
        }
        if(name === "a") {
            window.joyconJS.onA(pressed);
            this.setState({aPressed: pressed});
        }
        if(name === "b") {
            window.joyconJS.onB(pressed);
            this.setState({bPressed: pressed});
        }
        if(name === "x") {
            window.joyconJS.onX(pressed);
            this.setState({xPressed: pressed});
        }
        if(name === "y") {
            window.joyconJS.onY(pressed);
            this.setState({yPressed: pressed});
        }
        if(name === "sl") {
            window.joyconJS.onRightSL(pressed);
            this.setState({slPressed: pressed});
        }
        if(name === "sr") {
            window.joyconJS.onRightSR(pressed);
            this.setState({srPressed: pressed});
        }
        if(name === "stick") {
            window.joyconJS.onRightJoystickPressed(pressed);
            this.setState({stickPressed: pressed});
        }
    }

    render() {
        return ( 
        <div className="App">
            <svg viewBox="-0.004 270.034 251 612" >
                <path
                    fill="#1a1a1a"
                    d="M 209.96599,285.98599 V 867.819 H 14.682 V 285.98599 Z"
                />
                <path
                    fill="#808080"
                    d="m 216.911,475.997 v 153.281 c 0,5.362 -4.347,9.709 -9.709,9.709 h -10.594 c -5.362,0 -9.709,-4.347 -9.709,-9.709 V 475.997 c 0,-5.362 4.347,-9.709 9.709,-9.709 h 10.594 c 5.362,10e-4 9.709,4.348 9.709,9.709 z"
                />
                <path
                    fill="#808080"
                    d="m 178.287,475.997 v 153.281 c 0,5.362 -4.347,9.709 -9.708,9.709 h -10.594 c -5.362,0 -9.709,-4.347 -9.709,-9.709 V 475.997 c 0,-5.362 4.347,-9.709 9.709,-9.709 h 10.594 c 5.361,10e-4 9.708,4.348 9.708,9.709 z"
                />
                <path
                    fill="#808080"
                    d="m 139.642,475.997 v 153.281 c 0,5.362 -4.347,9.709 -9.709,9.709 h -10.594 c -5.362,0 -9.709,-4.347 -9.709,-9.709 V 475.997 c 0,-5.362 4.347,-9.709 9.709,-9.709 h 10.594 c 5.362,0 9.709,4.348 9.709,9.709 z"
                />
                <path
                    fill="#808080"
                    d="m 33.891,475.997 v 153.281 c 0,5.362 -4.347,9.709 -9.709,9.709 H 13.588 c -5.362,0 -9.709,-4.347 -9.709,-9.709 V 475.997 c 0,-5.362 4.347,-9.709 9.709,-9.709 h 10.594 c 5.363,10e-4 9.709,4.348 9.709,9.709 z"
                />
                <path
                    fill="#dcdcdc"
                    d="m 251.92,278.186 c 0,-4.508 -3.644,-8.152 -8.152,-8.152 H 8.147 c -4.508,0 -8.152,3.645 -8.151,8.152 v 595.897 c 0,4.508 3.644,7.953 8.151,7.953 h 235.621 c 4.508,0 8.152,-3.445 8.152,-7.953 z m -41.954,7.755 V 867.927 H 14.716 V 285.941 Z"
                />
                <path
                    fill="#dddddd"
                    d="m 101.5,477.11 v 151.087 c 0,5.976 -4.845,10.82 -10.821,10.82 H 55.336 c -5.977,0 -10.821,-4.845 -10.821,-10.82 V 477.11 c 0,-5.977 4.845,-10.821 10.821,-10.821 h 35.343 c 5.976,-10e-4 10.821,4.844 10.821,10.821 z"
                />
                <path
                    stroke="#808080"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                    d="m 96.067,482.229 v 140.876 c 0,4.896 -3.969,8.864 -8.864,8.864 H 58.252 c -4.896,0 -8.863,-3.969 -8.863,-8.864 V 482.229 c 0,-4.896 3.968,-8.864 8.863,-8.864 h 28.951 c 4.895,0 8.864,3.968 8.864,8.864 z"
                />
                <path
                    stroke="#ffffff"
                    strokeWidth="1.6523"
                    strokeLinecap="round"
                    d="m 159.95,357.581 c 0,-2.686 -2.216,-4.713 -4.902,-4.713 h -33.747 v -33.747 c 0,-2.686 -2.217,-4.902 -4.902,-4.902 H 89.251 c -2.686,0 -4.901,2.216 -4.901,4.902 v 33.747 H 50.603 c -2.686,0 -4.714,2.028 -4.714,4.713 v 27.337 c 0,2.686 2.027,4.713 4.714,4.713 H 84.35 v 33.747 c 0,2.686 2.216,4.902 4.901,4.902 h 27.148 c 2.686,0 4.902,-2.216 4.902,-4.902 v -33.747 h 33.747 c 2.686,0 4.902,-2.028 4.902,-4.713 z"
                />
                <path
                    fill="#dddddd"
                    strokeWidth="2.90422392"
                    d="m 108.23772,670.26361 v 59.76311 c 0,2.63704 -2.1375,4.77164 -4.77164,4.77164 H 43.702967 c -2.634131,0 -4.771639,-2.1346 -4.771639,-4.77164 v -59.76311 c 0,-2.63704 2.137508,-4.77164 4.771639,-4.77164 h 59.763113 c 2.63704,0 4.77164,2.13751 4.77164,4.77164 z"
                />
                <path
                    fill="#dddddd"
                    strokeWidth="2.90422392"
                    d="m 188.11492,669.74945 v 59.76311 c 0,2.63704 -2.1375,4.77164 -4.77164,4.77164 h -59.76311 c -2.63413,0 -4.77164,-2.1346 -4.77164,-4.77164 v -59.76311 c 0,-2.63704 2.13751,-4.77164 4.77164,-4.77164 h 59.76311 c 2.63704,0 4.77164,2.13751 4.77164,4.77164 z"
                />
                <path
                    fill="#dddddd"
                    strokeWidth="2.90422392"
                    d="m 187.23802,749.55165 v 59.76311 c 0,2.63704 -2.1375,4.77164 -4.77164,4.77164 h -59.76311 c -2.63413,0 -4.77164,-2.1346 -4.77164,-4.77164 v -59.76311 c 0,-2.63704 2.13751,-4.77164 4.77164,-4.77164 h 59.76311 c 2.63704,0 4.77164,2.13751 4.77164,4.77164 z"
                />
                <path
                    fill="#dddddd"
                    strokeWidth="2.90422392"
                    d="m 108.23772,748.96807 v 59.76312 c 0,2.63413 -2.1375,4.77164 -4.77164,4.77164 H 43.702967 c -2.634131,0 -4.771639,-2.13751 -4.771639,-4.77164 v -59.76312 c 0,-2.63703 2.137508,-4.77164 4.771639,-4.77164 h 59.763113 c 2.63704,0 4.77164,2.13751 4.77164,4.77164 z"
                />
                <path
                    fill="#1a1a1a"
                    d="m 155.7,358.523 c 0,-0.85 -0.657,-1.506 -1.506,-1.506 h -36.832 v -36.832 c 0,-0.849 -0.656,-1.506 -1.506,-1.506 H 89.908 c -0.85,0 -1.574,0.657 -1.574,1.506 v 36.832 H 51.569 c -0.849,0 -1.574,0.657 -1.574,1.506 v 26.016 c 0,0.85 0.726,1.506 1.574,1.506 h 36.765 v 36.832 c 0,0.85 0.725,1.506 1.574,1.506 h 25.948 c 0.85,0 1.506,-0.657 1.506,-1.506 v -36.832 h 36.832 c 0.85,0 1.506,-0.656 1.506,-1.506 z"
                />
                <path
                    onMouseDown={e => this.onButtonEvent("stick", true)}
                    onMouseUp={e => this.onButtonEvent("stick", false)}
                    onMouseOut={e => this.onButtonEvent("stick", false)}
                    onTouchStart={e => this.onButtonEvent("stick", true)}
                    onTouchEnd={e => this.onButtonEvent("stick", false)}
                    fill={this.state.stickPressed? "#FFFF00" : "#1a1a1a" }
                    d="m 88.334,386.045 v -29.028 h 29.028 v 29.028 z"
                />
                <path
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    d="m 102.843,384.685 c -7.26,0.004 -13.148,-5.876 -13.153,-13.136 -0.005,-7.26 5.877,-13.148 13.136,-13.153 0.006,0 0.012,0 0.018,0 7.26,-0.005 13.148,5.876 13.153,13.136 0.005,7.259 -5.876,13.148 -13.136,13.153 -0.006,0 -0.012,0 -0.018,0 z"
                />
                <path
                    onMouseDown={e => this.onButtonEvent("down", true)}
                    onMouseUp={e => this.onButtonEvent("down", false)}
                    onMouseOut={e => this.onButtonEvent("down", false)}
                    onTouchStart={e => this.onButtonEvent("down", true)}
                    onTouchEnd={e => this.onButtonEvent("down", false)}
                    fill={this.state.downPressed? "#FFFF00" : "#1a1a1a" }
                    d="M 49.981987,357.62161 H 88.334 v 28.42338 H 49.981987 Z"
                />
                <path
                    onMouseDown={e => this.onButtonEvent("left", true)}
                    onMouseUp={e => this.onButtonEvent("left", false)}
                    onMouseOut={e => this.onButtonEvent("left", false)}
                    onTouchStart={e => this.onButtonEvent("left", true)}
                    onTouchEnd={e => this.onButtonEvent("left", false)}
                    fill={this.state.leftPressed? "#FFFF00" : "#1a1a1a" }
                    d="M 116.75738,318.66498 V 357.017 H 88.334 v -38.35202 z"
                />
                <path
                    onMouseDown={e => this.onButtonEvent("up", true)}
                    onMouseUp={e => this.onButtonEvent("up", false)}
                    onMouseOut={e => this.onButtonEvent("up", false)}
                    onTouchStart={e => this.onButtonEvent("up", true)}
                    onTouchEnd={e => this.onButtonEvent("up", false)}
                    fill={this.state.upPressed? "#FFFF00" : "#1a1a1a" }
                    d="M 155.7,386.94638 H 117.34798 V 358.523 H 155.7 Z"
                />
                <path
                    onMouseDown={e => this.onButtonEvent("right", true)}
                    onMouseUp={e => this.onButtonEvent("right", false)}
                    onMouseOut={e => this.onButtonEvent("right", false)}
                    onTouchStart={e => this.onButtonEvent("right", true)}
                    onTouchEnd={e => this.onButtonEvent("right", false)}
                    fill={this.state.rightPressed? "#FFFF00" : "#1a1a1a" }
                    d="M 88.334,424.39702 V 386.045 h 28.42338 v 38.35202 z"
                />
                <path
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    d="m 141.285,382.315 5.477,-5.477 5.477,-5.477 -5.477,-5.477 -5.477,-5.477 v 3.286 h -10.954 v 15.336 h 10.954 z"
                />
                <path
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    d="m 63.621,382.315 -5.478,-5.477 -5.477,-5.477 5.477,-5.477 5.478,-5.477 v 3.286 h 10.954 v 15.336 H 63.621 Z"
                />
                <path
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    d="m 113.615,409.722 -5.478,5.477 -5.477,5.477 -5.478,-5.477 -5.477,-5.477 h 3.286 v -10.954 h 15.336 v 10.954 z"
                />
                <path
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    d="m 113.615,333.22 -5.478,-5.477 -5.477,-5.477 -5.478,5.477 -5.477,5.477 h 3.286 v 10.954 h 15.336 V 333.22 Z"
                />
                // plus button
                <path
                    onMouseDown={e => this.onButtonEvent("plus", true)}
                    onMouseUp={e => this.onButtonEvent("plus", false)}
                    onMouseOut={e => this.onButtonEvent("plus", false)}
                    onTouchStart={e => this.onButtonEvent("plus", true)}
                    onTouchEnd={e => this.onButtonEvent("plus", false)}
                    fill={this.state.plusPressed? "#FFFF00" : "#000000" }
                    d="m 71.978422,488.67853 c -4.254,0 -7.703125,4.28055 -7.703125,9.56055 v 2.42578 h -6.115235 c -5.281,0 -9.560546,4.28155 -9.560546,9.56055 0,5.281 4.280546,9.56054 9.560546,9.56054 h 6.115235 v 2.84375 c 0,5.28 3.449125,9.56055 7.703125,9.56055 4.254,0 7.701172,-4.28055 7.701172,-9.56055 v -2.84375 h 7.876953 c 5.281,0 9.560547,-4.27954 9.560547,-9.56054 0,-5.28 -4.280547,-9.56055 -9.560547,-9.56055 h -7.876953 v -2.42578 c 0,-5.28 -3.447172,-9.56055 -7.701172,-9.56055 z"
                />
                //Home button
                <path
                    onMouseDown={e => this.onButtonEvent("home", true)}
                    onMouseUp={e => this.onButtonEvent("home", false)}
                    onMouseOut={e => this.onButtonEvent("home", false)}
                    onTouchStart={e => this.onButtonEvent("home", true)}
                    onTouchEnd={e => this.onButtonEvent("home", false)}
                    fill={this.state.homePressed? "#FFFF00" : "#000000" }
                    d="M 95.457039,594.38702 73.145676,570.10575 v 7.62268 H 51.862082 v 33.31717 h 21.283594 v 7.6227 z"
                />
                <path
                    onMouseDown={e => this.onButtonEvent("b", true)}
                    onMouseUp={e => this.onButtonEvent("b", false)}
                    onMouseOut={e => this.onButtonEvent("b", false)}
                    onTouchStart={e => this.onButtonEvent("b", true)}
                    onTouchEnd={e => this.onButtonEvent("b", false)}
                    fill={this.state.bPressed? "#FFFF00" : "#ff0000" }
                    d="m 73.291199,728.54557 c -15.688617,0 -28.403308,-12.7176 -28.403308,-28.40331 0,-15.68571 12.717596,-28.40331 28.403308,-28.40331 15.685713,0 28.403311,12.7176 28.403311,28.40331 0,15.68571 -12.714694,28.40331 -28.403311,28.40331 z"
                />
                <path
                    onMouseDown={e => this.onButtonEvent("a", true)}
                    onMouseUp={e => this.onButtonEvent("a", false)}
                    onMouseOut={e => this.onButtonEvent("a", false)}
                    onTouchStart={e => this.onButtonEvent("a", true)}
                    onTouchEnd={e => this.onButtonEvent("a", false)}
                    fill={this.state.aPressed? "#FFFF00" : "#ff0000" }
                    d="m 73.291199,807.27908 c -15.688617,0 -28.403308,-12.7176 -28.403308,-28.40331 0,-15.68862 12.717596,-28.40621 28.403308,-28.40621 15.685713,0 28.403311,12.71759 28.403311,28.40621 0.003,15.68571 -12.714694,28.40331 -28.403311,28.40331 z"
                />
                <path
                    onMouseDown={e => this.onButtonEvent("y", true)}
                    onMouseUp={e => this.onButtonEvent("y", false)}
                    onMouseOut={e => this.onButtonEvent("y", false)}
                    onTouchStart={e => this.onButtonEvent("y", true)}
                    onTouchEnd={e => this.onButtonEvent("y", false)}
                    fill={this.state.yPressed? "#FFFF00" : "#ff0000" }
                    d="m 153.1684,728.03141 c -15.68862,0 -28.40331,-12.7176 -28.40331,-28.40331 0,-15.68571 12.7176,-28.40331 28.40331,-28.40331 15.68571,0 28.40331,12.7176 28.40331,28.40331 0,15.68571 -12.71469,28.40331 -28.40331,28.40331 z"
                />
                <path
                    onMouseDown={e => this.onButtonEvent("x", true)}
                    onMouseUp={e => this.onButtonEvent("x", false)}
                    onMouseOut={e => this.onButtonEvent("x", false)}
                    onTouchStart={e => this.onButtonEvent("x", true)}
                    onTouchEnd={e => this.onButtonEvent("x", false)}
                    fill={this.state.xPressed? "#FFFF00" : "#ff0000" }
                    d="m 152.2915,807.83361 c -15.68862,0 -28.40331,-12.7176 -28.40331,-28.40331 0,-15.68571 12.7176,-28.40331 28.40331,-28.40331 15.68571,0 28.40331,12.7176 28.40331,28.40331 0,15.68571 -12.71469,28.40331 -28.40331,28.40331 z"
                />
                <path
                    fill="#ff0000"
                    d="m 41.107914,646.78048 h 13.270833 v 4.64843 q 0,2.41537 -0.929688,3.66407 -0.920573,1.24869 -2.707031,1.24869 -0.97526,0 -1.722656,-0.5013 -0.738281,-0.5013 -1.084636,-1.39453 -0.255208,1.02083 -1.029947,1.60417 -0.77474,0.59245 -1.895834,0.59245 -1.914062,0 -2.898437,-1.22136 -0.984375,-1.22135 -1.002604,-3.48177 z m 5.778645,2.73437 h -3.582031 v 2.34245 q 0,0.96615 0.455729,1.50391 0.464844,0.54687 1.276042,0.54687 1.822917,0 1.85026,-1.88672 z m 1.932292,0 v 2.02344 q 0.03646,2.06901 1.64974,2.06901 0.902343,0 1.29427,-0.52865 0.401042,-0.51953 0.401042,-1.64974 v -1.91406 z"
                />
                <path
                    fill="#ff0000"
                    d="m 126.71571,653.40196 5.97916,2.76172 v 2.98958 l -8.45833,-4.35677 h -4.8125 v -2.77995 h 4.8125 l 8.45833,-4.35677 v 2.9987 z"
                />
                <path
                    fill="#ff0000"
                    d="m 41.98201,828.78859 v -4.79427 l -2.734375,-0.91145 v -2.90756 l 13.270833,4.94011 v 2.53385 l -13.270833,4.96745 v -2.90755 z m 2.214843,-4.05599 v 3.31771 l 4.967448,-1.66797 z"
                />
                <path
                    fill="#ff0000"
                    d="m 127.93524,825.15582 4.57552,2.48828 v 3.14453 l -6.58073,-3.86458 -6.6901,3.96485 v -3.18099 l 4.64844,-2.55209 -4.64844,-2.55208 v -3.18099 l 6.6901,3.96484 6.58073,-3.86458 v 3.14453 z"
                />
                <path
                    onMouseDown={e => this.onButtonEvent("sl", true)}
                    onMouseUp={e => this.onButtonEvent("sl", false)}
                    onMouseOut={e => this.onButtonEvent("sl", false)}
                    onTouchStart={e => this.onButtonEvent("sl", true)}
                    onTouchEnd={e => this.onButtonEvent("sl", false)}
                    fill={this.state.slPressed? "#FFFF00" : "#ff0000" }
                    d="m 220.29155,346.27371 c 12.02364,0 21.70333,9.7228 21.70333,21.8 v 77.93868 c 0,12.0772 -9.67969,21.8 -21.70333,21.8 -12.02365,0 -21.70334,-9.7228 -21.70334,-21.8 v -77.93868 c 0,-12.0772 9.67969,-21.8 21.70334,-21.8 z"
                />
                <path
                    onMouseDown={e => this.onButtonEvent("sr", true)}
                    onMouseUp={e => this.onButtonEvent("sr", false)}
                    onMouseOut={e => this.onButtonEvent("sr", false)}
                    onTouchStart={e => this.onButtonEvent("sr", true)}
                    onTouchEnd={e => this.onButtonEvent("sr", false)}
                    fill={this.state.srPressed? "#FFFF00" : "#ff0000" }
                    d="m 220.29155,637.71849 c 12.02364,0 21.70333,9.7228 21.70333,21.8 v 77.93868 c 0,12.0772 -9.67969,21.8 -21.70333,21.8 -12.02365,0 -21.70334,-9.7228 -21.70334,-21.8 v -77.93868 c 0,-12.0772 9.67969,-21.8 21.70334,-21.8 z"
                />
            </svg>
        </div>
        );
    }
}

export default App;