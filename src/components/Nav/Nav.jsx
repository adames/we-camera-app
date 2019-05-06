import React, { Component } from 'react';
import { pages } from '../../app-const';
import './nav.css';

class Nav extends Component {
    handleOnClick = (key, event) => {
        this.props.handlePageChange(key)
    }

    render() {
        const { activeComponent } = this.props
        return (
            <div className="Nav">
                {pages.map((page, idx) => 
                        <div 
                            onClick={this.handleOnClick.bind(this, idx)} 
                            className={`${page.pageName} ${page.componentName === activeComponent ? 'active' : ''}`}
                        >
                            {page.pageName}
                        </div>)}
            </div>
        )
    }
}

export default Nav;