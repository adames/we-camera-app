import React, { Component } from 'react';
import { pages } from '../../app-const';
import './nav.css';

class Nav extends Component {
    handleOnClick = (event) => {
        const selectedIndex = event.target.dataset.key;
        this.props.handlePageChange(selectedIndex)
    }

    render() {
        const { activeComponent } = this.props
        return (
            <div className="Nav">
                {pages.map((page, idx) => 
                        <div 
                            onClick={this.handleOnClick} 
                            data-key={idx} 
                            key={idx} 
                            className={`${page.pageName} ${page.componentName === activeComponent ? 'active' : ''}`}
                        >
                            {page.pageName}
                        </div>)}
            </div>
        )
    }
}

export default Nav;