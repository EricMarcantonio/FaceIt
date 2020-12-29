import React from "react";
import Webcam from "react-webcam";
import { Button, Heading } from "@shopify/polaris";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
};

interface ImageSet {
    src: any;
    setSrc: any;
    className?: any;
}

const takePicture = (
    webcamRef: React.Ref<any>,
    setSrc: React.SetStateAction<any>
) => {
    // @ts-ignore
    setSrc(webcamRef.current.getScreenshot());
};

export const WebcamCapture = ({ setSrc, className }: ImageSet) => {
    const webcamRef = React.useRef(null);
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={200}
                videoConstraints={videoConstraints}
                className={className}
            />
            <Button primary onClick={() => takePicture(webcamRef, setSrc)}>
                Capture photo
            </Button>
        </>
    );
};

export const ImageClicked = ({ src }: ImageSet) => {
    return (
        <>
            <Heading>Wow, you look amazing!</Heading>
            <img src={src} />
        </>
    );
};
