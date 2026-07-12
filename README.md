# Event Registration System

A modern full-stack **Event Registration System** built using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB Atlas**. The application allows users to securely register for events, create accounts, and log in using encrypted passwords. This project is being developed incrementally to simulate a real-world production application.

---

## Features Implemented

### User Authentication
- User Registration
- User Login
- Password Encryption using **bcrypt**
- Duplicate Email Validation
- Secure Password Verification using **bcrypt.compare()**

### Event Registration
- Student Registration Form
- Event Selection
- Multiple Interests Selection
- Excitement Level Slider
- Additional Comments/Reason Section

### 💾 Database
- MongoDB Atlas Integration
- Mongoose User Schema
- User Data Stored in Cloud Database

### Backend
- Express.js REST API
- Registration Route
- Login Route
- JSON Request Handling
- CORS Configuration
- Environment Variables using dotenv

### Frontend
- Responsive Registration Page
- Modern Login Page
- Password Show/Hide Toggle
- Form Validation
- Success & Error Messages
- Navigation between Registration and Login

---

# Tech Stack

## Frontend
- HTML5
- CSS3
- JavaScript (ES6)

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Security
- bcrypt
- dotenv

---

# Project Structure

```
Event-Registration-System
│
├── frontend
│   ├── regform.html
│   ├── login.html
│   ├── regform.css
│   ├── login.css
│   ├── script.js
│   ├── login.js
│   ├── favicon.svg
│   └── vitimage.png
│
├── backend
│   ├── app.js
│   ├── package.json
│   ├── .env
│   ├── models
│   │     └── User.js
│   ├── routes
│   │     ├── register.js
│   │     └── seclogin.js
│   ├── controllers
│   └── middleware
│
├── README.md
└── .gitignore
```

---

# API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Login using email & password |
| GET | `/` | Check server status |

---

# Security Features

- Passwords are never stored in plain text.
- Passwords are hashed using **bcrypt** before being saved.
- Duplicate email registrations are prevented.
- Environment variables are secured using **.env**.

---

# 📷 Current Application Flow

```
Registration Page
        │
        ▼
Fill Registration Form
        │
        ▼
POST /register
        │
        ▼
Password Hashing
        │
        ▼
MongoDB Atlas
        │
        ▼
Registration Successful
        │
        ▼
Navigate to Login
        │
        ▼
POST /login
        │
        ▼
Email Lookup
        │
        ▼
bcrypt.compare()
        │
        ▼
Login Successful
```

---

# Upcoming Features

- JSON Web Token (JWT) Authentication
- Remember Me Functionality
- Forgot Password
- Dashboard
- Protected Routes
- User Profile
- Admin Dashboard
- CRUD Operations
- Search & Filtering
- Statistics Dashboard
- Deployment (GitHub Pages + Render)

---

# Learning Objectives

This project is being built to gain hands-on experience with:

- Full Stack Web Development
- REST API Development
- Authentication & Authorization
- MongoDB & Mongoose
- Password Security
- Backend Architecture
- Client-Server Communication
- Deployment

---

# Author

**Tej Dubey**

GitHub: https://github.com/TejDubey

---

This project is actively under development, with new features being added progressively.
