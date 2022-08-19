const inquirer = require('inquirer');
const fs = require("fs");

const Manager = require("");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const renderhtml = require("./src/temp");
const members = [];