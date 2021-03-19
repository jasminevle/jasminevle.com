import React from 'react';

import Profile from '../modals/profile';
import SEO from '../components/seo';

import './index.scss';
import { Button } from '../components';

export default function Home() {
    const [isShownOne, setIsShownOne] = React.useState(false);

    const setModalVisibility = (modalOne: boolean) => {
        setIsShownOne(modalOne);
    };

    return (
        <>
            <SEO title="Jasmine Le" />
            <div className="information-panel">
                <Profile isShown={isShownOne} setIsShown={setIsShownOne} />
            </div>
            <div className="centered-toggle-buttons">
                <h1>hi</h1>
                <p>building building building</p>
                <Button onClick={e => setModalVisibility(true)}>character profile</Button>
            </div>
        </>
    );
}
