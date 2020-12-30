import React from "react";
import {
    Button,
    Card,
    DisplayText,
    Heading,
    TextContainer,
} from "@shopify/polaris";

import { container } from "../GlobalStateContainer";
import { ImageFromCPU, WebCamModal } from "./Modal";
export const Cards = () => {
    const con = container.useContainer();
    return (
        <>
            <WebCamModal />
            <ImageFromCPU />
            <div className="grid grid-cols-1 grid-rows-1 gap-5 p-5 mr-8">
                <div>
                    <Card
                        title={<DisplayText>Search for an image</DisplayText>}
                        sectioned
                    >
                        <div className="flex justify-between">
                            <div>
                                <TextContainer>
                                    <Heading>
                                        Some say a picture is worth a thousand
                                        words. Harness that information!
                                    </Heading>
                                    <Button>Search by other photo</Button>
                                    <Button>
                                        Search by taking a webcam photo
                                    </Button>
                                    <Button>Search by name</Button>
                                </TextContainer>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card
                        title={<DisplayText>Add an image</DisplayText>}
                        sectioned
                    >
                        <div className="flex justify-between">
                            <div>
                                <TextContainer>
                                    <Heading>
                                        Want to add more? You've come to the
                                        right place.
                                    </Heading>

                                    <Button
                                        onClick={() => con.setWebcamOpen(true)}
                                    >
                                        Add photo by webcam
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            con.setOpenAddImage(true)
                                        }
                                    >
                                        Add photo from computer
                                    </Button>
                                </TextContainer>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
};
