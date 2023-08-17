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
