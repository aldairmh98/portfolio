import React from 'react';
import skillsCss from './skills.css'

const skillsC = skillsCss;

const experiences = [{
    title: 'Ala Carta!: Software Developer(2020-now)',
    subtitle: 'Founder and Software development',
    description: 'Developing and Implementing Delivery Food App on my city Córdoba, working with Firebase, SocketIO, NodeJS(TypeScript-Express), Python (Flask), ' +
        'Java 8 (Springboot), MongoDB, React Native, ReactJS and Angular 10'
}, {
    title: 'ASTI: Software Developer(2020-2021)',
    subtitle: 'Web and Backend development',
    description: 'Working on a software consultant building a chatbot with RASA, Python and Angular10.' +
        '\nSoftware maintenance: Working with Vue 2 for adding cappabilities to an started project' +
        '\nBackend Development: Working with Java 8, Resteasy, Hibernate and Wildfly'
}, {
    title: 'Kpacita(2020): NOM035 Survey',
    subtitle: 'Web and Backend development',
    description: 'Working with PHP7 and Angular 8, building 2 web pages the first for admin and the second for workers of certain companies'
}, {
    title: 'Blink News: News and Podcast App(2020-2021)',
    subtitle: 'Mobile and Backend development',
    description: 'Developed in React Native and Java 8 Springboot, for a local company'
},
    {
        title: 'Universidad Veracruzana: "Acto Protocolario" Document Generator (2019-2020)',
        subtitle: 'Web and Backend development',
        description: 'Developed in PHP5 and Angular 8, for improve School secretary work on generating PDF with Professors Data ' +
            'and thesis data'
    }, {
        title: 'CONACYT Project: Expedient Management With Blockchain (2018-2019)',
        subtitle: 'Backend and Mobile development',
        description: 'Working with React Native and JavaEE(Resteasy) to integrate via API with another service'
    }]

export const ExperienceCard = (props) => {
    const {experience} = props;
    return (
        <div style={{backgroundColor: '#FFF', width: 325}}
             className={'container shadow rounded-lg pl-3 pr-3 pt-3 pb-1 mb-3'}>
            <div className={'h5'}><b>{experience.title}</b></div>
            <div style={{fontWeight: 'bold'}}>{experience.subtitle}</div>
            <div>{experience.description}</div>
        </div>
    );
};

const Experience = () => {
    return (
        <div className={'container'}>
            <div className={'h3'}>Experience</div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {experiences.map(experience => <ExperienceCard experience={experience}></ExperienceCard>)}
            </div>
        </div>
    );
};

export {Experience};
