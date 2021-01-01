import React from 'react';
//@ts-ignore
import Logo from '../images/logo.png';

export const LeftPanel = () => {
    return (
        <div className="pl-5 pt-5">
            <div>
                <img
                    src={Logo}
                    alt="Logo"
                    style={{
                        borderRadius: '10%',
                    }}
                    height="100"
                />
            </div>
            <div className="shadow-lg m-4 rounded-lg">Hello Mother fucker</div>
        </div>
    );
};
