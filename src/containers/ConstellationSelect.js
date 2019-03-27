import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Constellations from '../data/constellations.json';
import { setCurrentConstellation } from '../actions/constellationAction';

class ConstellationSelect extends Component {

  renderConstellationList = (month) => {
    let array = Constellations[`${month}`];

    return _.map(array, data => {
      return (
        <li key={data.name} onClick={() => this.props.setCurrentConstellation(data)}>{data.name}</li>
      );
    });
  }

  render() {

    return (
      <div>
        {this.props.month.length === undefined ?
          <div>you don't have a month selected</div>
          :
          <div>{this.renderConstellationList(this.props.month)}</div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    month: state.month
  };
}

export default connect(mapStateToProps, { setCurrentConstellation })(ConstellationSelect)
