import React, { Component } from 'react';
import './home.css';

class Home extends Component {

    render() {
        return (
            <div className="Home">
                Please select Camera or Gallery to continue
                <div className='photo-credit'>
                    Icons made by&nbsp;
                    <a
                        href="https://www.flaticon.com/authors/daniel-bruce"
                        title="Daniel Bruce"
                    >
                        Daniel Bruce
                    </a> from&nbsp;
                    <a
                        href="https://www.flaticon.com/"
                        title="Flaticon">
                        www.flaticon.com
                        </a> is licensed by&nbsp;
                        <a
                        href="http://creativecommons.org/licenses/by/3.0/"
                        title="Creative Commons BY 3.0"
                        target="_blank"
                        rel="noopener noreferrer">
                        CC 3.0 BY&nbsp;
                        </a>
                </div>
            </div>
        )
    }
}

export default Home;