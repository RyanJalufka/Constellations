import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Constellations from '../data/constellations.json';
import { setCurrentConstellation } from '../actions/constellationAction';
import ListGroup from 'react-bootstrap/ListGroup';

class ConstellationSelect extends Component {

  renderConstellationList = (month) => {
    let array = Constellations[`${month}`];

    return _.map(array, data => {
      return (
        <ListGroup.Item key={data.name} onClick={() => this.props.setCurrentConstellation(data)}>{data.name}</ListGroup.Item>
      );
    });
  }

  render() {
    return (
      <div>
        {this.props.month.length === undefined ?
          <div></div>
          :
          <div className="list-group">
          <ListGroup>{this.renderConstellationList(this.props.month)}</ListGroup>
          </div>
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
