import React, { useEffect, useState } from 'react';
import { Cards, Header, AllImages, SearchBar } from '../components';
import { Page, Frame } from '@shopify/polaris';
import { container } from '../GlobalStateContainer';
import { GetAllImages } from '../backend/RemoteCalls';

export const IndexView = () => {
    const con = container.useContainer();
    
    useEffect(() => {
        con.setLoading(true);

        GetAllImages().then(data => {
            con.setLoading(false);
            con.setPhotos(data.data);
        });
    }, []);
    return (
        <div className=" max-h-screen min-w-full flex">
            <Frame>
                <Page>
                    <div className="flex-auto h-full mx-8">
                        <Header />
                        <Cards />
                        <AllImages />
                    </div>
                </Page>
            </Frame>
        </div>
    );
};
