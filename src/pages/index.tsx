import React from 'react';

import Profile from '../modals/profile';

import './index.scss';

export default function Home() {
    const [isShownOne, setIsShownOne] = React.useState(false);

    const setModalVisibility = (modalOne: boolean) => {
        setIsShownOne(modalOne);
    };

    return (
        <>
            <div className="centered-toggle-buttons">
                <h1>hi</h1>
                <p>building building building</p>
                <button onClick={e => setModalVisibility(true)}>clicky click one</button>
            </div>
            <Profile isShown={isShownOne} setIsShown={setIsShownOne} />
        </>
    );
}
