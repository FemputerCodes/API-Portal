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

# Creating a simple API in Node.js using a Express framework:

1. create a directory on you local machine for your new project
2. install node.js by running `npm init -y` to start a new node project
3. install express by running `npm install express`
4. install CORS for security by running `npm install cors`
5. update package.json to include:
   ```
      "scripts": {
         "start": "node server.js"
      }
   ```
6. create an server.js file to write the code
7. execute the app by running `npm start`
8. use the tool Insomnia to test the API
9. create an app.yaml file so we can deploy to App Engine:
   ```
   # [START app_yaml]
   runtime: nodejs20
   ```
   run node --version to get the version of nodejs

# Deploy the nodejs app:

1. load a new terminal window in VSCode
2. run `gcloud init` and select your project
3. run `gcloud app deploy` to deploy your application
4. run `gcloud app browse` or copy and paste the url to the web browser

# Debugging:

to debug errors, run `gcloud app logs read`

# Sources:

https://cloud.google.com/appengine/docs/standard/nodejs/runtime
