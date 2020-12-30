//@ts-nocheck
import React, { useState, useCallback } from "react";
import { Button, Modal, TextField } from "@shopify/polaris";
import { WebcamCapture } from "./WebCam";
import { container } from "../GlobalStateContainer";
import axios from "axios";

export const WebCamModal = () => {
    const con = container.useContainer();
    const handleChange = useCallback(() => {
        con.setWebcamOpen(!con.openWebcam);
        con.setImage(null);
    }, [con.openWebcam, con.image]);

    return (
        <div style={{ height: "500px", position: "absolute" }}>
            <Modal
                activator={null}
                open={con.openWebcam}
                onClose={handleChange}
                title="Let's add your beautiful face"
                secondaryActions={[
                    {
                        content: "Cancel",
                        onAction: handleChange,
                    },
                ]}
            >
                <Modal.Section>
                    <WebcamCapture src={con.image} setSrc={con.setImage} />
                </Modal.Section>
            </Modal>
        </div>
    );
};

const parseFiles = () => {
    const fr = new FileReader();
    const im = document.getElementById("image");

    if (!im || !im.files || !im.files[0]) {
        return "Error";
    }

    for (let index = 0; index < im.files.length; index++) {
        //maybe need to be in a unsubmittable form
        fr.onload = () => {
            console.log(fr.result);
        };
        fr.readAsDataURL(im.files[index]);
    }
};

export const ImageFromCPU = () => {
    const con = container.useContainer();

    const [src, setSrc] = useState(null);

    return (
        <div style={{ height: "500px", position: "absolute" }}>
            <Modal
                activator={null}
                open={con.openAddImage}
                onClose={() => con.setOpenAddImage(!con.openAddImage)}
                title="Adding from your computer? Super easy!"
                secondaryActions={[
                    {
                        content: "Cancel",
                        onAction: () => con.setOpenAddImage(!con.openAddImage),
                    },
                ]}
            >
                <div className="px-6 space-y-3">
                    <TextField
                        value={con.name}
                        onChange={e => con.setName(e.target.value)}
                        placeholder={"Example: Eric Marcantonio"}
                        label="Name"
                    />

                    <input
                        type="file"
                        id="image"
                        value={src}
                        onChange={e => setSrc(e.target.value)}
                        multiple
                    />
                </div>
            </Modal>
        </div>
    );
};
