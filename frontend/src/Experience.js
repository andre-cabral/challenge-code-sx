import React, { Component } from 'react';
import SectionTitle from './TitleSection';

class SectionExperienceRowAwards extends Component{
  render() {
    return (
      <li className="experience-list-item">
        <p className="experience-date">{this.props.experience.month}<br/>{this.props.experience.year}</p>
        <p className="experience-title">{this.props.experience.awardName}</p>
         <p className="experience-subtitle">{this.props.experience.projectName}, {this.props.experience.city}</p>
        <p className="experience-description site-text">{this.props.experience.description}</p>
      </li>
    );
  }
}

class SectionExperienceRowProfessional extends Component{
  render() {
    return (
      <li className="experience-list-item">
        <p className="experience-date">{this.props.experience.month}<br/>{this.props.experience.year}</p>
        <p className="experience-title">{this.props.experience.roleName}</p>
         <p className="experience-subtitle">{this.props.experience.companyName}, {this.props.experience.companyCity}</p>
        <p className="experience-description site-text">{this.props.experience.description}</p>
      </li>
    );
  }
}

class SectionExperienceRowEducation extends Component{
  render() {
    return (
      <li className="experience-list-item">
        <p className="experience-date">{this.props.experience.month}<br/>{this.props.experience.year}</p>
        <p className="experience-title">{this.props.experience.courseName}</p>
         <p className="experience-subtitle">{this.props.experience.universityName}, {this.props.experience.universityCity}</p>
        <p className="experience-description site-text">{this.props.experience.description}</p>
      </li>
    );
  }
}

class SectionExperience extends Component{
  render() {
    var title = this.props.title;
    var rows = [];
    var keyCount = 0;  
    this.props.experiences.forEach(function(experience) {
      if(title === "Education"){
        rows.push( <SectionExperienceRowEducation title={title} experience={experience} key={experience.courseName+keyCount} /> );
        keyCount++; 
      }
      if(title === "Experience"){
        rows.push( <SectionExperienceRowProfessional title={title} experience={experience} key={experience.roleName+keyCount} /> );
        keyCount++;
      }
      if(title === "Award"){
        rows.push( <SectionExperienceRowAwards title={title} experience={experience} key={experience.awardName+keyCount} /> );
        keyCount++;
      }
    });
    return (      
      <section className="section-experience section-content">
        <SectionTitle title={this.props.title} titleClass={this.props.titleClass} />
        <ul className="experience-list">{rows}</ul>
      </section>
    );  }
}

export default SectionExperience;