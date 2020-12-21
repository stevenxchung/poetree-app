# Poetree App

Lightweight PWA ([Progressive Web App](https://web.dev/progressive-web-apps/)) built with [Ionic](https://ionicframework.com/). This application stores "Poem of The Month" (used to publish a new one every month) since Facebook got rid of their *Notes* feature 🙄. I have not decided on how extensive this app should be, maybe I will add on extra features (e.g., archives) if I feel the burning desire to.

## How It Works

This is a full-stack application hosted in the Cloud via Heroku built with Ionic on the front-end and NestJS on the back-end. MongoDB is used to store poems of the month.

Heroku builds the project with `npm run build` which follows the build steps highlighted in the root `package.json`. Then, Heroku references the `Procfile` to run `npm run start:prod` which serves the API layer from the generated `dist` folder. You may notice that there is a compressed `public` tar file in this repository which is generated from the `client` directory from the application build process via `npm run build`. This is necessary since the API will actually unpack and serve the UI via [ServeStaticModule](https://github.com/stevenxchung/Poetree-App/blob/d7f116f3d2ac8e5595a6995278a28c21af6825b1/src/app.module.ts#L15). Consequently, the front-end and back-end applications are able to run on the same instance after successful Heroku deploy to the Cloud.

## Local Run

### Productionized Start

Due to some hacks mentioned above, we can actually run the entire built application locally (useful for testing new builds) on the same port:

1. Begin with `cd client` directory
2. Build the compressed client archive with `npm run build`
3. Navigate back to the root directory
4. Start the application in production mode via `npm run start:prod`

**Note**: remember to remove the extracted `rm -rf public` folder after running this way.

### Front-end:

1. Ensure you are in the `client` directory
2. If running for the first time, trigger a clean install via `npm ci`
3. To start the web app run `ionic serve`

### Back-end:

1. If running for the first time, trigger a clean install via `npm ci`
2. To start the API run `npm start`

**Note**: to get automatic restart run `npm run start:dev`.

## Other Features

There is full CRUD functionality on the API layer. However, creating, updating, and deleting posts are only available with proper credentials. In the future, I may add this as a feature on the UI.
