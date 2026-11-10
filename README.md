# Express TypeScript Modular User API

A modular REST API built with Node.js, Express.js, and TypeScript
as part of my Elevvo Backend Development Internship.

## Features

- Modular architecture (Routes and Controllers)
- Mock user data
- Custom request logging middleware
- API key authentication
- Error handling for invalid and missing users
- Jest and Supertest automated tests
- Strict TypeScript configuration

## Technologies

- Node.js
- Express.js
- TypeScript
- Jest
- Supertest
- Git and GitHub

## Installation

Clone the repository:

    git clone YOUR_REPOSITORY_URL

Install dependencies:

    npm install

Build:

    npm run build

Run tests:

    npm test

Start server:

    npm start

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/users | Get all users |
| GET | /api/users/:id | Get user by ID |

All user endpoints require the x-api-key header.

Demo API key: my-secret-key