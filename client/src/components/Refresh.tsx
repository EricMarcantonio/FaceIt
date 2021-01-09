import { Button } from '@shopify/polaris'
import React from 'react'
import { GetAllImages } from '../backend/RemoteCalls';
import {container} from '../GlobalStateContainer'

export const Refresh = () => {
    const con = container.useContainer();
    const handleClick = async () => {
        con.setLoading(true);
        con.setPhotos(null)
        await GetAllImages().then((data) => {
            con.setLoading(false);
            con.setPhotos(data.data)
        })
    }
    return (
        <Button onClick={() => handleClick()}> Refresh</Button>
    )
}