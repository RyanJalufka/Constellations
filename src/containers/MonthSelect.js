import React, { Component } from "react";
import { connect } from 'react-redux';
import Select from "react-select";
import { setCurrentMonth } from '../actions/monthAction';
import ConstellationSelect from './ConstellationSelect';

class MonthSelect extends Component {

  handleChange = (opt) => {
    this.props.setCurrentMonth(opt.label);
  }

  render() {
    const months = [
      { label: "January", value: "January" },
      { label: "February", value: "February" },
      { label: "March", value: "March" },
      { label: "April", value: "April" },
      { label: "May", value: "May" },
      { label: "June", value: "June" },
      { label: "July", value: "July" },
      { label: "August", value: "August" },
      { label: "September", value: "September" },
      { label: "October", value: "October" },
      { label: "November", value: "November" },
      { label: "December", value: "December" }
    ];

    return (
      <div>
        <p>Select a month:</p>    
        <Select
          options={months}
          onChange={(opt) => this.handleChange(opt)}
        />
        <ConstellationSelect />
      </div>
      
    );
  }

}

export default connect(null, { setCurrentMonth })(MonthSelect);
