import * as React from 'react';

import './section.scss';

type Props = {
    children?: React.ReactNode;
    title?: string;
};

export default function Section(props: Props) {
    const { children, title } = props;

    return (
        <div className="section">
            {title && <h2 className="section-title"> {title} </h2>}
            {children}
        </div>
    );
}
