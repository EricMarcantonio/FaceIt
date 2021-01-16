---


---

<h1 id="welcome-to-faceit-👋">Welcome to FaceIt 👋</h1>
<h2 id="query-a-repo-with-your-😀">Query a Repo: with your 😀!</h2>
<p><strong>FaceIt</strong> is an image repository powered by Machine Learning, and your 😀!<br>
<img src="https://lh3.googleusercontent.com/u_V0jUGJ8L5pIKl1db0xiEj0eqCX-9PmOSh04If-PBGmuR0y0j-z56JTmRNM2htCdUPMmBJ1DuzUfJAMv_sj_DDT495MzqoTKtj9w9lLUF87muqjCZoUgyNRsAaPCajiS9wQRNXzbombhaSesIK93qxCrkPQCOdPX66scyvYUuRv-nM-ZPjOGZRrhL98x3_uOM6MF3FigTo2iiMIDmSR7R-XRDacuIlKb1z8NYi6Wn7Lj-CAXYigoegHs1RwoUvEnIAWNprkdg4FRmZ9I_D1UcoXzRiR214Y2jusCiRYtzAcsA5e3ZrBSunniQCnPsGve1blPYxByZW4hroKTpDb7gwcPannsgi7BilU7yJmOuHZBy6wJRy-UskLyYiBiJssAauooBmc4Ypx04wGYie21xkirT0OfGteKRUeAIFc0QkCcF8jnkN1GL0wnzGegYHf2OiZ1WrWPc1I3nqZgUJC_71eSjkEPexTjwtGghwERqfcya7rLR3XHoVUXqTcNTo7iStZowmqx5HfeeRrUlTrbqH-3Ufb37qCXS4ctDxMQE5E6JmpOK9fEfI7zVW2X0nhXMf-yQwJo5I1hxo0fhePfFgF4O5_6FhCbCWPXpRymOMml_vsXdjIlGjGxagoKjd_kZqv4FJmdNHBxXLSiUp2wzzdRedglPUXRlhRZVa1919JdBMR7xNSgdeA1go5DQ=w1783-h849-no?authuser=0" alt="enter image description here"></p>
<h2 id="usage">Usage</h2>
<p><code>$ git clone https://github.com/EricMarcantonio/FaceIt.git</code><br>
<code>$ cd /FaceIt</code><br>
<code>$ docker-compose up</code><br>
Wait about 5-6 minutes if this is your first time running the software<br>
Navigate to <code>localhost:5000</code> to see the app!</p>
<h2 id="features">Features</h2>
<h3 id="add">Add</h3>
<p>Adding selfies is a breeze! Just click <strong>Add Photo by Webcam</strong> or <strong>Add Photo from Computer</strong> to add a photo to the repo.</p>
<h3 id="search">Search</h3>
<p>Need help identifing someone? No problem! Click <strong>Seach by Other Photo</strong> or <strong>Seach by taking a Webcam photo</strong> to ID who is in the picture!</p>
<h3 id="about-nerd-stuff">About (Nerd-stuff)</h3>
<p>FaceIt is built mainly in <code>TypeScript</code>. It is dockerized and is ready for you try out yourself!</p>
<p>Here is a diagram about how the program is structured:</p>
<p><img src="https://lh3.googleusercontent.com/WjyQSHWKCxuwokOj7y0ltm3-N5V56DI7M8S0SJBw5WbEuqwVkc_5RlbKBmxHJDP_30MNwKlggoEaSYCSb_K8YhDO6Y7DOJ0qBIvh44hgot4Q9lhY8I0_z8KEDnUDpUqNOlI_Y2QDeLCunF0b15IQPZ7BJzUD0Px4J-8GXFBmEIJVq3U3MC7xiSKpgC6T6xJLnniZ25RKRjVryVDyyZ_G6DddD-F7EHsigQDTxyoeukwpjJwimRcvfl1y8Lc4TD3ISzxtYocmHyboQtIIcc9nC0h2sv4P4monV_nOHXxJiP_6uSttBb4LOrgmteQbnWClwy3MTU1malMQSaubd3fUVwDRFoV4EZyXHsg1IV7OBQmMPK1ZVHqESoFhZHF7D7QaaP2ZhdzbkwCVaITY2TEfuMpjyqi5VkOq8jqq99oiaQUYba0anwOMEQQRA10vrdhT21NsA0-SYlEbZAd6KJ4z0yCLJwVrSFrrqQYyvWf6qVR31E1skvW7BBnoaOPBa6X3kanzYczOiz5TOZ5X12m7hxNwAGaRLZj0OC9TLFpAXIOVJ9WR-VknbfKOMQwsy1fk1lR3WCIuPllaPOVRYVtug5MHnbxRq_7fxO3qZqorYKFLGqqS3Ig3giu1rQfcX49xnmTJsKzTW-pC2oCJ-SIQoRX-SN8PMGhEE_y_uzG5meaqt8gE6DNwZabZ3uqDcg=w568-h240-no?authuser=0" alt="image"></p>
<p>It has a <code>React</code> front-end using <code>Polaris</code> as its component system. On the back-end it is running <code>NodeJS</code> and <code>ExpressJS</code>. By using the <code>face-api.js</code> package, <strong>FaceIt</strong> is able to obtain the descriptors from each face, and save them into a <code>MongoDB</code> instance (along with the image of course!).  These descriptors are then computed for an unknown face, and then compared with the DB to try and find a match.</p>
<p>The entire program is structed around Docker, with 3 components in their seperate containers: front-end, back-end and the database.</p>

