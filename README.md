# MovieList with GraphQL, Apollo Server, and Apollo Client

This is a small application that allows you to create and manage a list of movies. The project uses GraphQL, Apollo Server on the backend, and Apollo Client on the frontend, implemented with ReactJS.

## Features
- Create a new movie entry with a title, genre and release year.
- View the list of existing movies with their details.
- Edit movie details such as title, genre and release year
- Delete movies from the list.

## Technologies Used
- `GraphQL`: A query language for APIs that allows you to request exactly the data you need.
- `Apollo Server`: A GraphQL server that connects to a data source and handles GraphQL queries and mutations.
- `Apollo Client`: A GraphQL client that enables you to fetch and manage data from the Apollo Server in the frontend.
- `ReactJS`: A JavaScript library for building user interfaces.
- `Node.js`: A JavaScript runtime used for running the Apollo Server.

# Getting Started
To set up the project locally, follow these steps:

## Prerequisites
Node.js and npm: Make sure you have Node.js (v14 or later) and npm installed on your machine.

## Installation
1. Clone the repository: 

   ```
   git clone https://github.com/Diana-nyamai/MovieList.git
   ```

2. Navigate to the project directory: 
    ```
    cd movie-list-graphql
    ```

3. Install dependencies for both the server and client:
    
    ```
    npm install
    ```


## Configuration
- Apollo Server Configuration: 

    In the `server` directory, you can configure the data source and GraphQL schema in the `server.js` file.
- Running the Application

  Start the Apollo Server: (make sure you have installed nodemon package)

    ```
    npm start
    ```
- The Apollo Server will be running on http://localhost:4000/graphql.

## Usage
Once the application is running, you can access the frontend by visiting http://localhost:4000/graphql in your web browser. From there, you can interact with the movie list by adding, editing, and deleting movies.

## Contributing
If you find any bugs or want to add new features, feel free to submit a pull request. Please follow the existing code style and include appropriate tests for your changes.

## Acknowledgments
Special thanks to the GraphQL and Apollo communities for providing excellent tools and resources for building modern applications.