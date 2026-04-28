# Simple Node.js CRUD API

A simple CRUD (Create, Read, Update, Delete) API built with Node.js, Express, and MongoDB.

## Prerequisites
- Node.js installed
- MongoDB installed and running (or a MongoDB Atlas URI)

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment variables in `.env`:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/simple_crud
   ```
3. Run the server:
   ```bash
   node index.js
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/users` | Create a new user |
| GET    | `/users` | Get all users |
| GET    | `/users/:id` | Get a user by ID |
| PUT    | `/users/:id` | Update a user by ID |
| DELETE | `/users/:id` | Delete a user by ID |

## Example User Object
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```
