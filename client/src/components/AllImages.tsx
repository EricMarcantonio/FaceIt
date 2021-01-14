import { Spinner, TextStyle } from '@shopify/polaris';
import React, { useEffect, useState } from 'react';
import { GetAllImages } from '../backend/RemoteCalls';
import { container } from '../GlobalStateContainer';
import { Refresh } from './Refresh';

const EachImage = ({ element }) => {
    return (
        <div className=" shadow-lg rounded-lg bg-purple-300">
            <img
                src={`data:${element.img.contentType};base64,${Buffer.from(
                    element.img.data.data
                ).toString('base64')}`}
                style={{
                    maxWidth: '200px',
                }}
            />
            <div>
                <TextStyle variation="code">
                    {element.img.features.label}
                </TextStyle>
            </div>
        </div>
    );
};

export const AllImages = () => {
    const con = container.useContainer();

    return (
        <>
        <Refresh/>
            <div className="grid grid-cols-4 grid-rows-4 gap-5 p-5 mr-8">
                {con.photos ? (
                    con.photos.map(element => {
                        return (
                            <EachImage element={element} key={element._id} />
                        );
                    })
                ) : con.loading ? (
                    <Spinner size="large" />
                ) : (
                    <div> No images found </div>
                )}
            </div>
        </>
    );
};
