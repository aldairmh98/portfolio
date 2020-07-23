import React, { Component } from 'react';

const RatingBar = (props) => {
    let { language } = props;
    return <>
        <p><b>{language.name} ({(language.rank / 5) * 100}%)</b></p>
        <div style={{ marginBottom: 10, height: 10, borderRadius: 10, width: '80%', backgroundColor: '#F2F2F2', borderStyle: 'solid', borderWidth: 1, borderColor: '#3F3D56' }}>
            <div style={{ borderRadius: 10, height: '100%', width: `${(language.rank / 5) * 100}%`, backgroundColor: '#2E23DA' }}></div>
        </div>
    </>
}

export { RatingBar };