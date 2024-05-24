mkdir react-with-parcel
<br/>cd react-with-parcel
<br/>ls
<br/>npm init

<br/>fill details on prompt in CLI:
`package name: (react-with-parcel)
version: (1.0.0)
description: react with parcel basic setup
entry point: (index.js)
test command: jest
git repository:
keywords: react, parcel, setup
author: Avinash Wadhawan
license: (ISC)`
<br/>press ^C anytime to quit

<br/>code .

<br/>npm install react react-dom
<br/>npm install -D parcel
<br/>touch index.html
<br/>touch App.js

<br/>open your index.html & type html:5 then press enter; this will provide a basic html setup for you

<br/>in the body of the HTML page update by this:
	
<br/><div id="root"></div>
<script type="module" src="./App.js"></script>

<br/>now in App.js add these below lines of code:

<br/>import React from "react";
<br/>import ReactDOM from "react-dom";

<br/>const App = () => {
    return (
        <>
            <h1>Welcome to basic React.js App setup using Parcel.js as bundler</h1>
        </>
    )
}

<br/>const root = ReactDOM.createRoot(document.getElementById("root"));

<br/>root.render(root);

<br/>modify package.json file with below code:
<br/>"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },

<br/>touch .gitignore
<br/>touch Readme.md

<br/>now we're ready to launch our react app using parcel by using below command:

<br/>npm run start

<br/>http://localhost:1234/

<img src="basic-react-wth-parcel.png" title="Basic react.js app with parcel.js" />
