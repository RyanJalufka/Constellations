import React, { Component } from 'react';
import { connect } from 'react-redux';

class ConstellationCard extends Component {

    render(){
        return(
            <div class="constellation">
                <div class="constellation-image">[insert image here]</div>
                <div class="translation">Translation: [insert text]</div>
                <div class="info">Info: [insert text]</div>
            </div>
        );

    }
}

export default ConstellationCard;