import React, { useEffect, useState } from "react";
import { GetAllImages } from "../backend/RemoteCalls";

const EachImage = ({ element }) => {
    return (
        <div>
            <img
                src={`data:${element.img.contentType};base64,${Buffer.from(
                    element.img.data.data
                ).toString("base64")}`}
                style={{
                    maxWidth: "200px",
                }}
            />
        </div>
    );
};

export const AllImages = () => {
    const [photos, setPhotos] = useState(null);
    useEffect(() => {
        GetAllImages().then(data => {
            setPhotos(data.data);
        });
    }, []);

    return (
        <>
            <div>
                
            </div>
            <div className="grid grid-cols-4 grid-rows-4 gap-5 p-5 mr-8">
                {photos &&
                    photos.map(element => {
                        return <EachImage element={element} />;
                    })}
            </div>
        </>
    );
};
