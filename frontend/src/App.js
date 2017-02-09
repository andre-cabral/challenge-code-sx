import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {dataSite} from './data.js';

var Awards = [];
Awards.push(dataSite.award);
var ExperienceProfessional = dataSite.experience.company;
var Education = dataSite.education.university;

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

var Contact = [
  {name: 'address', text: dataSite.contactMe.address, iconClass: 'address'},
  {name: 'tel', text: dataSite.contactMe.tel, iconClass: 'tel'},
  {name: 'email', text: dataSite.contactMe.email, iconClass: 'email'},
  {name: 'webSite', text: dataSite.contactMe.webSite, iconClass: 'webSite'}
];

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

var ProfessionalSkills =[];

for(var i=0;i<dataSite.professionalSkill.tools.length;i++){
  ProfessionalSkills.push({name: dataSite.professionalSkill.tools[i].toolName, progress: dataSite.professionalSkill.tools[i].toolsSkill});
}

var PersonalSkills = [
  {name: 'management', progress: dataSite.personalSkill.management},
  {name: 'teamWork', progress: dataSite.personalSkill.teamWork},
  {name: 'creative', progress: dataSite.personalSkill.creative},
  {name: 'communication', progress: dataSite.personalSkill.communication}
];

class SectionSkillRow extends Component{
  render() {
    return (
      <li className="skill-list-item">
        <p className="skill-name">{this.props.name}</p>
        <div className="skill-level">
          <div className="skill-level-filled" style={{width: this.props.progress + '%'}}></div>
        </div>
      </li>
    );
  }
}

class SectionSkills extends Component {
  render() {
    var rows = [];
    this.props.skills.forEach(function(skill) {
      rows.push( <SectionSkillRow name={skill.name} progress={skill.progress} key={skill.name} /> );
    });
    return (      
      <section className="section-skill section-content">
        <SectionTitle title={this.props.title} titleClass={this.props.titleClass}/>
        <ul className="skill-list">{rows}</ul>
      </section>
    );
  }
}

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

class App extends Component {
  render() {
    return (
      <article className="container-root">
        <div className="first-block">
          <div className="first-block-internal">
            <section className="main-data-section section-content">
              <img className="main-photo" alt="Foto da pessoa." src="/main-photo.jpg" />
              <h1 className="main-title">{dataSite.name}</h1>
              <h2 className="main-subtitle">{dataSite.profession}</h2>
            </section>
            <SectionDescription title={dataSite.profile.title} text={dataSite.profile.description} titleClass={"profile"}/>
            <SectionDescription title={dataSite.objective.title} text={dataSite.objective.description} titleClass={"objective"}/>
            <SectionSkills title={dataSite.personalSkill.title} skills={PersonalSkills} titleClass={"personal-skills"}/>
            <SectionContact title={dataSite.contactMe.title} contacts={Contact} titleClass={"contact"}/>
          </div>
        </div>
        <div className="second-block">
          <div className="second-block-internal">
            <SectionExperience title={dataSite.education.title} experiences={Education} titleClass={"education"}/>
            <SectionExperience title={dataSite.experience.title} experiences={ExperienceProfessional} titleClass={"experience-professional"}/>
            <SectionSkills title={dataSite.professionalSkill.title} skills={ProfessionalSkills} titleClass={"professional-skill"}/>
            <SectionExperience title={dataSite.award.title} experiences={Awards} titleClass={"award"}/>
          </div>
        </div>
      </article>
    );
  }
}

export default App;
