import React, { useState } from "react";
import {Cards} from '../components/Cards'
import {Header} from '../components/Header'
import { LeftPanel } from "../components/LeftPanel";
import { AllImages } from '../components/AllImages'
export const IndexView = () => {
    return (
        <div className=" max-h-screen min-w-full flex">
            <div className="max-h-screen w-96">
               <LeftPanel/>
            </div>
            <div className="flex-auto h-full mx-8">
                <Header/>
                <Cards/>
                <AllImages/>
            </div>
        </div>
    );
};
