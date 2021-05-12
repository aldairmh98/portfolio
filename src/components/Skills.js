import React from 'react';
import skillsCss from './skills.css'

const skillsC = skillsCss;
const data = [{
    name: "JS|TS",
    techs: ["React Native (Medium)", "Express (Medium)", "SocketIO (Medium)", "mongodb (Medium)", "Angular 10 (Medium)",
        "ReactJS (Basic)", "Vue (Basic)", "Next JS (Basic)"],
    imageUrl: 'https://zhengtengfei.gallerycdn.vsassets.io/extensions/zhengtengfei/tjgogo/0.1.2/1544258285972/Microsoft.VisualStudio.Services.Icons.Default'
},
    {
        name: "Java",
        techs: ["Springboot (Medium)", "Resteasy (Medium)", "Hibernate (Medium)", "Springboot JPA (Medium)", "Springboot Mongo (Medium)",
            "Android (Basic)"],
        imageUrl: 'http://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/blogs/javalogo.jpg'
    },
    {
        name: "PHP7",
        techs: ["Pure", "RedbeanPHP"],
        imageUrl: 'https://miro.medium.com/max/4096/1*Y1hq9sHXG26Fyhys81z8rg.png'
    },
    {
        name: "Python3",
        techs: ["Flask", "pymongo", "psycopg2"],
        imageUrl: 'https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png'
    },
    {
        name: "Database",
        techs: ["Postgresql", "MySQL", "MongoDB"],
        imageUrl: 'https://guides.wp-bullet.com/wp-content/uploads/2018/12/export-large-mysql-database-tables-wordpress.png'
    }
];

const SkillCard = (props) => {
    const {skill} = props;
    return (
        <div className={'container shadow rounded-lg pl-3 pr-3 pt-3 pb-1 mb-3'}
             style={{backgroundColor: '#FFF', width: 325}}>
            <div className={'title mb-1'}>{skill.name}</div>
            <div style={{height: 150, maxHeight: 150, display: 'flex', justifyContent: 'center'}}>
                <img style={{maxHeight: 'inherit', width: 'inherit'}}
                     src={skill.imageUrl}/>
            </div>
            <div className={'p-1'}>
                {skill.techs.map(t => <div className={'badge badge-light mr-1'}>{t}</div>)}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <div className={'container'}>
            <div className={'h3'}>Skills</div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {data.map(skill => <SkillCard skill={skill}></SkillCard>)}
            </div>
        </div>
    );
};

export {Skills};
