# Fullstack Todo Application (React + Node.js + MongoDB)

## Overview

This is my first fullstack application built as a learning project to understand real-world web development architecture, including frontend–backend communication, REST API design, authentication, and database operations.

The application is a user-based Todo system where each user can register, log in, and manage their personal tasks. It implements full CRUD functionality with real-time UI updates.

---

## Tech Stack

Frontend: React (Vite), React Router DOM, Redux Toolkit, React Redux, Axios  
Backend: Node.js, Express.js, MongoDB + Mongoose, bcrypt / bcryptjs, Joi, dotenv, cors, cookie-parser, nodemon

---

## Key Features

Authentication:

- User registration with validation
- Secure password hashing using bcrypt
- User login with credential verification
- Navigation based on user ID

Todo Management:

- Create todos per user
- Get todos by userId
- Update todo text (inline editing)
- Toggle completion status (isDone)
- Delete todos
- Persistent storage in MongoDB

Frontend:

- Inline edit mode
- Done state (strikethrough)
- Conditional rendering
- Instant UI updates using React state

---

## Architecture

Frontend handles UI and API requests  
Backend provides REST API  
MongoDB stores users and todos  
Each todo is linked to a user via userId

---

## Project Structure

Frontend:
todofrontend/
src/
pages/
Login/
Register/
HomePage/
assets/
redux/
App.jsx
main.jsx
package.json
vite.config.js

Backend:
todo-login-register-mongoose/
bin/
models/
routes/
controllers/
services/
middleware/
app.js
.env
package.json

---

## API Endpoints

Auth:

POST /users
POST /login
GET /users/:id

Todos:

GET /todos?userId=USER_ID
POST /todos
PATCH /todos/:id
DELETE /todos/:id

---

## Database Models

User:
const userSchema = new Schema({
name: String,
email: String,
password: String,
age: Number
});

Todo:
const todoSchema = new Schema(
{
text: {
type: String,
required: true
},
userId: {
type: Schema.Types.ObjectId,
ref: "users",
required: true
},
isDone: {
type: Boolean,
default: false
}
},
{ timestamps: true }
);

---

## What I Learned

- Fullstack architecture (frontend + backend separation)
- REST API design and communication
- Authentication with bcrypt
- MongoDB CRUD operations
- React state management
- Async data fetching (fetch/axios)
- Debugging fullstack data flow issues
- UI state synchronization with backend

---

## Notes

- MongoDB unique indexes require proper indexing
- React state must be immutable (no push/unshift)
- Correct ID usage is critical (userId vs todoId)
- Backend must validate input and handle errors
- Frontend must sync with backend responses

---

## Status

Completed (first fullstack project)

---


