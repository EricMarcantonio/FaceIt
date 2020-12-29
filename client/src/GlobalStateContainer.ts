import { createContainer } from 'unstated-next';
import { useState } from 'react';

export const container = createContainer(() => {
    let [image, setImage] = useState(null);
    let [openWebcam, setWebcamOpen] = useState(false)
    let [openAddImage, setOpenAddImage] = useState(false);
    let [name, setName] = useState(String)
    return {
        image,
        setImage,
        openAddImage,
        setOpenAddImage,
        openWebcam,
        setWebcamOpen,
        name,
        setName
    };
});