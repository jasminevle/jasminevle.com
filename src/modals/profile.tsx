import * as React from 'react';

import { Modal, Section } from '../components';

type Props = {
    isShown: boolean;
    setIsShown: (boolean) => void;
};

export default function Profile(props: Props) {
    const { isShown, setIsShown } = props;

    return (
        <Modal isShown={isShown} setIsShown={setIsShown} title="character profile (in progress)">
            <Section>
                <h2>name: jasmine le </h2>
                <h2>pronouns: she / her </h2>
                <h2>occupation: software engineer </h2>
            </Section>
            <Section title="personal attribute: egg" />
            {/* <Section title="personal skills" />
            <Section title="overall stats" /> */}
            <Section title="general evaluation:">
                <p>
                    an egg whose favorite things to do include collecting plants, buying craft supplies, and scrolling
                    through instagram. the best way to befriend this person is by sending memes, music recommendations,
                    and fun recipes.
                </p>
            </Section>
        </Modal>
    );
}
