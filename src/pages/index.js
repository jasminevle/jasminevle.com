import React from 'react';

import { Modal, Section } from '../components';

import './index.scss';

export default function Home() {
    const [isShownOne, setIsShownOne] = React.useState(false);

    return (
        <div class="index">
            <div class="centered-toggle-buttons">
                <h1>hi</h1>
                <p>building building building</p>
                <button
                    id="centered-toggle-button-one"
                    onClick={e => {
                        setIsShownOne(true);
                    }}
                >
                    clicky click
                </button>
            </div>
            <Modal isShown={isShownOne} setIsShown={setIsShownOne} title="character profile (in progress)">
                <Section title="name: jasmine le" />
                <Section title="occupation: software engineer" />
                <Section title="personal attribute: egg" />
                {/* <Section title="personal skills: tbd" />
                <Section title="general evaluation: tbd" /> */}
            </Modal>
        </div>
    );
}
