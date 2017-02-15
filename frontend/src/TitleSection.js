import React, { Component } from 'react';

class SectionTitle extends Component {
  render() {
    return (
      <div className="section-title-container">
        <div className={"section-title-icon "+this.props.titleClass}></div>
        <h3 className="section-title">{this.props.title}</h3>
      </div>
    );
  }
}

export default SectionTitle;