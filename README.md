# Myntra-like Product Listing Application

This is a Product Listing application similar to Myntra, featuring filtering, sorting, and protected routes functionalities.

## Setup

1. Create the basic Redux store with actionTypes, actions, reducer.js, and store.js, and connect it with the React application component.

2. Set up routes for different pages required in the application:

   - `/`: Display the Product List (HomePage)
   - `/admin`: Add products to the database (Admin)
   - `/products/:id`: Display a single product (SingleProduct)
   - `/products/:id/edit`: Edit a product (EditProduct)
   - `/login`: User authentication (Login)
   - `*`: Page Not Found

3. Set up a `db.json` file and run `json-server` on port 8080.

## Part 1: Admin

Create an admin page to add data to the database.

- The Admin page will be a private route.

## Part 2: Initial Render

Render data from `db.json` inside the ProductList component when the application mounts.

- Use Redux to store the data received from `db.json`.

## Part 3: Filter Component

Create a filter component that filters data based on the category type.

- Display the filter category in the URL search params when the user changes the filter category.
- Ensure that URL search params and filter data in the UI (checkboxes) persist across page refreshes and different browser tabs.
- Update the UI to re-render based on the selected params.

## Part 4: Sort Component

Create a sort component that sorts data based on price.

- Display the sorted category in the URL search params when the user changes the sort criteria.
- Ensure that URL search params and sort data in the UI (checkboxes) persist across page refreshes and different browser tabs.

## Part 5: Authentication

Implement login functionality to authenticate the user using the `reqres.in` API.

- Separate product data and auth data into different reducers using `combineReducers`.

## Part 6: Protected Routes

Make the SingleProduct page and EditProduct page protected routes.

- Create a higher order component to check if the user is authenticated.
- Redirect unauthenticated users to the Login page, otherwise, proceed to the protected route.

## Part 7: Optional (Edit Functionality)

Optionally, implement the Edit functionality for products on the EditProduct page.

General Info:

- Utilize Redux Thunks for making API calls.
- Ensure that API calls have Request, Success, and Failure types.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
