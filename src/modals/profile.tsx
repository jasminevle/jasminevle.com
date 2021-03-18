import * as React from 'react';

import { Modal, Section } from '../components';

type Props = {
    isShown: boolean;
    setIsShown: (boolean) => void;
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
            <Section title="personal attribute: egg" />
            {/* <Section title="personal skills" />
            <Section title="overall stats" /> */}
            <Section title="general bio:">
                <p>wah</p>
            </Section>
            <Section title="likes:">
                <p>eggs, plants, memes, naps, listening to music, and collecting craft supplies</p>
            </Section>
            <Section title="dislikes:">
                <p>leaving the shopping cart wherever, bugs and spiders, overcooked yolk</p>
            </Section>
        </Modal>
    );
}
