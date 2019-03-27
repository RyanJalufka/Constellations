import React, { Component } from 'react';
import { connect } from 'react-redux';

class ConstellationCard extends Component {

    render() {
        return (
            <div className="constellation">
                <div className="constellation-image">[insert image here]</div>
                <div className="constellation-name"> {this.props.constellation.name} </div>
                <div className="translation">Translation: {this.props.constellation.translation} </div>
                <div className="info">Info: [insert text]</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        constellation: state.constellation
    };
}

export default connect(mapStateToProps)(ConstellationCard);