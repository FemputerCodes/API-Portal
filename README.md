using google cloud as my hosting solution since we are working in DialogFlow witch is a google cloud product.

Getting started with App Engine
App Engine: A fully managed platform-as-a-service (PaaS) for deploying websites and APIs
Source: https://www.youtube.com/watch?v=LRfah-yXfgA&list=PL42xwJRIG3xCtmOrJAQFR5sIJFKIJ9MEn&index=1

1. go to google cloud console
2. create a new project
3. go to the App Engine dashboard
4. create application
5. select region (us-west1)
6. selected Node.js as the language and keep standard environment
7. download the gcloud SDK so you can interact with google cloud from your local machine so you can deploy (already did this)
8. run `gcloud init` and select your project

Creating a simple API in Node.js using a Express framework:
Source: https://www.youtube.com/watch?v=-MTSQjw5DrM

1. install node.js by running `npm init -y` to start a new node project.
2. install express by running `npm install express`.
3. create a server.js file to write the code.
4. execute the server.js by running `node .`.
5. use the tool Insomnia to test the API.
6. create an app.yaml file so we can deploy to App Engine:
   ```
   # [START app_yaml]
   runtime: nodejs20
   ```
   run node --version to get the version of nodejs

Deploy the nodejs app:

1. load a new terminal window in vs code
2. run `gcloud app deploy` to deploy your application
3. copy and paste the url to the web browser
