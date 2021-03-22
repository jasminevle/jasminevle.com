import * as React from 'react';

import { Modal, Section } from '../components';

import './styles/profile.scss';

type Props = {
    isShown: boolean;
    setIsShown: (boolean, booleanTwo?) => void;
};

export default function Profile(props: Props) {
    const { isShown, setIsShown } = props;

    return (
        <Modal isShown={isShown} setIsShown={setIsShown} title="character profile (wip)">
            <Section>
                <h2>name: jasmine le </h2>
                <h2>pronouns: she / her </h2>
                <h2>occupation: software engineer </h2>
            </Section>
            {/* <Section title="personal attribute: egg" />
            <Section title="personal skills" />
            <Section title="overall stats" /> */}
            <Section title="general bio:">
                <p>
                    i’m a software engineer interested in a variety of activities, including learning, growing, and
                    developing (both personally and code-wise).
                </p>
                <p>you can usually find me at my laptop or a local nursery.</p>
                <p>
                    if interested in learning more or reaching out, please feel free to{' '}
                    <span className="contact-me-link" onClick={e => setIsShown(false, true)}>
                        contact me
                    </span>
                    .
                </p>
            </Section>
            <Section title="likes:">
                <p>eggs, plants, memes, naps, listening to music, and collecting craft supplies</p>
            </Section>
            <Section title="dislikes:">
                <p>not using the blinker, bugs and spiders, overcooked yolk</p>
            </Section>
        </Modal>
    );
}
