import React, { Component } from 'react';
import SectionTitle from './TitleSection';

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

export default SectionSkills;