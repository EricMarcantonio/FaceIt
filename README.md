---


---

<h1 id="welcome-to-faceit-👋">Welcome to FaceIt 👋</h1>
<h2 id="query-a-repo-with-your-😀">Query a Repo: with your 😀!</h2>
<p><strong>FaceIt</strong> is an image repository powered by Machine Learning, and your 😀!<br>
<img src="https://i.ibb.co/L5f4qBB/0-F4-CF782-016-E-4784-9-BA0-743-B746-C13-A1.png"></p>
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
<p><img src="https://i.ibb.co/V26yZCb/5113-C93-D-7402-4994-8-B5-A-31918-D88-F55-A.jpg"></p>
<p>It has a <code>React</code> front-end using <code>Polaris</code> as its component system. On the back-end it is running <code>NodeJS</code> and <code>ExpressJS</code>. By using the <code>face-api.js</code> package, <strong>FaceIt</strong> is able to obtain the descriptors from each face, and save them into a <code>MongoDB</code> instance (along with the image of course!).  These descriptors are then computed for an unknown face, and then compared with the DB to try and find a match.</p>
<p>The entire program is structed around Docker, with 3 components in their seperate containers: front-end, back-end and the database.</p>

