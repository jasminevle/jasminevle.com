import * as React from 'react';

import './button.scss';

type Props = {
    children?: React.ReactNode;
    className?: string;
    onClick?: (event: React.SyntheticEvent) => void;
};

export default function Modal(props: Props) {
    const { children, className, onClick } = props;

    return (
        <button className={className ? `button ${className}` : `button`} onClick={onClick}>
            {children}
        </button>
    );
}
