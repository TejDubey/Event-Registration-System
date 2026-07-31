# Event Registration System

A full-stack Event Registration System developed using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB Atlas. The application enables users to register for events, manage their accounts, and update their profiles, while providing administrators with a secure dashboard to manage registrations. It demonstrates authentication, authorization, CRUD operations, role-based access control, and cloud deployment.

## Live Demo

**Frontend:** https://event-registration-system-q6c6.vercel.app/

**Backend:** https://event-registration-system-eg97.onrender.com/

> **Note:** The backend is hosted on Render's free tier. If the application has been inactive, the first request may take a short time while the server wakes up.

---

# Features

## User

- Register for events
- Secure login using JWT
- Password encryption with bcrypt
- Protected dashboard
- View registered event details
- Update profile
- Delete profile
- Logout

## Admin

- Secure admin login
- Role-based access control
- View all registered users
- Search users by name, email, or event
- Delete user registrations
- Logout

## Event Registration

- Event registration form
- Event selection
- Multiple interests selection
- Excitement level slider
- Additional comments

## Backend

- RESTful API using Express.js
- JWT authentication middleware
- CRUD operations
- MongoDB Atlas integration
- Mongoose ODM
- CORS support
- Environment variable management with dotenv

## Frontend

- Responsive interface
- Registration page
- User login
- Admin login
- User dashboard
- Admin dashboard
- Search functionality
- Password visibility toggle
- Client-side validation

---

# Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript (ES6)

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication & Security

- JSON Web Token (JWT)
- bcrypt
- dotenv

---

# Project Structure

```text
Event-Registration-System
│
├── backend
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── app.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── index.html
│   ├── login.html
│   ├── adminLogin.html
│   ├── dashboard.html
│   ├── adminDashboard.html
│   ├── *.css
│   ├── *.js
│   └── assets
│
├── README.md
└── .gitignore
```

---

# API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | User login |
| POST | `/admin/login` | Admin login |
| GET | `/dashboard` | User dashboard |
| GET | `/profile` | Retrieve profile |
| PUT | `/profile` | Update profile |
| DELETE | `/profile` | Delete profile |
| GET | `/admin/users` | Retrieve all registered users |
| DELETE | `/admin/delete/:id` | Delete a user |
| GET | `/` | Server status |

---

# Security

- Passwords are hashed using bcrypt before storage.
- JWT-based authentication secures protected routes.
- Role-based authorization restricts administrator-only operations.
- Duplicate email registrations are prevented.
- Sensitive credentials are managed through environment variables.

---

# Installation

## Clone the repository

```bash
git clone https://github.com/TejDubey/Event-Registration-System.git
```

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the backend:

```bash
node app.js
```

## Frontend Setup

Open the `frontend` directory using Live Server or any static web server.

---

# Learning Outcomes

- Full-Stack Web Development
- REST API Development
- Authentication & Authorization
- Role-Based Access Control (RBAC)
- MongoDB Atlas Integration
- JWT Authentication
- Password Security using bcrypt
- CRUD Operations
- Client–Server Communication
- Cloud Deployment using Render and Vercel

---

# Author

**Tej Dubey**

GitHub: https://github.com/TejDubey

---

# License

This project is intended for educational and learning purposes.
