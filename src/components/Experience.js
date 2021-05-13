import React, {createRef, useEffect, useState} from 'react';
import skillsCss from './skills.css'

const skillsC = skillsCss;

const experiences = [{
    title: 'Ala Carta!: Software Developer(2020-now)',
    subtitle: 'Founder and Software development',
    description: 'Developing and Implementing Delivery Food App on my city Córdoba, working with Firebase, SocketIO, NodeJS(TypeScript-Express), Python (Flask), ' +
        'Java 8 (Springboot), MongoDB, React Native, ReactJS and Angular 10',
    link: 'https://play.google.com/store/apps/details?id=com.alacartmobile'
}, {
    title: 'ASTI: Software Developer(2020-2021)',
    subtitle: 'Web and Backend development',
    description: 'Working on a software consultant building a chatbot with RASA, Python and Angular10.' +
        '\nSoftware maintenance: Working with Vue 2 for adding cappabilities to an started project' +
        '\nBackend Development: Working with Java 8, Resteasy, Hibernate and Wildfly'
}, {
    title: 'Kpacita(2020): NOM035 Survey',
    subtitle: 'Web and Backend development',
    description: 'Working with PHP7 and Angular 8, building 2 web pages the first for admin and the second for workers of certain companies',
    gallery: [
        "/portfolio/nom_survey/1.png",
        "/portfolio/nom_survey/2.png",
        "/portfolio/nom_survey/3.png",
        "/portfolio/nom_survey/4.png",
        "/portfolio/nom_survey/5.png",
        "/portfolio/nom_survey/6.png"
    ]
}, {
    title: 'Blink News: News and Podcast App(2020-2021)',
    subtitle: 'Mobile and Backend development',
    description: 'Developed in React Native and Java 8 Springboot, for a local company',
    link: 'https://play.google.com/store/apps/details?id=com.blinknews',
    gallery: [
        "https://play-lh.googleusercontent.com/Pt8D905Ks_CPt1yeC30fqQYrrzpUOt5oz2FiuqlYKxSXNuVe3OYjxkN3_gofb2dHM0J_=w3072-h1580",
        "https://play-lh.googleusercontent.com/KC0MIpV-bt_En4Xw8MLzz-Lug-Op02bR2Wa5zApngiGb2EJMiIgHHIieZuzmlbGcdU8=w3072-h1580",
        "https://play-lh.googleusercontent.com/XHE8seHuSkpoby0SZSHCzDpdcWtSXNTnjxap_RpbTYp8yt3KdB3hQR6RTQcBsKXzEW58=w3072-h1580",
        "https://play-lh.googleusercontent.com/qAzuqQ09FpTJGtaIJuZpF3GplQwNBZlR0KtvZ7U7WTY4dQ8-2ok6lRvmXQIc3Ojxvg=w3072-h1580",
        "https://play-lh.googleusercontent.com/jNxuFPayeGjWkLti_LqCBlWRx-40mFX1jVx9JjFz2vxCGfCAEWCGR9RuFLjYLvUHi5K9=w3072-h1580"
    ]
},
    {
        title: 'Universidad Veracruzana: "Acto Protocolario" Document Generator (2019-2020)',
        subtitle: 'Web and Backend development',
        description: 'Developed in PHP5 and Angular 8, for improve School secretary work on generating PDF with Professors Data ' +
            'and thesis data',
        gallery: [
            "/portfolio/pdfGen/1.png",
            "/portfolio/pdfGen/6.png",
            "/portfolio/pdfGen/2.png",
            "/portfolio/pdfGen/3.png",
            "/portfolio/pdfGen/5.png"
        ]
    }, {
        title: 'CONACYT Project: Expedient Management With Blockchain (2018-2019)',
        subtitle: 'Backend and Mobile development',
        description: 'Working with React Native and JavaEE(Resteasy) to integrate via API with another service',
        gallery: [
            "/portfolio/expedient/login.png",
            "/portfolio/expedient/expedient_list.png",
            "/portfolio/expedient/documents_list.png",
            "/portfolio/expedient/document_details.png",
            "/portfolio/expedient/requests.png",
            "/portfolio/expedient/sharing.png"
        ]
    }]

