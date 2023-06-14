# Countlories-CC

This repository is used as working repository for cloud computing side of the Countlories project as part of Bangkit 2023's Product-based Project.

This branch is API for Predict with Machine Learning Model

## This application built with
* Flask
* Tensorflow

# How to setup Locally
1. Clone repository following this command
    ```
    git clone https://github.com/Gabrielstg02/Countlories-CC.git
    ```
2. Open git folder  
    ```
    cd Countlories-CC/
    ```
3. Check out to predict branch
    ```
    git checkout predict
    ```
4. Open the predict folder
    ```
    cd predict/
    ```
5. Install python3 (>3.9 or latest)
6. Install pip (>18.1 or latest)
7. Install requirements.txt
    ```
    pip install -r requirements.txt
    ```
8. Run app
    ```
    python main.py
    ```
    or
    ```
    flask run
    ```
9. Test the API using `Postman` with `POST` Method, route `/predict` with image request body

## How to setup with Google Cloud Platform using App Engine
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
4. Check out to predict branch
    ```
    git checkout predict
    ```
5. Open the predict folder
    ```
    cd predict/
    ```
6. Deploy the app
    ```
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
