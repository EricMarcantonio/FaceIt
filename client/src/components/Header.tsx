import React from 'react';
import { Avatar, DisplayText, Heading } from '@shopify/polaris';
//@ts-ignore
import Logo from '../images/logo.png';
export const Header = () => {
    return (
        <div className="w-full p-5 mt-8 flex justify-between">
            <div className="flex items-center space-x-6">
                <img
                    src={Logo}
                    alt="Logo"
                    style={{
                        borderRadius: '10%',
                    }}
                    className={'h-32 w-32'}
                />
                <DisplayText size="extraLarge">
                    Good evening
                </DisplayText>
            </div>
            <div className="flex justify-end mr-8">
                <Avatar customer name="Eric" />
            </div>
        </div>
    );
};
