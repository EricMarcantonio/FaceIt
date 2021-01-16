//@ts-nocheck
import { AddFromFile } from './AddFromFile';
import { AddFromWebcamModal } from './AddFromWebcam';
import { LookUpFromWebcamModal } from './LookUpFromWebcam';
import {LookUpFromFile} from './LookUpFromFile'
import { AddPhoto } from '../../backend/RemoteCalls';
const parseFiles = (name: String) => {
    const im = document.getElementById('image');

    if (!im || !im.files || !im.files[0]) {
        return 'Error';
    }

    let req = [];

    for (let index = 0; index < im.files.length; index++) {
        const fr = new FileReader();
        fr.readAsDataURL(im.files[index]);
        fr.onload = () => {
            req.push(AddPhoto(fr.result, name));
        };
    }
    return Promise.all(req);
};

export { AddFromFile, AddFromWebcamModal, LookUpFromWebcamModal, LookUpFromFile, parseFiles };
