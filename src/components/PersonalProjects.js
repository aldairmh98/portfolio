import React from 'react';
import {ExperienceCard} from "./Experience";

const projects = [{
    title: 'MiPedido (2020)',
    subtitle: 'Software Developer',
    description: 'App developed with React Native, Android(Java), Angular 8, and Springboot for Express Shipping packs from pointA to pointB ' +
        'or multipoint with tracking of package'
}, {
    title: 'Pets(2019)',
    subtitle: 'Mobile development',
    description: 'Working with React Native and Firebase to build a Pet Adoption App for a contest in Xalapa'
}, {
    title: 'Hablemos con las manos(2019)',
    subtitle: 'Mobile development',
    description: 'Concept App developed with React Native for helping deaf people with gif keyboard for a contest in Canadá'
}, {
    title: 'Nogales Garbage Bus App(2018-2019)',
    subtitle: 'Mobile and Web development',
    description: 'Using Firebase as backend and Garabage collector app developed in Android and Citizen App in React Native for bus tracking, ' +
        'and getting notifications before bus passing by your street'
}];

const PersonalProjects = () => {
    return (
        <div className={'container'}>
            <div className={'h3'}>Personal Projects</div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {projects.map(experience => <ExperienceCard experience={experience}></ExperienceCard>)}
            </div>
        </div>
    );
};

export {PersonalProjects};
