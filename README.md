# Web Server with SPA and REST API

## Description
This web application serves a Single Page Application (SPA) through a web server while providing a REST API connected to PostgreSQL. It's built using Node.js and Express, following Clean Architecture principles, and integrates Mocha and Supertest for unit testing.

## Key Features
- **Single Page Application (SPA):** Delivers a frontend SPA through the web server.
- **REST API:** Provides endpoints connected to a PostgreSQL database.
- **Clean Architecture:** Organizes the codebase for maintainability and scalability.
- **Node.js & Express:** Utilizes Node.js with Express for the server setup.
- **Mocha & Supertest:** Implements comprehensive unit testing with Mocha and Supertest.

## Functionality
- **Web Server:** Serves the SPA as static files for client-side rendering.
- **REST API Endpoints:** Offers CRUD operations, interacting with a PostgreSQL database.
- **Node.js & Express:** Establishes the server setup and routing.
- **Mocha & Supertest:** Conducts unit tests to ensure API functionality.
- **Clean Architecture Components:** Separates business logic from data sources and external dependencies.

## Setup
1. Clone this repository: `git clone https://github.com/MosqueraSt3/restWeb.git`
2. Configure the variables.
3. Install dependencies: `npm install`
4. Set up the PostgreSQL database and configure connection details in the app.
5. Run the application: `npm start`

## Testing
- Run unit tests: `npm test`

## Technologies & Dependencies
- **Node.js & Express:** Server-side framework for building web applications.
- **PostgreSQL:** Database management system.
- **Mocha & Supertest:** Testing frameworks for unit tests.
- **Other dependencies:** Check `package.json` for a complete list.

## Directory Structure
- **src/:** Contains the server-side code organized with Clean Architecture principles.
- **public/:** Holds the SPA files.
- **tests/:** Includes test suites for unit testing.