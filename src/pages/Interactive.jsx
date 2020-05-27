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
      }
    }

    zoomInPelvicFloor = () => {
      this.setState({ zoomInPelvicFloor: true });
    }

    render() {

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
                                  <li>Ligamenten baarmoeder</li>
                                  <li>Uturus</li>
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
                  </div>

                  {/* <Back /> */}
                  {/* hier moet het model komen in plaats van <Model/>*/}

                  <Model zoomInPelvicFloor={this.state.zoomInPelvicFloor} />

              </div>
          </div>
      )
    }

}

export default Interactive;
