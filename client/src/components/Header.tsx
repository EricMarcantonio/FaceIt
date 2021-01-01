import React from 'react';
import { Avatar, DisplayText, Heading } from '@shopify/polaris';

export const Header = () => {
    return (
        <div className="w-full p-5 mt-8 flex justify-between">
            <div className="space-y-3">
                <DisplayText size="extraLarge">
                    Good evening, 99.246.141.37
                </DisplayText>
            </div>
            <div className="flex justify-end mr-8">
                <Avatar customer name="Eric" />
            </div>
        </div>
    );
};
