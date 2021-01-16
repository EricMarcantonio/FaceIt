
# Welcome to FaceIt 👋

## Query a Repo: with your 😀!

**FaceIt** is an image repository powered by Machine Learning, and your 😀!

## Usage

`$ git clone https://github.com/EricMarcantonio/FaceIt.git`
`$ cd /FaceIt`
`$ docker-compose up`
 Wait about 5-6 minutes if this is your first time running the software
 Navigate to `localhost:5000` to see the app!



## Features
### Add
Adding selfies is a breeze! Just click **Add Photo by Webcam** or **Add Photo from Computer** to add a photo to the repo.
### Search 
Need help identifing someone? No problem! Click **Seach by Other Photo** or **Seach by taking a Webcam photo** to ID who is in the picture!

### About (Nerd-stuff)
FaceIt is built in mainly `TypeScript`. It is dockerized and is ready for you try out yourself!

Here is a diagram about how the program is structured:

It has a `React` front-end using `polaris` as its component system. On the back-end it is running `NodeJs` and `ExpressJs`. By using the `face-api.js` package, FaceIt is able to obtain the descriptors from each face, and save them into a `MongoDB` instance


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTkwMjMzMjY5NSw4OTg4NTYyMTVdfQ==
-->