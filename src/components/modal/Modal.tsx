import * as React from 'react';

import './modal.scss';

type Props = {
    children?: React.ReactNode;
    className?: string;
    isShown: boolean;
    setIsShown: (boolean) => void;
    title?: string;
};

export default function Modal(props: Props) {
    const { children, className, isShown, setIsShown, title } = props;

    const modal = (
        <div className={`modal-backdrop ${className}`}>
            <div className="modal">
                <div className="modal-header">
                    {title && <h1 className="modal-title"> {title} </h1>}
                    <div className="modal-actions">
                        <button id="close" onClick={e => setIsShown(false)}>
                            &times;
                        </button>
                    </div>
                </div>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );

    return isShown ? modal : null;
}
