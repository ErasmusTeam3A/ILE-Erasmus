import React from 'react';
import undo from '../../dist/icons/undo.png'
import human from '../../dist/icons/human.png'
import hips from '../../dist/icons/human-hips.png'
import Button from '../components/atoms/Button';


class Select extends React.Component{
    constructor(){
        
    }

    render() {
        let image = this.state.active ? {human} : {hips}
    return (
        <div className="container">
            <div className="select">
                <div className="select__content-wrapper">
                    <div className="select__head-wrapper">

                        <div className="title">
                            <h1>Selecteer lichaamsdeel</h1>
                        </div>

                        <div className="back">
                            <img src={undo} alt='undo'></img>
                        </div>

                        <div className="text">
                            <p>Klik op het lichaam om <br /> een interactieve weergave te openen van dit onderdeel</p>
                        </div>
                    </div>

                    <div className="silhouette">

                        <img src={ image } onClick={() => this.setState({active: !this.state.active})}></img>
                    </div>
                    <div className="start__button-container">
                        <div className="start__button-wrapper">
                            <Button link="/interactive" text="Start" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default Select;