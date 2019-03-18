import React, { Component } from 'react';
import CaptureImage from './components/CaptureImage/CaptureImage';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import { pages } from './app-const';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {activeComponent: pages[0].componentName};
  }

  handlePageChange = (pageIndex) => {
    this.setState({
      activeComponent: pages[pageIndex].componentName
    })
  }

  render() {
    const { activeComponent } = this.state;
    return (
      <div className="App">
        <Nav handlePageChange={this.handlePageChange} activeComponent={activeComponent} />
        { activeComponent === pages[0].componentName && <Home /> }
        { activeComponent === pages[1].componentName && <Gallery /> }
        { activeComponent === pages[2].componentName && <CaptureImage /> }
      </div>
    );
  }
}

export default App;
