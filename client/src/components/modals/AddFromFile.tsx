//@ts-nocheck
import React, { useState, useCallback, useEffect } from 'react';
import { Button, Modal, TextField } from '@shopify/polaris';
import { WebcamCapture } from '../WebCam';
import { container } from '../../GlobalStateContainer';
import { GetAllImages } from '../../backend/RemoteCalls';
import { parseFiles } from './';

export const AddFromFile = () => {
    const con = container.useContainer();
    const [src, setSrc] = useState('');
    const handleSubmit = async con => {
        parseFiles(con.name)
    };


    return (
        <div style={{ height: '500px', position: 'absolute' }}>
            <Modal
                activator={null}
                open={con.openAddImage}
                onClose={() => {
                    con.setOpenAddImage(!con.openAddImage);
                }}
                title="Adding from your computer? Super easy!"
                secondaryActions={[
                    {
                        content: 'Cancel',
                        onAction: () => con.setOpenAddImage(!con.openAddImage),
                    },
                ]}
            >
                <div className="px-6 space-y-3">
                    <TextField
                        value={con.name}
                        onChange={e => con.setName(e)}
                        placeholder={'Example: Eric Marcantonio'}
                        label="Name"
                    />

                    <input
                        type="file"
                        id="image"
                        value={src}
                        onChange={e => setSrc(e.target.value)}
                        multiple
                    />
                    <Button onClick={() => handleSubmit(con)}>
                        Add Pictures
                    </Button>
                </div>
            </Modal>
        </div>
    );
};
