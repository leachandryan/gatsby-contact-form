# Gatsby.js Contact Form App

This is a basic Gatsby.js app that features a contact form. The app utilizes a separate Node.js backend located in the `backend` directory to handle API calls from the form.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the `local-backend` directory and run `npm install` to install dependencies for the local backend.
3. Run `npm run start` within the `local-backend` directory to start the local backend server. Server will start on `http://localhost:8001`
4. Navigate back to the root directory of the project and run `npm install` to install dependencies for the Gatsby.js app.

## Usage

- To start the Gatsby.js app, run `gatsby develop`. Make sure the local backend is running to successfully submit the form.
- Access the app in your browser at `http://localhost:8000`.

## Testing

This project includes Jest tests. To run the tests, simply type: `npm test` in root directory. 

