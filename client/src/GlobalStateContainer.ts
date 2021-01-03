import { createContainer } from 'unstated-next';
import { useState } from 'react';

export const container = createContainer(() => {
    let [image, setImage] = useState(null);
    let [openWebcam, setWebcamOpen] = useState(false);
    let [openAddImage, setOpenAddImage] = useState(false);
    let [openLookupImage, setOpenLookupImage] = useState(false)
    let [name, setName] = useState('');
    let [loading, setLoading] = useState(false);
    let [photos, setPhotos] = useState(null)
    return {
        image,
        setImage,
        openAddImage,
        setOpenAddImage,
        openWebcam,
        setWebcamOpen,
        name,
        setName,
        openLookupImage,
        setOpenLookupImage,
        loading,
        setLoading,
        photos,
        setPhotos
    };
});
