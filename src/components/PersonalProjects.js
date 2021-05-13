import React from 'react';
import {ExperienceCard} from "./Experience";

const projects = [{
    title: 'MiPedido (2020)',
    subtitle: 'Software Developer',
    description: 'App developed with React Native, Android(Java), Angular 8, and Springboot for Express Shipping packs from pointA to pointB ' +
        'or multipoint with tracking of package',
    gallery: [
        "/portfolio/mipedido/mobile/1.jpeg",
        "/portfolio/mipedido/mobile/2.jpeg",
        "/portfolio/mipedido/mobile/3.jpeg",
        "/portfolio/mipedido/mobile/4.jpeg",
        "/portfolio/mipedido/mobile/5.jpeg",
        "/portfolio/mipedido/mobile/6.jpeg",
        "/portfolio/mipedido/mobile/7.jpeg",
        "/portfolio/mipedido/web/1.jpeg",
        "/portfolio/mipedido/web/2.png",
        "/portfolio/mipedido/web/3.png",
        "/portfolio/mipedido/web/4.png",
        "/portfolio/mipedido/web/5.png",
        "/portfolio/mipedido/web/6.png",
        "/portfolio/mipedido/mobile/deliverier/1.jpeg",
        "/portfolio/mipedido/mobile/deliverier/2.jpeg",
        "/portfolio/mipedido/mobile/deliverier/3.jpeg",
        "/portfolio/mipedido/mobile/deliverier/4.jpeg",
        "/portfolio/mipedido/mobile/deliverier/5.jpeg"
    ]
}, {
    title: 'Pets(2019)',
    subtitle: 'Mobile development',
    description: 'Working with React Native and Firebase to build a Pet Adoption App for a contest in Xalapa',
    gallery: ["/portfolio/pets/pets_1.jpg",
        "/portfolio/pets/pets_2.jpg",
        "/portfolio/pets/pets_3.jpg",
        "/portfolio/pets/pets_4.jpg",
        "/portfolio/pets/pets_5.jpg"]
}, {
    title: 'Hablemos con las manos(2019)',
    subtitle: 'Mobile development',
    description: 'Concept App developed with React Native for helping deaf people with gif keyboard for a contest in Canadá',
    gallery: ["/portfolio/hm/1.gif",
        "/portfolio/hm/2.gif",
        "/portfolio/hm/3.gif"]
}, {
    title: 'Nogales Garbage Bus App(2018-2019)',
    subtitle: 'Mobile and Web development',
    description: 'Using Firebase as backend and Garabage collector app developed in Android and Citizen App in React Native for bus tracking, ' +
        'and getting notifications before bus passing by your street',
    link: 'https://play.google.com/store/apps/details?id=com.nogalesapp',
    gallery: [
        "/portfolio/nogales/track.jpeg",
        "/portfolio/nogales/schedule.jpg",
        "/portfolio/nogales/notifications.jpg",
        "/portfolio/nogales/tips.jpeg",
        "/portfolio/nogales/tip_detail.jpeg",
        "/portfolio/nogales/web/1.png",
        "/portfolio/nogales/web/2.png",
        "/portfolio/nogales/web/3.png"]
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
