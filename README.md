# StaffSync - Employee Data Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
- [Description](#description)
- [Installation](#installation-instructions)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Description
StaffSync is a CLI-based employee management application that helps companies keep track of their departments, roles, and employees. Built using Node.js, PostgreSQL, and TypeScript, StaffSync allows users to view, add, and update employee information in an organized manner via an intuitive command-line interface.

## Walk-Through Video
Link: https://drive.google.com/file/d/1fKxWY0Aae5Q5nf4QrTqI6jvVKV1LpCXg/view?usp=sharing

## Features
	•	View All Departments: List all departments.
	•	View All Roles: List all roles within each department.
	•	View All Employees: Display all employees with their roles and associated departments.
	•	Add a Department: Add a new department to the company.
	•	Add a Role: Add a new role associated with a department.
	•	Add an Employee: Add a new employee and assign them to a specific role.
	•	Update Employee Role: Change an employee’s assigned role.

## Tech Stack
	•	Node.js: JavaScript runtime environment.
	•	TypeScript: For type safety and developer tooling.
	•	PostgreSQL: Relational database to store departments, roles, and employee information.
	•	Inquirer.js: For building an interactive command-line interface.
	•	Dotenv: For managing environment variables.

## Installation Instructions
Prequisites
	•	Node.js (version 14 or higher recommended)
	•	PostgreSQL installed and running

Steps
1. Clone the repository:
```bash
git clone https://github.com/ikebyers/StaffSync-Employee-Tracker.git
cd staffsync
```

2. Install dependencies:
```bash
npm install
```

3. Compile Typescript:
```bash
npm run build
```

Set up environment variables
Database Setup

1. Create a PostgreSQL database:
```sql
CREATE DATABASE staffsync_db;
```

2. Connect to the database
```bash
psql -U your_postgre_username -d staffsync_db
```

3. Run the SQL schema
```sql
\i db/schema.sql
```

Environment Variables

Create a '.env' file in the project root directory and add the following environment variables:
```
DB_HOST=localhost
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_NAME=staffsync_db
DB_PORT=5432
```
Make sure your credentials match up with your PostgreSQL setup.

## Usage
1. Start the application:
```bash
npm run start
```
or to run in development mode utilizing auto-reloading:

```bash
npm run start:dev
```

2. Use the Command-Line Interface:
Once you start the application, you’ll be prompted with options to manage departments, roles, and employees. Follow the on-screen prompts to perform different actions such as viewing, adding, or updating records.

## License 
MIT

## Credits
Built with
	•	Node.js - Server-side JavaScript runtime.
	•	TypeScript - JavaScript with static typing.
	•	Express.js - Web framework for Node.js.
	•	Inquirer.js - CLI-based user input prompts.
	•	PostgreSQL - Open-source relational database system for persistent data storage.
	•	pg.js - Node.js library for interacting with PostgreSQL databases.

Authors
**Ike Byers** - *Project Development & Architecture* 
**Keith Sialana** - *Code Review & Supplemental Debugging*

External Resources
	•	Node.js API Documentation
	•	TypeScript Handbook
	•	Express.js Guide

## Tests
```bash
N/A
```

## Questions
If you have any questions, please contact me at:
- GitHub: [ikebyers](https://github.com/ikebyers)
- Email: ikebyersmgmt@gmail.com
