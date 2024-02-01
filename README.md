# API in Node.js using Express and MongoDB

This repository contains a simple example of building a RESTful API using Node.js with the Express framework and MongoDB as the database. This API allows you to perform basic CRUD (Create, Read, Update, Delete) operations on a collection of resources.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)
- MongoDB Compass: [MongoDB Compass Download](https://www.mongodb.com/try/download/compass).


## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ajaysingh-25/API-in-NodeJS-Express-MongoDB.git
   cd API-in-NodeJS-Express-MongoDB

2. **Install dependencies:**

    ```npm install ```

3. **Set up the MongoDB connection:**

    Start new connection on MongoDB Compass and replace the port number in db.js with your port number.

   Import the "test.posts.json" file in your db for dummy data

     OR

   Hit the post ```http://localhost:3000/server/``` api with "title, content, username" in JSON.
   

   
   Example :
   {
    "title": "New Title",
    "content": "This is a new Conent."
    "username": "XYZuser"
   }

    
5. **Start the server:**

    Run the command to start the server at port 3000.
    ```nodemon app.js```

## API Endpoints

  Hit the API using postman or any other API platform.
  
GET ```http://localhost:3000/server/``` : Retrieve all posts.

GET ```http://localhost:3000/server/:id``` : Retrieve a specific post by ID.

POST ```http://localhost:3000/server/``` : Create a new post.

PUT ```http://localhost:3000/server/:id``` : Update a post by ID.

DELETE ```http://localhost:3000/server/:id``` : Delete a post by ID.





![Node js_logo](https://github.com/ajaysingh-25/API-in-nodeJS-using-Express-and-MongoDB/assets/81799657/fab6b4c6-0ebd-4850-9433-35d4ccd4a600)
