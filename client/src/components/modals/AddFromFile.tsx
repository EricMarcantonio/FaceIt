//@ts-nocheck
import React, { useState, useCallback } from 'react';
import { Button, Modal, TextField } from '@shopify/polaris';
import { WebcamCapture } from '../WebCam';
import { container } from '../../GlobalStateContainer';
import { AddPhoto } from '../../backend/RemoteCalls';

const parseFiles = (name: String) => {
    const im = document.getElementById('image');

    if (!im || !im.files || !im.files[0]) {
        return 'Error';
    }

    for (let index = 0; index < im.files.length; index++) {
        const fr = new FileReader();
        fr.readAsDataURL(im.files[index]);
        fr.onload = () => {
            AddPhoto(fr.result, name)
                .then(data => {
                    console.log(data.data);
                })
                .catch(err => {
                    console.log(err);
                });
        };
    }
};

export const AddFromFile = () => {
    const con = container.useContainer();

    const [src, setSrc] = useState(null);

    return (
        <div style={{ height: '500px', position: 'absolute' }}>
            <Modal
                activator={null}
                open={con.openAddImage}
                onClose={() => con.setOpenAddImage(!con.openAddImage)}
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
                    <Button onClick={() => parseFiles(con.name)}></Button>
                </div>
            </Modal>
        </div>
    );
};
