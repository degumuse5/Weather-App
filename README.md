Project Description: Weather Application

Overview:

The Weather Application is a web-based platform that allows users to search for current weather conditions in various locations. This system leverages Node.js, Express.js, EJS templating, and the OpenWeatherMap API to provide real-time weather information. Additionally, the application tracks and displays previous searches using MongoDB.

Key Features:

    Weather Search:
        Users can input the name of a state to search for current weather conditions.
        The application retrieves and displays data such as temperature, weather condition, wind speed, and humidity.

    Previous Searches:
        The system records each search query.
        Users can view a list of their previous searches.

Technical Stack:

    Node.js: Server-side JavaScript runtime.
    Express.js: Web framework for Node.js.
    MongoDB: NoSQL database for storing previous search data.
    EJS (Embedded JavaScript): Templating engine for rendering HTML pages.
    Body-parser: Middleware for parsing request bodies.
    OpenWeatherMap API: External API for fetching weather data.

Project Structure:

    server.js: Main server file initializing the Express app, setting up routes, and handling server startup.
    database.js: Database operations including insertion and retrieval of search data.
    templates: Directory containing EJS template files for rendering different views.

Routes and Endpoints:

    GET /: Renders the home page where users can enter a state name to search for weather information.

    POST /search:
        Handles the weather search functionality.
        Takes the state name from the request body.
        Fetches weather data from the OpenWeatherMap API.
        Renders the weather information or an error message if the state is not found.

    POST /pre:
        Retrieves and displays a table of previous searches from the database.

Usage:

    Starting the Server:
        Run the server with the command: node server.js
        The server will start at: http://localhost:5501

    Environment Configuration:
        Ensure a .env file is present in the databaseCon directory with the following variables:

        makefile

        MONGO_CONNECTION_STRING=<your-mongo-connection-string>
        MONGO_DB_NAME=<your-database-name>
        MONGO_COLLECTION=<your-collection-name>

Conclusion:

The Weather Application provides a simple yet effective solution for users to obtain real-time weather information. Its integration with the OpenWeatherMap API ensures accurate and up-to-date data, while MongoDB stores users' previous searches for easy reference. This application is designed for ease of use and scalability, making it a valuable tool for anyone needing quick access to weather conditions.
