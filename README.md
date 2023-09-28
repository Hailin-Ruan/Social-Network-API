# Social-Network-API

## Table of Contents
- [Description](#description)
- [Built With](#built-with)
- [Installation](#installation)

## Description

MongoDB is a top choice for social networks and businesses, thanks to its exceptional speed in handling large data volumes and its adaptability to unstructured information. In the age of big data, MongoDB's NoSQL database system is transforming data management, offering a dynamic solution that empowers organizations to maximize their data assets.

This repo is an API for social network web application where users can share their thoughts, react to friend's thoughts, and create a friend list. 
With the help of Insomnia Core, the user is able to:

[USERS](#users)
- GET all users
- GET a single user by Id
- POST a new user
- PUT to update a user by Id
- DELETE to remove user by Id

**FRIENDS**
- POST to add a new friend to a user's friend list
- DELETE to remove a friend from user's freind list

**THOUGHTS**
- GET all thoughts
- GET a single thought by Id
- POST to create a new thought
- PUT to update a thought by Id
- DELETE to remove thought by Id

**REACTIONS**
- POST to create a reaction
- DELETE to remove a reaction 

## Built with

<p><a href="https://nodejs.org/">Node.js</a></p>
<p><a href="https://www.npmjs.com/">NPM</a></p>
<p><a href="https://www.npmjs.com/package/express">Express.js</a></p>
<p><a href="https://www.mongodb.com/">MongoDB</a></p>
<p><a href="https://www.mongoosejs.com/">Mongoose</a></p>

## Installation

Please install the following if you have not installed:
* Express: ^4.17.1
* Mongoose: ^7.0.2
* Nodemon: ^2.0.9

Add these files:
* package.json (by running npm init)
* gitignore (to ignore node_modules)

## Users

Get all users
<img width="1440" alt="Screen Shot 2023-09-29 at 3 28 11 am" src="https://github.com/Hailin-Ruan/Social-Network-API/assets/134148160/7fc7f0d8-eae3-4a0c-8837-b6bb41d19207">
