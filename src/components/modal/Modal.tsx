import * as React from 'react';

import './modal.scss';
import '../button/Button';
import Button from '../button/Button';

type Props = {
    children?: React.ReactNode;
    className?: string;
    isShown: boolean;
    setIsShown: (show: boolean) => void;
    title?: string;
};

export default function Modal(props: Props) {
    const { children, className, isShown, setIsShown, title } = props;

    const modal = (
        <div className={className ? `modal-backdrop ${className}` : `modal-backdrop`}>
            <div className="modal">
                <div className="modal-header">
                    {title && <h1 className="modal-title"> {title} </h1>}
                    <div className="modal-actions">
                        <Button onClick={e => setIsShown(false)}>&times;</Button>
                    </div>
                </div>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );

    return isShown ? modal : null;
}
