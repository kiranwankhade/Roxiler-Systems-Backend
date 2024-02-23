# MERN Stack Coding Challenge

This project implements a MERN (MongoDB, Express.js, React.js, Node.js) stack application for managing product transactions.

## Backend

### Data Source

The backend fetches data from a third-party API endpoint and initializes the database with seed data.

- **API Endpoint**: `https://s3.amazonaws.com/roxiler.com/product_transaction.json`
- **Request Method**: GET
- **Response Format**: JSON

#### APIs

1. **Initialize Database API**
   - Endpoint: `/api/init`
   - Method: GET
   - Description: Initializes the database with data fetched from the third-party API.

2. **List Transactions API**
   - Endpoint: `/api/transactions`
   - Method: GET
   - Description: Lists all transactions with support for search and pagination.

3. **Statistics API**
   - Endpoint: `/api/statistics/:month`
   - Method: GET
   - Description: Provides statistics for the total sale amount, total sold items, and total not sold items for the specified month.

4. **Bar Chart API**
   - Endpoint: `/api/barChart/:month`
   - Method: GET
   - Description: Generates data for a bar chart displaying price ranges and the number of items in each range for the specified month.

5. **Pie Chart API**
   - Endpoint: `/api/pieChart/:month`
   - Method: GET
   - Description: Generates data for a pie chart showing unique categories and the number of items from each category for the specified month.

6. **Combined Data API**
   - Endpoint: `/api/combinedData/:month`
   - Method: GET
   - Description: Fetches data from all the above APIs for the specified month, combines the response, and sends a final response.

## Frontend

### Transactions Page

#### Transactions Table

- Displays a table listing transactions for the selected month.
- Supports search and pagination.
- Default pagination values: page = 1, per page = 10.

#### Transactions Statistics

- Displays total amount of sale, total sold items, and total not sold items for the selected month.

#### Transactions Bar Chart

- Displays a bar chart showing price ranges and the number of items in each range for the selected month.

## Usage

1. Clone the repository.
2. Install dependencies for both frontend and backend.
3. Start the backend server.
4. Start the frontend development server.
5. Access the application in your browser.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Chart.js
- Axios
- Chakra UI

