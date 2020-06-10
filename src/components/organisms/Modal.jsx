import React from "react";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal-bg">
                <div className="modal" id="modal">
                    <h2>{this.props.content[0]}</h2>
                    <button className="toggle-button" onClick={this.onClose}>

                    </button>
                    <div className="content">
                        <div className="content-left">
                            <h4>{this.props.content[1][0]}</h4>
                            <p>{this.props.content[2][0]}</p>
                            <h4>{this.props.content[1][1]}</h4>
                            <p>{this.props.content[2][1]}</p>
                        </div>
                        <div className="content-right">
                            <h4>{this.props.content[1][2]}</h4>
                            <p>{this.props.content[2][2]}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};
