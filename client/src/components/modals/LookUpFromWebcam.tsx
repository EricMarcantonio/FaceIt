//@ts-nocheck
import React from 'react';
import { Button, Modal } from '@shopify/polaris';
import { WebcamCapture } from '../WebCam';
import { container } from '../../GlobalStateContainer';
import { LookUpPhoto } from '../../backend/RemoteCalls';

export const LookUpFromWebcamModal = () => {
    const con = container.useContainer();

    return (
        <div style={{ height: '500px', position: 'absolute' }}>
            <Modal
                activator={null}
                open={con.openLookupImage}
                onClose={() => {
                    con.setOpenLookupImage(!con.openLookupImage);
                    con.setImage(null);
                }}
                title="Who are you?"
                secondaryActions={[
                    {
                        content: 'Cancel',
                        onAction: () => {
                            con.setOpenLookupImage(!con.openLookupImage);
                            con.setImage(null);
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
                        <Button
                            onClick={() =>
                                LookUpPhoto(con.image).then(res => {
                                    alert("Hello " + res.data.user + "!");
                                })
                            }
                        >
                            Who am I? (psst... send to DB to find out!)
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
