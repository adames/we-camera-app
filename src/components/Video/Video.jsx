import React, { Component } from 'react';
import { constraints } from './const';

class Video extends Component {
    activeStream;

    componentDidMount() {
        this.props.getVideo(this.refs.video);
        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => { 
                this.refs.video.srcObject = stream 
                this.activeStream = stream
                // set stop to window for dev
                window.stop = this.stopStream;
            })
            .catch(e => console.error('video error', e));

    }

    componentWillUnmount(){
        this.stopStream();
    }

    stopStream = () => {
        if (this.activeStream) {
            const videoTrack = this.activeStream.getVideoTracks().find(item => item);
            videoTrack.stop();
        }
    }

    render() {
        return (
            <video ref='video' autoPlay />
        )
    }
}

export default Video;