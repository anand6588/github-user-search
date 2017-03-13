## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.


## Project Architecture
[`src/js/actions`](https://github.com/anand6588/github-user-search/tree/master/src/js/actions)
  * Action creator returns a formatted object of the action type and 
    optional payload which is then dispatched to the store.
[`src/js/component`](https://github.com/anand6588/github-user-search/tree/master/src/js/component)
  * Presentational component or dumb component. It is stateless and only used for UI purpose.
[`src/js/containers`](https://github.com/anand6588/github-user-search/tree/master/src/js/containers)
  * It makes a request for action based on interactions on/with the application.
[`src/js/reducers`](https://github.com/anand6588/github-user-search/tree/master/src/js/reducers)
  * Pure functions whose purpose in life is to accept the state tree and an action from the store; make a copy of the previous state,transform it and then return a new state to the store.
[`src/js/router`](https://github.com/anand6588/github-user-search/tree/master/src/js/router)
  * Handles all routes and render respective components
[`src/js/saga`](https://github.com/anand6588/github-user-search/tree/master/src/js/saga)
  * Redux middleware for handling async operations like fetching and updating from our API. It makes asynchronous operations look like standard Javascript synchronous code making it easy to read.
[`src/js/store`](https://github.com/anand6588/github-user-search/tree/master/src/js/store)
  * Store is a single object that holds the complete state of your application. It delegates the reducer with the responsibility of changing state when an action is dispatched.
[`src/js/xhr`](https://github.com/anand6588/github-user-search/tree/master/src/js/xhr)
  * To handle all xhr request in one place. Used axios for xhr requests.