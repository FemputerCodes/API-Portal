# Prerequisites:

1. Install [Google Cloud SDK](https://cloud.google.com/sdk/docs/install-sdk), which allows you to interact with gcloud from your local machine

# Getting started with App Engine:

App Engine: A fully managed platform-as-a-service (PaaS) for deploying websites and APIs. App Engine expects your application to be able to handle requests on the port specified by the process.env.PORT variable.

1. Go to Google Cloud Console
2. Select the project
3. Go to the App Engine Dashboard
4. Create an application
5. Select region (us-west1)
6. Select Node.js as the language and keep standard environment

# Creating a Service Account:

Don't need a service account since we are not interacting with any GCP services

# Setting up an API server:

1. Set up your project directory on your local machine and open up VSCode
2. Install Node.js by running `npm init -y` to start a new node project
3. Install the following dependencies:
   - install the webframe work Express by running `npm install express`
   - install CORS for security by running `npm install cors`
4. Create an app.yaml file, to deploy to App Engine
   ```
   # [START app_yaml]
   runtime: nodejs20
   ```
   - ensure the nodejs version matches by running `node --version`
5. Create a src directory
6. Create an index.js file inside the src directory
7. Update package.json to include:
   ```
   "scripts": {
      "start": "node ./src/index.js",
      "deploy": "gcloud app deploy"
   }
   ```
8. Execute the app by running `npm start`
9. Use the tool Insomnia to test the app

# Deploy the app:

1. Load a new terminal window in VSCode
2. Run `gcloud init` and select your project
3. run `gcloud app deploy` to deploy your application or run `npm run deploy`
4. Run `gcloud app browse` or copy and paste the url to the web browser
5. Copy the URL to the DialogFlow Console Fulfillment

# Debugging:

1. To debug errors, run `gcloud app logs read`

# Sources:

https://cloud.google.com/appengine/docs/an-overview-of-app-engine
https://cloud.google.com/appengine/docs/standard/nodejs/building-app
