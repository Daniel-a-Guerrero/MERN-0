# MERN-0

Copying from a MERN stack youtube tutorial by Net Ninja. This is not my original work

## Lecture 1:

Frontend: react runs in browser
Backend: For data, receives data from frontend, Expres app running in node enviornment. Express is a node framework for creating api's. They interact with the database and handles authentication requests.
Express is important because it secures important information from being in the browser.

    App will be an excersise app, and the next course will be on authentication.

## Lecture 2:

Backend directory:
Server.js: Backend entry for application, register express app
Package.json: Keep track of dependencies and register custom scripts
`npm init -y`
Express: `npm install express`
create express app:

    Notes are in backend\server.js

Running a file with nodemon: `nodemon .\server.js`

Devscript: in package.json scripts section, `"dev" : "nodemon server.js"`
