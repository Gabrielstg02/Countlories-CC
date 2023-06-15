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
    ```bash
        npm install
    ```
    
* Setup environment variables

    This project uses [dotenv](https://www.npmjs.com/package/dotenv), please configure the proper environment variables before running this application.
    
    - Copy the `.env.example` file and rename it to `.env`
    - Edit all sample fields with the correct environment variables for the application server
    - For `PREDICT_API_URL`, Use Local or Deployed link of API in `predict` branch in this repository

* Database migration (using [Sequelize](http://docs.sequelizejs.com)):
    - Edit Database Configuration in `src/config/config.json`
    - run: 
        ```bash 
            npx sequelize-cli db:migrate 
        ```
    - undo: 
        ```bash
            npx sequelize-cli db:migrate:undo
        ```
    - help: 
        ```bash
            npx sequelize-cli help
        ```
* Database seed
    - Run seeder for Menu data and Admin data (You can change Admin data in `src/seeders` admin seed)
        ```bash
            npx sequelize-cli db:seed:all
        ```

* Cloud Bucket Configuration
    - Copy the `example.serviceaccountkey.json` file and rename it to `serviceaccountkey.json`
    - Copy the content of your service account key to `serviceaccountkey.json` with the access of Google Storage Object Admin for your bucket

* Start Your Application 
```bash
    npm start
```
## Getting Started on App Engine
1. Open cloud shell and set the project id
    ```
    gcloud config set project PROJECT_ID
    ```
2. Clone repository following this command
    ```
    git clone https://github.com/Gabrielstg02/Countlories-CC.git
    ```
3. Open git folder  
    ```
    cd Countlories-CC/
    ```
4. Setup env
    - Copy the `.env.example` file and rename it to `.env`
    - Edit all sample fields with the correct environment variables for the application server
    - For `PREDICT_API_URL`, Use Deployed link of API in `predict` branch in this repository
    - add this line to `.env`
        ```
            NODE_ENV=production
        ```
6. Setup Database
    - Edit Database Configuration in `src/config/config.json`
    - Install `sequelize-cli` in cloud shell
    ```bash
        npm install -g sequelize
        npm install -g sequelize-cli
    ```
    - seed database
    ```bash
        npx sequelize-cli db:seed:all
    ```
7. Cloud Bucket Configuration
    - Copy the `example.serviceaccountkey.json` file and rename it to `serviceaccountkey.json`
    - Copy the content of your service account key to `serviceaccountkey.json` with the access of Google Storage Object Admin for your bucket
8. Deploy App
    ```bash
        gcloud app deploy
    ```

## Contact
|            Member           				| Student ID |                                                       Contacts                                                      |
| :---------------------------------------: | :--------: | :-----------------------------------------------------------------------------------------------------------------: |
|     Gabriel Solomon Sitanggang     | C038DSX0922  |              [LinkedIn](https://www.linkedin.com/in/gabriel-solomon-sitanggang/), [GitHub](https://github.com/Gabrielstg02/)|
| Cahya Gumilang  | C309DSX2194  |     [LinkedIn](https://www.linkedin.com/in/cahya-gumilang), [GitHub](https://github.com/CahyaG)|

## Project Link
[Countlories Landing Page](https://github.com/IpunkDkk/Countlories)

## API Documentation
[Countlories API Documentation](https://documenter.getpostman.com/view/7864923/2s93sc3XD1)
or
You can export the postman collection from this repository
