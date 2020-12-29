import React from "react";
import ReactDOM from "react-dom";
import "../css/main.css";
import "@shopify/polaris/dist/styles.css";
import { container } from "../GlobalStateContainer";

import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";

import {IndexView} from "../views/IndexView";




export default () => {
    return (
        <container.Provider>
            <AppProvider i18n={enTranslations}>
                <React.StrictMode>
                    <IndexView />
                </React.StrictMode>
            </AppProvider>
        </container.Provider>
    );
};


