#Bezel
-------------

Generate a project template based on [Node](https://nodejs.org/en/), [Express](https://www.npmjs.com/package/express), [Browserify](https://www.npmjs.com/package/browserify), and [React](https://www.npmjs.com/package/react). This project was inspired by [Ezel](http://ezeljs.com/), a creation of [Artsy.net](http://artsy.net/).

##Installation
1. Install globally with npm `$ npm install -g bezel`
2. cd into the parent directory of your intended project
3. Create a new project with `$ bezel <project_name>`
4. cd into the projecet directory and enter `$ npm install` to install the project dependencies
5. If you have not already installed Gulp on your machine, install it globally with `$ npm install -g gulp` and compile static assets by simply typing `$ gulp` in the project root.
5. Run the server with `$ node server.js` to get started!

## Project structure
Bezel is attempt to make project template which is scalable, flexible, and isomorphic, meaning that the same components can be used server side or client side. Bezel doesn't force you to choose either paradigm at the outset--in fact the modular approach means that portions of your site can be optimized for either approach by taking advantage of ExpresJS's flexible router system. 

Server.js is the main entry point into the application. Server.js requires apps in the `/apps` folder which are like microservices. Apps should be considered atomic and shouldn't require components or other resources from one another. Bezel includes a very basic API which uses MongoDB and Node-Restful to serve up data. You should definitely migrate to a real backend once you acquainted with the project structure.

##Coming soon
- Testing framework
- Full asset pipeline
- ES6 with Babel handling transpilation of code
- Option of a TypeScript based project template
