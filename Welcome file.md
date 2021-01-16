
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
FaceIt is built mainly in `TypeScript`. It is dockerized and is ready for you try out yourself!

Here is a diagram about how the program is structured:

![image](https://lh3.googleusercontent.com/WjyQSHWKCxuwokOj7y0ltm3-N5V56DI7M8S0SJBw5WbEuqwVkc_5RlbKBmxHJDP_30MNwKlggoEaSYCSb_K8YhDO6Y7DOJ0qBIvh44hgot4Q9lhY8I0_z8KEDnUDpUqNOlI_Y2QDeLCunF0b15IQPZ7BJzUD0Px4J-8GXFBmEIJVq3U3MC7xiSKpgC6T6xJLnniZ25RKRjVryVDyyZ_G6DddD-F7EHsigQDTxyoeukwpjJwimRcvfl1y8Lc4TD3ISzxtYocmHyboQtIIcc9nC0h2sv4P4monV_nOHXxJiP_6uSttBb4LOrgmteQbnWClwy3MTU1malMQSaubd3fUVwDRFoV4EZyXHsg1IV7OBQmMPK1ZVHqESoFhZHF7D7QaaP2ZhdzbkwCVaITY2TEfuMpjyqi5VkOq8jqq99oiaQUYba0anwOMEQQRA10vrdhT21NsA0-SYlEbZAd6KJ4z0yCLJwVrSFrrqQYyvWf6qVR31E1skvW7BBnoaOPBa6X3kanzYczOiz5TOZ5X12m7hxNwAGaRLZj0OC9TLFpAXIOVJ9WR-VknbfKOMQwsy1fk1lR3WCIuPllaPOVRYVtug5MHnbxRq_7fxO3qZqorYKFLGqqS3Ig3giu1rQfcX49xnmTJsKzTW-pC2oCJ-SIQoRX-SN8PMGhEE_y_uzG5meaqt8gE6DNwZabZ3uqDcg=w568-h240-no?authuser=0)

It has a `React` front-end using `Polaris` as its component system. On the back-end it is running `NodeJS` and `ExpressJS`. By using the `face-api.js` package, **FaceIt** is able to obtain the descriptors from each face, and save them into a `MongoDB` instance (along with the image of course!).  These descriptors are then computed for an unknown face, and then compared with the DB to try and find a match.

The entire program is structed around Docker, with 3 components in their seperate containers: front-end, back-end and the database.


<!--stackedit_data:
eyJoaXN0b3J5IjpbNDAzMjE4NTE5LDIxMzkzMzAzODAsLTE1Mz
Y4NzY0NTcsMTI2MjU3NDM5MywtMTAxMzAzMjY1LDg5ODg1NjIx
NV19
-->