# Countlories-CC

This repository is used as working repository for cloud computing side of the Countlories project as part of Bangkit 2023's Product-based Project.

## This application built with
* [Express JS](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)
* other libraries included in "package.json" file

## Getting Started
* Install Node.js
* Install npm
* Install project dependencies:
    
    - Install all dependencies defined in package.json:
    
        `npm install`
    
* Setup environment variables

    This project uses [dotenv](https://www.npmjs.com/package/dotenv), please configure the proper environment variables before running this application.
    
    - Copy the `.env.example` file and rename it to `.env`
    - Edit all sample fields with the correct environment variables for the application server
    
* Database migration (using [Sequelize](http://docs.sequelizejs.com)):
    - Edit Database Configuration in `src/config/config.js`
    - run: `npx sequelize-cli db:migrate`
    - undo: `npx sequelize-cli db:migrate:undo`
    - help: `npx sequelize-cli help`

* Cloud Bucket Configuration
    - Copy the `serviceaccountkey.example.json` file and rename it to `serviceaccountkey.json`
    - Copy the content of your service account key to `serviceaccountkey.json` with the access of Google Storage Object Admin for your bucket

* To Be Continued