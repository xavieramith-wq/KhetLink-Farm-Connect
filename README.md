# KhetLink

**KhetLink** is an agricultural machinery rental platform that connects farmers with machinery owners, making it easier to discover, rent, and manage agricultural equipment.

## Problem Statement

Small and marginal farmers may not be able to afford expensive agricultural machinery such as tractors, tillers, harvesters, and other equipment. At the same time, machinery owned by farmers or equipment providers may remain unused for significant periods.

KhetLink aims to solve this problem by providing a digital platform where farmers can discover available agricultural machinery, check rental details, and request equipment for their required dates. Machinery owners can list their equipment, manage availability, and handle booking requests.

## Project Description

KhetLink provides a centralized platform for agricultural machinery rental.

The platform supports two main types of users:

* **Farmers** – Search for machinery, view rental details, check availability, and book equipment.
* **Machinery Owners** – Add machinery listings, specify rental prices and availability, and manage booking requests.

The platform focuses on making machinery discovery and rental more convenient and transparent for farmers.

## Key Features

### Farmer Features

* Farmer registration and login
* Search for agricultural machinery
* Search based on location and required dates
* View machinery details
* View rental price
* Check machinery availability
* Book machinery
* View booking confirmation
* Rate machinery owners after completing a rental

### Machinery Owner Features

* Owner registration and login
* Add agricultural machinery
* Add machinery name, type, price, location, and photos
* Manage machinery listings
* Manage machinery availability
* View booking requests
* Confirm or manage bookings
* Receive ratings from farmers

## Trust Features

KhetLink aims to provide useful trust information before a farmer makes a rental decision.

Trust-related information can include:

* Owner name
* Owner rating
* Rental price
* Machinery details
* Availability
* Booking information

## Technology Stack

### Frontend

* React.js
* Vite
* Tailwind CSS

### Backend

* Python
* Flask
* REST API

### Database

* MongoDB Atlas

### Development Tools

* Git
* GitHub
* Visual Studio Code

## Project Structure

```text
KhetLink/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── ...
│
├── README.md
└── ...
```

## Getting Started

### Prerequisites

Make sure the following are installed:

* Python
* Node.js
* npm
* Git
* MongoDB Atlas account

## Backend Setup

Open a terminal and navigate to the backend folder:

```bash
cd backend
```

Create a Python virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment on Windows:

```bash
venv\Scripts\activate
```

Install the required Python packages:

```bash
pip install -r requirements.txt
```

Start the Flask backend:

```bash
python app.py
```

The backend API will start locally.

## Frontend Setup

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install the required packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend application will be available at the local URL shown in the terminal.

## Database

KhetLink uses **MongoDB Atlas** for database storage.

The backend should be configured with the MongoDB connection string using environment variables rather than committing credentials directly to GitHub.

Example:

```text
MONGODB_URI=your_mongodb_connection_string
```

Do not upload passwords, API keys, database credentials, or other secrets to the repository.

## API Integration

The React frontend communicates with the Flask backend through REST APIs.

The backend handles:

* User authentication
* Machinery information
* Machinery availability
* Booking requests
* Booking management
* Ratings and related data

## Development Workflow

The project is developed using Git and GitHub for version control and collaboration.

```text
Frontend → REST API → Flask Backend → MongoDB Atlas
```

## Project Status

**Current Status:** Development

The frontend and backend are being developed and integrated as part of the KhetLink project.

## Future Enhancements

Possible future improvements include:

* Online payment integration
* Location and map-based machinery search
* Advanced availability calendar
* Notifications for booking updates
* Improved owner verification
* Mobile application
* AI-based machinery recommendations
* Rental history and analytics

## Team Project

KhetLink is developed as a team project with the objective of improving access to agricultural machinery through a digital rental platform.

## License

This project is developed for academic/project purposes.
