import React, { Component } from 'react';
import Video from '../Video/Video';
import { hasGetUserMedia } from '../../util';
import { capture } from '../../util';
import { imageAPI } from '../../mockServer/imageAPI';
import './captureImage.css'

class CaptureImage extends Component {
    video;
    screenshot;

    componentDidMount() {
        this.screenshotButton = this.refs.screenshotButton;
        if (!hasGetUserMedia()) {
            console.error('getUserMedia() is not supported by this browser')
        }
    }

    getVideo = (video) => {
        this.video = video;
    }
    
    handleOnClick = () => {
        const videoOptions = {
            width: this.video.videoWidth,
            height: this.video.videoHeight,
        }
        this.screenshotBlob = capture(this.video, videoOptions)
        const postOptions = {
            "image": this.screenshotBlob,
        }
        imageAPI.post(postOptions);
    }

    render() {
        return (
            <div className='CaptureImage'>
                <div id='shutter' onClick={this.handleOnClick}></div>
                <div className='instructions'>Click to take picture</div>
                <Video getVideo={this.getVideo} />
            </div>
        )
    }
}

export default CaptureImage;