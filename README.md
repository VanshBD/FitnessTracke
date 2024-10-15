
# Fitness Tracker

## Overview
The Fitness Tracker is a full-stack web application designed to help users set and track fitness goals, manage workouts, and monitor progress. It includes both client-side (frontend) and server-side (backend) components.

## Project Structure
```
fitness-tracker-main/
├── client/                # Frontend React application
│   ├── public/            # Public assets (HTML, favicon, etc.)
│   ├── src/               # React source code
│       ├── components/    # Reusable React components
│       ├── pages/         # Page components for routing
│       ├── context/       # Context API for global state management
│       └── services/      # API service functions
├── server/                # Backend Node.js application
│   ├── controllers/       # Controllers for handling requests
│   ├── middlewares/       # Middleware functions
│   ├── models/            # Mongoose models for MongoDB
│   └── routes/            # Express route handlers
└── .gitignore             # Git ignore file
```

## Features
- User authentication (Sign up, Login, Logout)
- Admin panel for managing users and goals
- Fitness goals management (CRUD operations)
- Workout tracking and goal setting
- Protected routes with role-based access control

## Technologies Used
### Frontend
- React
- Context API
- CSS for styling

### Backend
- Node.js and Express
- MongoDB with Mongoose
- JSON Web Token (JWT) for authentication

## Installation
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies for both client and server:**
   ```bash
   cd fitness-tracker-main/client
   npm install
   
   cd ../server
   npm install
   ```

3. **Configure the environment variables:**  
   Create a `.env` file in the `server/` directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. **Start the development servers:**
   - Start the backend server:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend React app:
     ```bash
     cd ../client
     npm start
     ```

## Usage
- Navigate to `http://localhost:3000` to access the application in your browser.
- Register or login to start tracking your fitness goals.

## License
This project is licensed under the MIT License.
