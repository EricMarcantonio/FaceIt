import React, { useState, useCallback } from 'react';
import { Button, Modal, TextField } from '@shopify/polaris';
import { WebcamCapture } from '../WebCam';
import { container } from '../../GlobalStateContainer';
import { AddPhoto } from '../../backend/RemoteCalls';

export const AddFromWebcamModal = () => {
    const con = container.useContainer();

    return (
        <div style={{ height: '500px', position: 'absolute' }}>
            <Modal
                activator={null}
                open={con.openWebcam}
                onClose={() => {
                    con.setWebcamOpen(!con.openWebcam);
                    con.setImage(null);
                    con.setName("")
                }}
                title="Let's add your beautiful face"
                secondaryActions={[
                    {
                        content: 'Cancel',
                        onAction: () => {
                            con.setWebcamOpen(!con.openWebcam);
                            con.setImage(null);
                            con.setName("");
                        },
                    },
                ]}
            >
                <div className="flex items-center justify-items-center">
                    <div>
                        <Modal.Section>
                            <WebcamCapture
                                src={con.image}
                                setSrc={con.setImage}
                            />
                        </Modal.Section>
                    </div>
                    <div className="space-y-3">
                        <img src={con.image} />
                        <TextField
                            value={con.name}
                            onChange={e => con.setName(e)}
                            placeholder={'Example: Eric Marcantonio'}
                            label="Name"
                        />
                        <Button onClick={() => AddPhoto(con.image, con.name)}>
                            I look amazing! (send to DB)
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
