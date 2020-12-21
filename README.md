# Poetree App

Lightweight PWA ([Progressive Web App](https://web.dev/progressive-web-apps/)) built with [Ionic](https://ionicframework.com/). This application stores "Poem of The Month" (used to publish a new one every month) since Facebook got rid of their *Notes* feature 🙄. I have not decided on how extensive this app should be, maybe I will add on extra features (e.g., archives) if I feel the burning desire to.

This is a full-stack application hosted in the cloud via Heroku built with Ionic on the front-end and NestJS on the back-end. MongoDB is used to store poems of the month.

## Local Run

### Front-end:

1. Ensure you are in the `client` directory
2. If running for the first time, trigger a clean install via `npm ci`
3. To start the web app run `ionic serve`

### Back-end:

1. If running for the first time, trigger a clean install via `npm ci`
2. To start the API run `npm start`

**Note**: to get automatic restart run `npm run start:dev`

## Other Features

There is full CRUD functionality on the API layer. However, creating, updating, and deleting posts are only available with proper credentials. In the future, I may add this as a feature on the UI.
