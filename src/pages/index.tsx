import React from 'react';

import SEO from '../components/seo';
import Contact from '../modals/contact';
import Profile from '../modals/profile';

import './index.scss';
import { Button } from '../components';

export default function Home() {
    const [isProfileShown, setIsProfileShown] = React.useState(false);
    const [isContactShown, setIsContactShown] = React.useState(false);

    const setModalVisibility = (showProfile: boolean, showContact: boolean = false) => {
        setIsProfileShown(showProfile);
        setIsContactShown(showContact);
    };

    return (
        <>
            <SEO title="Jasmine Le" />
            <div className="information-panel">
                <Profile isShown={isProfileShown} setIsShown={setModalVisibility} />
                <Contact isShown={isContactShown} setIsShown={setIsContactShown} />
            </div>
            <div className="centered-toggle-buttons">
                <h1>hi</h1>
                <p>building building building</p>
                <Button className="show-modal-button" onClick={e => setModalVisibility(!isProfileShown, false)}>
                    about me
                </Button>
                <Button className="show-modal-button" onClick={e => setModalVisibility(false, !isContactShown)}>
                    contact me
                </Button>
            </div>
        </>
    );
}
