import React from 'react';
import Model from '../components/organisms/Model';
import Back from '../components/atoms/Back';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';

class Interactive extends React.Component {
    constructor() {
      super();
      this.state = {
          zoomInPelvicFloor: false,
          zoomInCompartmentUterus: false,
          filterNames: ["skin", "muscles", "arteries"],
          selectedIndex: 0
      }
    }

    zoomInPelvicFloor = () => {
      this.setState({ zoomInPelvicFloor: !this.state.zoomInPelvicFloor });
      console.log("zoompelvic")
    }

    zoomInCompartmentUterus = () => {
      this.setState({ zoomInCompartmentUterus:  !this.state.zoomInCompartmentUterus });
      console.log("zoomuterus")
    }

    switchFilter = () => {

     this.setState({ selectedIndex: (this.state.selectedIndex + 1) % this.state.filterNames.length });

    }

    render() {
        console.log(this.state.selectedIndex)
      return (
          <div className="container">
              <div className="interactive">
                  <div className="interactive__menu">
                      <div className="interactive__menu-heading">
                          <h2>Menu</h2>
                      </div>
                      <Collapsible transitionTime="300" classParentString="collaps" trigger="Onder Lichaam">
                          <Collapsible transitionTime="300" classParentString="collaps" trigger="Bekken">
                              <ul>
                                  <li onClick={this.zoomInPelvicFloor}>Bekkenbodem</li>
                                  <li onClick={this.zoomInCompartmentUterus}>Compartiment baarmoeder</li>
                              </ul>
                          </Collapsible>
                          <Collapsible transitionTime="300" classParentString="collaps" trigger="Bovenbenen">
                              <ul>
                                  <li>Ligamenten baarmoeder</li>
                              </ul>
                          </Collapsible>
                          <Collapsible transitionTime="300" classParentString="collaps" trigger="Voeten">
                              <ul>
                                  <li>Uturus</li>
                              </ul>
                          </Collapsible>

                      </Collapsible>

                      <button className="interactive__filter-button" onClick={this.switchFilter}> Change filter </button>

                  </div>

                  {/* <Back /> */}
                  {/* hier moet het model komen in plaats van <Model/>*/}

                  <Model zoomInPelvicFloor={this.state.zoomInPelvicFloor} zoomInCompartmentUterus={this.state.zoomInCompartmentUterus} />

              </div>
          </div>
      )
    }

}

export default Interactive;
