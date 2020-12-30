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

    const form = new FormData();
    form.append;

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

export const ImageFromCPU = () => {
    const con = container.useContainer();
    const handleChange1 = useCallback(() => {
        con.setOpenAddImage(!con.openAddImage);
    }, [con.openAddImage]);

    const [wtf, setWtf] = useState(null);

    return (
        <div style={{ height: "500px", position: "absolute" }}>
            <Modal
                activator={null}
                open={con.openAddImage}
                onClose={handleChange1}
                title="Adding from your computer? Super easy!"
                secondaryActions={[
                    {
                        content: "Cancel",
                        onAction: handleChange1,
                    },
                ]}
            >
                <div>
                    <form
                        action="http://localhost:8080/photoLookup"
                        method="POST"
                        encType="multipart/form-data"
                    >
                        <div>
                            <label htmlFor="name">Image Title</label>
                            <TextField
                                label="Name"
                                value={con.name}
                                onChange={e => con.setName(e)}
                            />
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                value={con.name}
                                name="name"
                                required
                                onChange={e => con.setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="image">Upload Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                value={wtf}
                                required
                                onChange={e => setWtf(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};
