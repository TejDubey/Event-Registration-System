# Event Registration System

A full-stack Event Registration System built using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB Atlas. The application allows users to register for events, create secure accounts, and manage their profiles, while providing administrators with a dedicated dashboard to manage registrations. The project demonstrates authentication, authorization, CRUD operations, and role-based access control in a complete web application.

---

## Features

### User Features

- User Registration
- Secure Login
- Password Encryption using bcrypt
- JWT Authentication
- Protected Dashboard
- View Registered Event
- Update Profile
- Delete Profile
- Logout

### Admin Features

- Secure Admin Login
- Role-Based Access Control
- View All Registered Users
- Search Users by Name, Email, or Event
- Delete User Registrations
- Logout

### Event Registration

- Student Registration Form
- Event Selection
- Multiple Interests Selection
- Excitement Level Slider
- Additional Comments Section

### Database

- MongoDB Atlas Integration
- Mongoose ODM
- Cloud-based Data Storage

### Backend

- Express.js REST API
- Registration Route
- Login Route
- Admin Authentication
- JWT Middleware
- CRUD Operations
- JSON Request Handling
- CORS Configuration
- Environment Variables using dotenv

### Frontend

- Responsive User Interface
- Registration Page
- User Login
- Admin Login
- User Dashboard
- Admin Dashboard
- Search Functionality
- Password Show/Hide Toggle
- Client-side Validation
- Success and Error Messages

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

## Authentication & Security

- JSON Web Token (JWT)
- bcrypt
- dotenv

---

# Project Structure

```
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
│   ├── css
│   ├── js
│   ├── images
│   ├── regform.html
│   ├── login.html
│   ├── adminLogin.html
│   ├── dashboard.html
│   ├── adminDashboard.html
│   └── ...
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
| GET | `/dashboard` | Protected user dashboard |
| GET | `/profile` | Fetch user profile |
| PUT | `/profile` | Update user profile |
| DELETE | `/profile` | Delete user profile |
| GET | `/admin/users` | Retrieve all registered users |
| DELETE | `/admin/delete/:id` | Delete a user (Admin) |
| GET | `/` | Server status |

---

# Security Features

- Passwords are securely hashed using bcrypt before being stored.
- User authentication is handled using JSON Web Tokens (JWT).
- Protected routes require a valid authentication token.
- Role-based authorization restricts administrative operations.
- Duplicate email registrations are prevented.
- Sensitive configuration values are stored using environment variables.

---

# Application Flow

```
User Registration
        │
        ▼
Register Account
        │
        ▼
Password Hashing (bcrypt)
        │
        ▼
MongoDB Atlas
        │
        ▼
User Login
        │
        ▼
JWT Generation
        │
        ▼
Protected User Dashboard
        │
        ▼
Profile Management
        │
        ├───────────────┐
        ▼               │
Admin Login             │
        │               │
        ▼               │
JWT Verification        │
        │               │
        ▼               │
Admin Dashboard         │
        │               │
        ▼               │
View • Search • Delete Users
```

---

# Running the Project

## Clone the Repository

```bash
git clone https://github.com/TejDubey/Event-Registration-System.git
```

## Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the server:

```bash
node app.js
```

## Frontend

Open the `frontend` folder and run the project using Live Server or any static web server.

---

# Learning Outcomes

This project provided practical experience in:

- Full Stack Web Development
- REST API Design
- Authentication and Authorization
- Role-Based Access Control
- MongoDB & Mongoose
- JWT Authentication
- Password Security with bcrypt
- CRUD Operations
- Client–Server Communication
- Deployment Workflow

# Author

**Tej Dubey**

B.Tech CSE (AI & ML)  
VIT Chennai

GitHub: https://github.com/TejDubey

---

# License

This project is developed for educational and learning purposes.
