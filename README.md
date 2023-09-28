# Social-Network-API

## Table of Contents
- [Description](#description)
- [Built With](#built-with)
- [Installation](#installation)
- [Walkthrough](#walkthrough)

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

## Walkthrough

[Youtube Link](https://youtu.be/IULY-4X70Mo)

## Users

GET all users
<img width="1430" alt="Screen Shot 2023-09-29 at 3 48 21 am" src="https://github.com/Hailin-Ruan/Social-Network-API/assets/134148160/bc3dca6a-bb6f-474c-bfde-6fa9ee332c07">

GET a single user by Id
<img width="1434" alt="Screen Shot 2023-09-29 at 3 49 06 am" src="https://github.com/Hailin-Ruan/Social-Network-API/assets/134148160/67c23979-573b-4f28-97ed-749fc6563940">

POST a new user
<img width="1438" alt="Screen Shot 2023-09-29 at 3 46 54 am" src="https://github.com/Hailin-Ruan/Social-Network-API/assets/134148160/92c10a9b-b1de-423b-a973-ce59c1d3f11f">

PUT to update a user by Id
<img width="1434" alt="Screen Shot 2023-09-29 at 3 50 15 am" src="https://github.com/Hailin-Ruan/Social-Network-API/assets/134148160/efb41398-3d80-4f80-921c-9857779804da">
<img width="1433" alt="Screen Shot 2023-09-29 at 3 51 18 am" src="https://github.com/Hailin-Ruan/Social-Network-API/assets/134148160/195a957f-25c3-4c60-bad3-3fc6146fdc39">

DELETE to remove user by Id
<img width="1434" alt="Screen Shot 2023-09-29 at 3 52 31 am" src="https://github.com/Hailin-Ruan/Social-Network-API/assets/134148160/6f0877b1-eabd-4392-ab00-8e1e0d8781d5">
<img width="721" alt="Screen Shot 2023-09-29 at 3 52 43 am" src="https://github.com/Hailin-Ruan/Social-Network-API/assets/134148160/b6d6d17a-e124-47f3-9c4b-f114c88ba3e4">

POST to add a new friend to a user's friend list


DELETE to remove a friend from user's freind list

