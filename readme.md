# My first API using Express and MongoDB

## About

This is an easy-to-use API for managing a bookstore's inventory. Built with Express.js, it provides endpoints to perform various operations related to books and authors.

## Features

- CRUD Operations: Perform Create, Read, Update, and Delete operations on books and authors.

- Search Functionality: Search for books, authors, and publishers based on specific parameters.

- Data Validation: Input data is validated to ensure consistency and accuracy.

- RESTful API: Follows RESTful conventions for smooth integration with client applications.

- Pagination

- Data base security by using dotenv

## Installation

Make sure you have Node.js installed on version 18. Clone the repository and install the dependencies.

## Usage

Configure the Database:

- Set up a MongoDB database to store bookstore data.
- Update the MongoDB connection URI in the .env file.

```
DB_CONNECTION_STRING=mongodb+srv://admin:[YOUR PASSWORD]@cluster0.wrkfymu.mongodb.net/[NAME OF YOUR COLLECTION]?retryWrites=true&w=majority
```

## API Endpoints:

GET /livros - Get all books

GET /livros/busca - Filter books

GET /livros/:id - Get a specific book

POST /livros - Create book

PUT /livros/:id - Update book

DELETE /livros/:id - Delete book

GET /autores - Get all authors

GET /autores/:id - Get a specific author

POST /autores - Create author

PUT /autores/:id - Update author

DELETE /autores/:id - Delete author
