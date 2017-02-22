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
  componentWillMount() {
    //this.setState({loading: true});
    console.log("will mount SectionContact")
  }

  componentDidMount() {
    //this.setState({loading: true});
    console.log("did mount SectionContact")
  }

//update events only happen when the PARENT component refreshes and call again the component that will execute willupdate, did update and receive props.
  componentWillUpdate() {
    //this.setState({loading: true});
    console.log("will update SectionContact")
  }

  componentDidUpdate() {
    //this.setState({loading: true});
    console.log("did update SectionContact")
  }

  componentWillReceiveProps(nextProps) {
    //this.setState({loading: true});
    console.log("will receive props SectionContact");
    if (nextProps.requestRefresh !== this.props.requestRefresh) {
      console.log("nextProps SectionContact");
    }
  }
  
  componentWillUnmount() {
    //this.setState({loading: true});
    console.log("will unmount SectionContact")
  }

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

SectionContact.propTypes = {
  title: React.PropTypes.string.isRequired,
  contacts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  titleClass: React.PropTypes.string.isRequired
}

export default SectionContact;