const FooterCard = (props) => {
    const {link, gallery, onGalleryClick} = props;
    if (!link && !gallery) return null;
    return <div className={'w-100'} style={{display: 'flex', justifyContent: 'space-around'}}>
        {link &&
        <div><a target={'_blank'} href={link}><i className="bi bi-link" style={{fontSize: '2rem'}}></i></a></div>}
        {gallery &&
        <div>
            <a
                className={'btn'}
                onClick={() => onGalleryClick(gallery)}
                target={'_blank'}>
                <i className="bi bi-images"
                   style={{fontSize: '2rem', cursor: 'pointer'}}/></a>
        </div>}
    </div>
}


export const GalleryModal = (props) => {

    const {visible, gallery} = props;

    const [currentImage, setCurrentImage] = useState(0)

    const imageRef = createRef()

    function onChangeImage(value) {
        const nextIndex = currentImage + value;
        if (nextIndex === -1) {
            return;
        }
        if (nextIndex > (gallery.length - 1)) {
            return;
        }
        setCurrentImage(nextIndex);
    }

    useEffect(() => {
        const body = document.getElementsByTagName('body');
        if (props.visible) {
            body.item(0).style.overflowY = 'hidden';
            return;
        }
        body.item(0).style.overflowY = 'auto';
    }, [props.visible])

    if (!visible || !gallery) return null;

    return (
        <div
            id={'galleryModal'}
            style={{
                position: "fixed",
                width: '100%',
                zIndex: 99999,
                backgroundColor: 'black',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }}>
            <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', justifyContent: 'flex-end', padding: 10}}>
                    <button className={'btn btn-dark rounded-circle'} onClick={props.onClose}><i className="bi bi-x"/>
                    </button>
                </div>
                <div style={{display: 'flex', flex: 1}}>
                    <div
                        className={'pl-3 pr-3'}
                        style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {currentImage > 0 &&
                        <button className={'btn btn-dark rounded-circle'}
                                onClick={() => onChangeImage(-1)}><i className="bi bi-arrow-left-short"/></button>}
                    </div>
                    <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img
                            ref={imageRef}
                            onLoad={evt => {
                                const {naturalHeight, naturalWidth} = evt.target;
                                if (naturalWidth > naturalHeight) {
                                    imageRef.current.style.width = '80%';
                                    imageRef.current.style.height = 'auto';
                                }
                            }}
                            style={{width: 'auto', height: '80vh'}} src={gallery[currentImage]}/>
                    </div>
                    <div
                        className={'pl-3 pr-3'}
                        onClick={() => onChangeImage(1)}
                        style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {currentImage < (gallery.length - 1) &&
                        <button className={'btn btn-dark rounded-circle'}
                                onClick={() => onChangeImage(1)}>
                            <i className="bi bi-arrow-right-short"/>
                        </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


export const ExperienceCard = (props) => {
    const {experience} = props;
    const [visible, setVisible] = useState(false);

    return (
        <div style={{backgroundColor: '#FFF', width: 325, display: 'flex', flexDirection: 'column'}}
             className={'container shadow rounded-lg pl-3 pr-3 pt-3 pb-1 mb-3'}>
            <GalleryModal gallery={experience.gallery} onClose={() => setVisible(false)} visible={visible}/>
            <div className={'h5'}><b>{experience.title}</b></div>
            <div style={{fontWeight: 'bold'}}>{experience.subtitle}</div>
            <div>{experience.description}</div>
            <div style={{flex: 1, display: 'flex', alignItems: 'flex-end'}}>
                <FooterCard
                    onGalleryClick={(gallery = []) => {
                        setVisible(true)
                    }} link={experience.link}
                    gallery={experience.gallery}/>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <div className={'container'}>
            <div className={'h3'}>Experience</div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {experiences.map(experience => <ExperienceCard experience={experience}/>)}
            </div>
        </div>
    );
};

export {Experience};
