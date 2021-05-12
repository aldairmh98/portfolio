import React, {useState} from 'react';

const Mobile = (props) => {

    const [projects] = useState([1, 2, 3, 4, 5, 6]);
    const [showStart, setShowStart] = useState(true)

    return (
        <div
            className={'shadow-sm'}
            style={{
                height: '30rem',
                maxHeight: '30rem',
                width: '15rem',
                backgroundColor: '#000',
                borderRadius: '.5rem',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: '#000',
                display: 'flex',
                flexDirection: 'column'
            }}>
            {
                showStart ? <section
                    style={{flex: 1, backgroundColor: '#00F', display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
                    {projects.map(() => <div
                        style={{width: '30%', position: 'relative', marginRight: '1.5%', marginLeft: '1.5%'}}>
                        <div
                            onClick={() => {
                                setShowStart(false)
                            }}
                            style={{
                                width: '100%',
                                paddingBottom: '100%',
                                height: 0,
                                aspectRatio: 1,
                                cursor: 'pointer'
                            }}>
                            <img style={{width: '100%', borderRadius: 20}}
                                 src={'https://icon2.cleanpng.com/20171220/gze/twitter-logo-png-5a3a1851372e76.0876249315137567532269680.jpg'}/>
                        </div>
                        <p style={{fontSize: 14, color: '#FFF', textAlign: 'center'}}><b>Ala Carta!</b></p>
                    </div>)}
                </section> : <section key={'screen'} style={{flex: 1, paddingTop: '.5rem', overflowY: 'auto'}}>
                    <img style={{width: '100%'}}
                         src={'/portfolio/mipedido/mobile/1.jpeg'}/>
                </section>
            }
            <section style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#000',
                borderBottomLeftRadius: '.5rem',
                borderBottomRightRadius: '.5rem',
                paddingTop: '1rem',
                paddingBottom: '1rem'
            }}>
                <div style={{color: '#FFF', flex: 1}}>Go Back</div>
                <div
                    onClick={() => {
                        setShowStart(true)
                    }}
                    style={{
                        borderRadius: 25,
                        borderColor: 'gray',
                        borderStyle: 'solid',
                        height: 50,
                        width: 50,
                        cursor: 'pointer'
                    }}/>
                <div
                    onClick={() => {
                        setShowStart(true)
                    }}
                    style={{color: '#FFF', flex: 1, cursor: 'pointer'}}>Menú
                </div>
            </section>
        </div>
    );
};

export default Mobile;
