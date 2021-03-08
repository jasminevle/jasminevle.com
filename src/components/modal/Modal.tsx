import * as React from 'react';

import './modal.scss';

type Props = {
    children?: React.ReactNode;
    isShown: boolean;
    setIsShown: (boolean) => void;
    title?: string;
};

function Modal(props: Props) {
    const { children, isShown, setIsShown, title } = props;

    const modal = (
        <div className="modal-backdrop">
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

export default Modal;
