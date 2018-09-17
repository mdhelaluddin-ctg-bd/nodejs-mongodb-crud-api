# CRUD REST API with Node.js and MongoDB

### CRUD
CRUD stands for Create, Read, Update and Delete. These are the basic operations almost every simple web app would be designed to achieve.

### REST
If you don’t have the idea about REST API, you can visit the below link and learn the basic about REST API.
[https://restfulapi.net](https://restfulapi.net)

### Prerequisites
1. You must have [Node.js](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/download-center?jmp=nav#atlas) installed in your pc. 
2. Optionally you can install [MongoDB Compass](https://www.mongodb.com/download-center?jmp=nav#compass) to manage MongoDB using GUI

### NPM Packages
1. [ExpressJS](https://expressjs.com/) Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
2. [mongoose](https://mongoosejs.com/) Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
3. [body-parser](https://www.npmjs.com/package/body-parser) Node.js body parsing middleware.Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

### Instructions
1. Clone the project from github using the following command
```
git clone https://github.com/mdhelaluddin-ctg-bd/nodejs-mongodb-crud-api.git
```
2. Enter to the project directory and Install node mudules
```
npm install
```
3. Run index.js file
```
node index.js
```
There you go! You might wonder the below output in your terminal.
```
Node.js and MongoDB CRUD app is listening on port 3000!
```

### POSTMAN
You can install [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) as chrome extension to test apis. 

### API
Create or Enter new product information to your databas table
```
Method : POST
URL : http://localhost:3000/products/create
Parameters : name, description, price
if you are using POSTMAN, set parameters from BODY > x-www-form-urlencoded
```
Get product information by ID
```
Method : GET
URL : http://localhost:3000/products/[PRODUCT-ID]
```
Update product information usding product id
```
Method : PUT
URL : http://localhost:3000/products/[PRODUCT-ID]
Parameters : name, description, price
if you are using POSTMAN, set parameters from BODY > x-www-form-urlencoded
```
DELETE product information by ID
```
Method : DELETE
URL : URL : http://localhost:3000/products/[PRODUCT-ID]
```

### Congrats !!! You are done...
If you are still facing any problem feel free to contact with me at mdhelaluddin.ctg.bd@gmail.com or you may create issue.  I will try to response back to you asap. Thanks. 
