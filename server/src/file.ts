import multer from 'multer'


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/routes/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
export let upload = multer({ storage: storage });