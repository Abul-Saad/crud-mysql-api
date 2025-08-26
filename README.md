# 🚀 Node.js + Express + MySQL REST API (MVC Pattern)

A production-ready REST API built with **Node.js**, **Express.js**, and **MySQL** using the **MVC (Model-View-Controller)** design pattern.  
This project includes **CRUD operations**, **authentication (JWT)**, and follows best practices for scalable backend development.

---

## ✨ Features

- 🏗️ MVC architecture (Models, Controllers, Routes)
- 🔐 JWT Authentication
- 📦 CRUD operations (Create, Read, Update, Delete)
- 🗄️ MySQL database integration
- ⚡ Express.js middleware (CORS, body-parser, etc.)
- 📑 REST API with JSON responses
- 🛠️ Easy to extend and scale

---

## 📂 Project Structure

```bash
📦 node-express-mysql-api
├── 📁 config         # Database & environment configs
│   └── db.js
├── 📁 controllers    # Business logic
│   └── userController.js
├── 📁 models         # Database queries
│   └── userModel.js
├── 📁 routes         # API routes
│   └── userRoutes.js
├── 📁 middleware     # Auth & error handling
│   └── authMiddleware.js
├── 📁 utils          # Helpers (validators, formatters)
├── server.js         # Main entry point
├── package.json
└── README.md

git clone https://github.com/Abul-Saad/crud-mysql-api.git
cd node-express-mysql-api

npm install

npm start
