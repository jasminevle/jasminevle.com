import * as React from 'react';

import './section.scss';

type Props = {
    children?: React.ReactNode;
    className?: string;
    title?: string;
};

export default function Section(props: Props) {
    const { children, className, title } = props;

    return (
        <div className={className ? `section ${className}` : `section`}>
            {title && <h2 className="section-title"> {title} </h2>}
            {children}
        </div>
    );
}
