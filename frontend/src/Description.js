import React, { Component } from 'react';
import SectionTitle from './TitleSection';

class SectionDescription extends Component {
  render() {
    return (
      <section className="section-description section-content">
        <SectionTitle title={this.props.title} titleClass={this.props.titleClass}/>
        <p className="section-description-text site-text">{this.props.text}</p>
      </section>
    );
  }
}

SectionDescription.propTypes = {
	title: React.PropTypes.string.isRequired,
	text: React.PropTypes.string.isRequired,
	titleClass: React.PropTypes.string.isRequired
}

export default SectionDescription;