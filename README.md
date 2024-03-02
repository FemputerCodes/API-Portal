# Prerequisites

download the gcloud SDK so you can interact with google cloud from your local machine so you can deploy .
App Engine: A fully managed platform-as-a-service (PaaS) for deploying websites and APIs. App Engine expects your application to be able to handle requests on the port specified by the process.env.PORT variable.

# Getting started with App Engine

1. go to google cloud console
2. create a new project
3. go to the App Engine dashboard
4. create application
5. select region (us-west1)
6. selected Node.js as the language and keep standard environment

Source: https://www.youtube.com/watch?v=LRfah-yXfgA&list=PL42xwJRIG3xCtmOrJAQFR5sIJFKIJ9MEn&index=1

# Creating a simple API in Node.js using a Express framework:

1. create a directory on you local machine for your new project
2. install node.js by running `npm init -y` to start a new node project
3. install express by running `npm install express`
4. install CORS for security by running `npm install cors`
5. create a server.js file to write the code
6. execute the server.js by running `node server.js`
7. use the tool Insomnia to test the API
8. create an app.yaml file so we can deploy to App Engine:
   ```
   # [START app_yaml]
   runtime: nodejs20
   ```
   run node --version to get the version of nodejs

Source: https://www.youtube.com/watch?v=-MTSQjw5DrM

# Deploy the nodejs app:

1. load a new terminal window in VSCode
2. run `gcloud init` and select your project
3. run `gcloud app deploy` to deploy your application
4. run `gcloud app browse` or copy and paste the url to the web browser
