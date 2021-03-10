import * as React from 'react';
import { navigate } from 'gatsby';

export default function NotFoundPage() {
    // redirect to home page
    React.useEffect(() => {
        navigate('/');
    }, []);

    return (
        <div>
            <h1>(404) NotFound Page</h1>
        </div>
    );
}
