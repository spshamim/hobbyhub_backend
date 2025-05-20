# HobbyHub Backend

This is the backend server for the HobbyHub project, built with Node.js and Express.js. It provides the API endpoints and database interactions for the HobbyHub application.

## Tech Stack

-   Node.js
-   Express.js
-   MongoDB
-   CORS
-   dotenv

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middleware/     # Custom middleware
├── routes/         # API routes
├── utils/          # Utility functions
├── app.js         # Express app configuration
└── index.js       # Application entry point
```

## Prerequisites

-   Node.js (v14 or higher)
-   MongoDB
-   npm or yarn

## Installation

1. Clone the repository
2. Navigate to the backend directory:
    ```bash
    cd backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add your environment variables:
    ```
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    ```

## Running the Application

### Development Mode

```bash
npm run dev
```

This will start the server using nodemon, which automatically restarts when changes are detected.

### Production Mode

```bash
node src/index.js
```

## API Documentation

The API endpoints are organized in the `routes` directory. Each route file corresponds to a specific resource or feature of the application.

## Environment Variables

-   `PORT`: The port number on which the server will run (default: 5000)
-   `MONGODB_URI`: MongoDB connection string

## Dependencies

-   express: Web framework
-   mongodb: Database driver
-   cors: Cross-Origin Resource Sharing middleware
-   dotenv: Environment variable management

## Scripts

-   `npm run dev`: Start the development server with nodemon
-   `npm test`: Run tests (not configured yet)

## License

ISC
