import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//import {dataSite} from './data.js';
import SectionExperience from './Experience';
import SectionContact from './Contact';
import SectionSkills from './Skills';
import SectionDescription from './Description';

var dataSite;
var Awards = [];
var Contact = [];
var ExperienceProfessional;
var Education;
var ProfessionalSkills =[];
var PersonalSkills = [];

export function InitJson(dataSiteNew){
  dataSite = dataSiteNew;
  Awards.push(dataSite.award);
  ExperienceProfessional = dataSite.experience.company;
  Education = dataSite.education.university;

  Contact = [
    {name: 'address', text: dataSite.contactMe.address, iconClass: 'address'},
    {name: 'tel', text: dataSite.contactMe.tel, iconClass: 'tel'},
    {name: 'email', text: dataSite.contactMe.email, iconClass: 'email'},
    {name: 'webSite', text: dataSite.contactMe.webSite, iconClass: 'webSite'}
  ];

  for(var i=0;i<dataSite.professionalSkill.tools.length;i++){
    ProfessionalSkills.push({name: dataSite.professionalSkill.tools[i].toolName, progress: dataSite.professionalSkill.tools[i].toolsSkill});
  }

  PersonalSkills = [
    {name: 'management', progress: dataSite.personalSkill.management},
    {name: 'teamWork', progress: dataSite.personalSkill.teamWork},
    {name: 'creative', progress: dataSite.personalSkill.creative},
    {name: 'communication', progress: dataSite.personalSkill.communication}
  ];

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
