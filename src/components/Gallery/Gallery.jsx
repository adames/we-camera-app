import React, { Component } from 'react';
import { imageAPI } from '../../mockServer/imageAPI'

class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = { images: [] }
    }
    componentDidMount(){
        imageAPI.get().then(images => {
            this.setState({
                images: this.displayImages(images)
            })
        });
    }

    displayImages = (imagesBlobs) => {
        if (imagesBlobs) {
            return imagesBlobs.map((imagesBlob, idx) => {
                return <img alt='plant' key={idx} src={imagesBlob.image} />;
            });
        }
    }
    
    render() {
        return (
            <div className="Gallery">
                <h1>Gallery</h1>
                <div className='images'>
                    { this.state.images }
                </div>
            </div>
        )
    }
}

export default Gallery;