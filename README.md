REACT CRUD APP
Problem Objective
To create a Product Listing application similar to myntra , with the following features of, filtering, sorting, and protected routes.

(Setup)
Create the basic Redux store with all the components of actionTypes, actions, reducer.js and store.js, and connect it with the React application component
Setup the Routes for different pages, required in the application.

```
<Route path="/" element={<HomePage />} /> (Product List will be displayed here)
<Route path="/admin" element={<Admin />} /> (For adding products to DB)
<Route path="/products/:id" element={<SingleProduct />} />
<Route path="/products/:id/edit" element={<EditProduct />} />
<Route path="/login" element={<Login />} />
<Route path="\*" element={<h3>Page Not Found</h3>} />
```

[db.json]

Setup json-server to run on port 8080. db.json file.
Part-1 (Admin)
Create admin page to add data to the DB
The Admin page will be a private route
Part-2 (Initial Render)
Render the data present in the db.json file, inside the ProductList component, when the application mounts.
Use Redux to store the data recieved from db.json
Part-3 (Filter component)
Create a filter component, that filters the data based on the category type.
It should show the filter category on the URL search params, when the user changes the filter category.
Make sure that the URL search params and the filter data in the UI (checkboxes) persist when the URL is opened in another tab
Note:

Filter and sorting should work together.
Filter and sort data in the URL should persist across page refreshes and different browser tabs.
Make sure the data is also re-rendering based on the selected params
Part-3 (Sort component)
Create a sort component, that sorts the data based on price.
It should show the sorted category on the URL search params, when the user changes the sort criteria.
Make sure that the URL search params and the sort data in the UI (checkboxes) persist when the URL is opened in another tab
Part-4 (Authentication)
Create the login functionality to authenticate the user (use reqres.in api)
Make sure to separate the product data and the auth data in different reducers (use combineReducers)
Part-5 (Protected Routes)
Make the SingleProduct page and EditProduct page, a protected route.
Create a higher order component, that checks if the user is authenticated.
If the user is not authenticated, redirect him to the Login page, else take him to the protected route.
Part-6 (Optional)
Can create the Edit functionality of the products, inside the EditProduct page.
General Info
Use Redux Thunks to make API calls
API calls should have all the (Request, Success and Failure types)

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
