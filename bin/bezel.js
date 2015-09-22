#!/usr/bin/env node

"use strict"

// Dependencies
var fs = require('fs');
var path = require('path');
var ncp = require('ncp').ncp;

// Require commander to parse arguments
var program = require('commander');

// Set the source directory for the copy operation as the example in lib
var rootDir = path.join(path.resolve(__dirname), '../');
console.log("rootDir:", rootDir);

// Set up Commander options and use ncp to copy the template dir to the 
// destination indicated by the command line argument
program
    .version('0.0.2')
    .usage('<destination>')
    .action(function(destination) {
        var source = path.join(rootDir, 'lib/template');
        var dest = path.join(process.cwd(), destination);

        console.log('source:', source);
        console.log('dest:', dest);

        ncp(source, dest, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Created a new project, " + destination + " at:");
                console.log(dest);
                console.log(" ");
                console.log("cd into the project directory and `$ npm install` to install dependencies");
                console.log("run `$ gulp to compile static assets");
                console.log("enjoy!");
            }
        });
    });

program.parse(process.argv);