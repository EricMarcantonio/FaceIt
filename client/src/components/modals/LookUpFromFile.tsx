//@ts-nocheck
import React, { useState } from 'react';
import { Button, Modal } from '@shopify/polaris';

import { container } from '../../GlobalStateContainer';
import { LookUpPhoto } from '../../backend/RemoteCalls';

export const LookUpFromFile = () => {
    const con = container.useContainer();
    const [src, setSrc] = useState('');
    const handleSubmit = async () => {
        //Logic
        const im = document.getElementById('lookup');

        if (!im || !im.files || !im.files[0]) {
            alert('Error');
        }
        const fr = new FileReader();
        fr.readAsDataURL(im.files[0]);
        fr.onload = () => {
            LookUpPhoto(fr.result)
                .then(data => {
                    alert('Hello ' + data.data.user + '!');
                })
                .finally(() => {
                    con.setOpenLookupFromFile(!con.openLookupFromFile);
                    setSrc("")
                });
        };
    };

    return (
        <div style={{ height: '500px', position: 'absolute' }}>
            <Modal
                activator={null}
                open={con.openLookupFromFile}
                onClose={() => {
                    con.setOpenLookupFromFile(!con.openLookupFromFile);
                    setSrc('')
                }}
                title="Look Up"
                secondaryActions={[
                    {
                        content: 'Cancel',
                        onAction: () => {
                            con.setOpenLookupFromFile(!con.openLookupFromFile);
                            con.setImage(null);
                            setSrc("")
                        },
                    },
                ]}
            >
                <div className="px-6 space-y-3">
                    <input
                        type="file"
                        id="lookup"
                        value={src}
                        onChange={e => setSrc(e.target.value)}
                    />
                    <Button onClick={() => handleSubmit()}>LookUp</Button>
                </div>
            </Modal>
        </div>
    );
};
