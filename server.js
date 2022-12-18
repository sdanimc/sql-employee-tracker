const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001);