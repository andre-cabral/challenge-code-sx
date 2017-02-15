import React, { Component } from 'react';
import SectionTitle from './TitleSection';

class SectionContactRow extends Component{
  render() {
    return (
      <li className="contact-list-item">
        <div className={"contact-list-icon "+this.props.iconClass}></div>
        <p className="contact-text site-text">{this.props.text}</p>
      </li>
    );
  }
}

class SectionContact extends Component{
  render() {
    var rows = [];
    this.props.contacts.forEach(function(contactItem) {
      rows.push( <SectionContactRow name={contactItem.name} text={contactItem.text} iconClass={contactItem.iconClass} key={contactItem.name} /> );
    });
    return (      
      <section className="section-contact section-content">
        <SectionTitle title={this.props.title} titleClass={this.props.titleClass}/>
        <ul className="contact-list">{rows}</ul>
      </section>
    );  }
}

export default SectionContact;