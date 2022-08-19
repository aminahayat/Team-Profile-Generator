# Team-Profile-Generator

This project required building a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Tests were written for each part of the code using Jest to ensure that it passes all of them.

When prompted for team members and their information, then an HTML is generated that displays a nicely formatted team roster based on user input.

# Table of content
* Installation
* Usage
* License
* Contributing
* Tests
* Technology used
* Questions

# [Installation section](#installation)
To install this application, clone the code into your terminal for the respective repository. Then, install npm by entering the command npm init into the terminal. Inquirer must then be installed by entering npm install inquirer. Finally, the program can then be run by entering node develop/index.js into the command line, and answering each question appropriately.

# Usage
Inquirer is easiest to use when installed with npm: npm install inquirer. Then you can load the module into your code with a require call: const inquirer = require(‘inquirer’);

Enter management information
You will be redirected to a menu, where you can choose to add an engineer, add an intern, or end the application
If you choose to add an engineer or an intern, you will be re-prompted to the menu until you choose to end the application
Once you end the application, your software team will be generated in an HTML file

# License
This application is rendered under MIT

# Contributers
There are no other contributers.

# Technology
* HTML
* CSS
* JavaScript
* Node.js
* Inquirer
* Path
* Jest

# Questions