# Employee Data Management

This is a simple CRUD application for Employee data management using Node.js, Express.js, and MongoDB.
## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) installed and running.
- [Mongo Shell](https://docs.mongodb.com/manual/mongo/) for interacting with MongoDB.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Features

- Create, Read, Update, and Delete employee records
- Retrieve all employees or a specific employee by ID

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/employee-data-management.git

```
2. Usage
```bash
cd CRUDJs
npm install
```
3. Run : The application will be accessible at http://localhost:9000.
```bash
nodemon start
```
## Endpoints
1. GET http://localhost:9000/employees/ : Get all employees
2. GET http://localhost:9000/employees/:id : Get employee by ID
3. POST http://localhost:9000/employees/ : Create a new employee
4. PATCH http://localhost:9000/employees/:id : Update employee by ID
5. DELETE http://localhost:9000/employees/:id : Delete employee by ID


## License
This project is licensed under the MIT License.

## Author

- **Devi Prakash**
  - GitHub: [dprakash2101](https://github.com/dprakash2101)
