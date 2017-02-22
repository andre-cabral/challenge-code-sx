import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//import {dataSite} from './data.js';
import SectionExperience from './Experience';
import SectionContact from './Contact';
import SectionSkills from './Skills';
import SectionDescription from './Description';
import SearchForm from './SearchForm';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {loading: "not_loaded"}    
  }  

  InitJson(dataSiteNew){

    let dataSite_load;
    let Awards_load = [];
    let Contact_load = [];
    let ExperienceProfessional_load;
    let Education_load;
    let ProfessionalSkills_load =[];
    let PersonalSkills_load = [];

    dataSite_load = dataSiteNew;
    Awards_load.push(dataSite_load.award);
    ExperienceProfessional_load = dataSite_load.experience.company;
    Education_load = dataSite_load.education.university;

    Contact_load = [
      {name: 'address', text: dataSite_load.contactMe.address, iconClass: 'address'},
      {name: 'tel', text: dataSite_load.contactMe.tel, iconClass: 'tel'},
      {name: 'email', text: dataSite_load.contactMe.email, iconClass: 'email'},
      {name: 'webSite', text: dataSite_load.contactMe.webSite, iconClass: 'webSite'}
    ];

    for(var i=0;i<dataSite_load.professionalSkill.tools.length;i++){
      ProfessionalSkills_load.push({name: dataSite_load.professionalSkill.tools[i].toolName, progress: dataSite_load.professionalSkill.tools[i].toolsSkill});
    }

    PersonalSkills_load = [
      {name: 'management', progress: dataSite_load.personalSkill.management},
      {name: 'teamWork', progress: dataSite_load.personalSkill.teamWork},
      {name: 'creative', progress: dataSite_load.personalSkill.creative},
      {name: 'communication', progress: dataSite_load.personalSkill.communication}
    ];

    const dataLoaded_load = {
      dataSite: dataSite_load,
      Awards: Awards_load,
      Contact: Contact_load,
      ExperienceProfessional: ExperienceProfessional_load,
      Education: Education_load,
      ProfessionalSkills: ProfessionalSkills_load,
      PersonalSkills: PersonalSkills_load
    }

    //a call to setState will cause render to be called again
    //you can set many states in the same function to call only once the render
    this.setState({dataLoaded: dataLoaded_load, loading: "loaded"});
  }

  refresh() {
    this.setState({loading: "loading"});

    fetch('http://www.mocky.io/v2/57dfec211000009020598073')
    .then( (response) => {response.json()
      .then( (json)=>{this.InitJson(json);} )
    })
    .catch(function(err) {
      console.log(err);
    });
  }

  handleSearch(val) {
    // Called when the 
    console.log(val);
  }

  render() {
    const {loading} = this.state;
    console.log(loading);



    if(loading === "not_loaded"){
      return (
        <article className="container-root">
          <button onClick={this.refresh.bind(this)}>
            Load
          </button>
          <SearchForm
            searchVisible={true}
            onSubmit={this.handleSearch.bind(this)} />
        </article>
      );
    }
    if(loading === "loading"){
      return (
        <p>Loading</p>
      );
    }
    if(loading === "loaded"){
      const {dataSite, Awards, Contact, ExperienceProfessional, Education, ProfessionalSkills, PersonalSkills} = this.state.dataLoaded;
      return (
        <article className="container-root">
          <button onClick={this.refresh.bind(this)}>
            ReLoad
          </button>

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
}

export default App;
