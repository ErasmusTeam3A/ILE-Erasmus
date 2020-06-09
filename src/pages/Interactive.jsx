import React from 'react';
import Model from '../components/organisms/Model';
import Back from '../components/atoms/Back';
import Button from '../components/atoms/Button';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';
// import Modal from 'react-bootstrap/Modal'
import Modal from '../components/organisms/Modal'
import data from '../../dist/data/data.json'

class Interactive extends React.Component {
    constructor() {
      super();
      this.state = {
          zoomInPelvicFloor: false,
          zoomInCompartmentUterus: false,
          filterNames: ["skin", "bones"],
          selectedFilter: 0,
            isHidden: true,
            show: false
        }
        this.ToggleHidden = this.toggleHidden.bind(this)


    }

    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };

    toggleHidden() {

        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    zoomInPelvicFloor = () => {
      this.setState({ zoomInPelvicFloor: !this.state.zoomInPelvicFloor });
    }

    zoomInCompartmentUterus = () => {
      this.setState({ zoomInCompartmentUterus:  !this.state.zoomInCompartmentUterus });
    }

    switchFilter = () => {

     this.setState({
        selectedFilter: (this.state.selectedFilter + 1) % this.state.filterNames.length
      });

    }

    render() {
      return (
          <div className="container" >
                <div className="interactive">
                    <div className="interactive__heading">
                        <h2><span>Weergave van:</span><br />
                            Compartimenten Baarmoeder
                        </h2>
                    </div>
                    <div className="interactive__menu">
                        <div className="interactive__menu-heading">
                            <h3>Menu</h3>
                        </div>
                        <Collapsible transitionTime={300} classParentString="collaps" trigger="Onder Lichaam">
                            <Collapsible transitionTime={300} classParentString="collaps" trigger="Bekken">
                                <ul>
                                    <li onClick={this.zoomInPelvicFloor}>Bekkenbodem</li>
                                    <li onClick={this.zoomInCompartmentUterus}>Compartiment baarmoeder</li>
                                </ul>
                            </Collapsible>
                            <Collapsible transitionTime={300} classParentString="collaps" trigger="Bovenbenen">
                                <ul>
                                    <li>Ligamenten baarmoeder</li>
                                </ul>
                            </Collapsible>
                            <Collapsible transitionTime={300} classParentString="collaps" trigger="Voeten">
                                <ul>
                                    <li>Uturus</li>
                                </ul>
                            </Collapsible>

                        </Collapsible>
                        <div className="interactive__menu-filter">
                            {/* <Button link="#" className="button button-side-left" text="filter"></Button> */}
                            <button className="button button-side-left" onClick={this.switchFilter}> Change filter </button>

                        </div>
                    </div>
                    <div className="interactive__side-menu">
                        <button className="button button-side-right" id="centered-toggle-button" onClick={e => {this.showModal(e);}}>
                            {/* {" "} */}
                        show Modal{" "}
                        </button>

                    </div>
                    <Modal onClose={this.showModal} show={this.state.show} content={data}></Modal>
                    {/* <button className="interactive__filter-button" onClick={this.switchFilter}> Change filter </button> */}
                    {/* <Back /> */}
                    {/* hier moet het model komen in plaats van <Model/>*/}
                    <Model zoomInPelvicFloor={this.state.zoomInPelvicFloor} zoomInCompartmentUterus={this.state.zoomInCompartmentUterus} selectedFilter={this.state.selectedFilter} gltfName={this.state.gltfName} />
                </div>
            </div>
      )
    }

}

export default Interactive;
