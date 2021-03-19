import * as React from 'react';

import { Modal, Section } from '../components';

import './styles/contact.scss';

type Props = {
    isShown: boolean;
    setIsShown: (boolean) => void;
};

export default function Contact(props: Props) {
    const { isShown, setIsShown } = props;
    const githubIcon = require('../images/github-icon.png');
    const linkedInIcon = require('../images/linkedin-icon.png');

    return (
        <Modal isShown={isShown} setIsShown={setIsShown} title="contact me">
            <Section className="contact-links-section" title="would you like to contact me?">
                <a href="https://www.linkedin.com/in/jasminevle/" target="_blank">
                    <img src={linkedInIcon} alt="link to linkedin"></img>
                </a>
                <a href="https://github.com/jasminevle" target="_blank">
                    <img src={githubIcon} alt="link to github"></img>
                </a>
            </Section>
        </Modal>
    );
}
