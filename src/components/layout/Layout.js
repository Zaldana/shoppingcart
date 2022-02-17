import React from 'react';
import Navbar from './Navbar';

const Layout = (props) => {
    const { children } = props;

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
};

export default Layout;