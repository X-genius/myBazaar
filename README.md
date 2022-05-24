# Create MyBazaar e-commerce Website

# Completed Part for creating e-commerce website

1. Install Tools
2. Install Extentions
3. Create React App
4. Create Git Repository
5. List of Products on page
6. Add Routing
   1. npm install react-router-dom
   2. Create route for home screen
   3. create router for product screen
7. Create Node.JS Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
8. Fetch Product from Backend
   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
9. Manage State By Reducer Hook
   1. define reducer
   2. update fetch data
   3. get state from usReducer
10. Add Bootstrap UI Framework
    1. npm install react-bootstrap bootstrap
    2. update App.js
11. Create Product and Rating Component
    1. create Rating component
    2. Create Product component
    3. Use Rating component in Product component
12. Create Product Details Screen
    1. fetch product from backend
    2. create 3 columns for image, info and action
13. Create Loading and Message Component
    1. create loading component
    2. use spinner component
    3. create message component
    4. create utils.js to define getError function
14. Implement Add to Cart
    1. Create React Context
    2. define reducer
    3. create store provider
    4. Implement add to cart button click handler
15. Complete Add to Cart
    1. check exist item in the cart
    2. check count in stock in backend
16. Create cart Screen
    1. create 2 columns
    2. display items list
    3. create action column
17. Complete Cart Screen
    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout
18. Create Sign In screen
    1. create signIn from
    2. add email and password
    3. add signIn button
19. Connect To MongoDB Database
    1. create atlas mongodb database
    2. install local mongodb database
    3. npm install mongoose
    4. connect to mongodb database
20. Seed Sample Products
    1. create Product model
    2. create seed route
    3. use route in server.js
    4. seed sample product
21. Seed sample user
    1. create user model
    2. seed sample users
    3. create user routes
22. Create Sign in backend API
    1. create sign in API
    2. npm install jsonwebtoken
    3. define generateToken
23. Complete Sign in Screen
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header
24. Create Shipping Screen
    1. Create from inputs
    2. handle save shipping address
    3. add checkout wizard bar
25. Create Sign up screen
    1. create input form
    2. handle submit
    3. create backend api
26. Create payment method screen
    1. Create input forms
    2. handle submit
27. Create Place order screen
    1. show cart items, payment and address
    2. handle place order action
    3. create order create api
28. Implement Place order Action
    1. handle place order action
    2. create order api
29. Create Order Screen 
    1. create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 columns
30. Pay Order By PayPal : That is paid try anytime
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in Order Screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend
31. Display order history
    1. create order screen
    2. create order history api
    3. use api in the frontend
32. Create profile Screen
    1. get user info  from context
    2. show user information
    3. create user update api
    4. update user info