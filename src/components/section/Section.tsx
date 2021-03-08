import * as React from 'react';

import './section.scss';

type Props = {
    children?: React.ReactNode;
    title?: string;
};

function Section(props: Props) {
    const { children, title } = props;

    return (
        <div className="section">
            {title && <h2 className="section-title"> {title} </h2>}
            {children}
        </div>
    );
}

export default Section;
