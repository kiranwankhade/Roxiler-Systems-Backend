# MERN Stack Coding Challenge

This project implements a MERN (MongoDB, Express.js, React.js, Node.js) stack application for managing product transactions.

## Backend

### Data Source

The backend fetches data from a third-party API endpoint and initializes the database with seed data.

- ** Third Party API Endpoint**: `https://s3.amazonaws.com/roxiler.com/product_transaction.json`
- **New API Endpoint**: `https://easy-cyan-coati-tux.cyclic.app/`
- **Request Method**: GET
- **Response Format**: JSON

#### APIs

1. **Initialize Database API**
   - Endpoint: `/api/products`
   - Method: GET
   - Description: Initializes the database with data fetched from the third-party API.

2. **List Transactions API**
   - Endpoint: `/api/search`
   - Sub-Endpoint: `/api/search?search=""&page=${page}&perPage=10`
   - Method: GET
   - Description: Lists all transactions with support for search and pagination.
     
3. **List Transactions API for Month**
   - Endpoint: `/api/search/search_month?month=""`
   - Method: GET
   - Description: Lists all transactions with support for search and pagination.

4. **Statistics API**
   - Endpoint: `/api/statistics/:month`
   - Method: GET
   - Description: Provides statistics for the total sale amount, total sold items, and total not sold items for the specified month.

5. **Bar Chart API**
   - Endpoint: `/api/barChart/:month`
   - Method: GET
   - Description: Generates data for a bar chart displaying price ranges and the number of items in each range for the specified month.

6. **Pie Chart API**
   - Endpoint: `/api/pieChart/:month`
   - Method: GET
   - Description: Generates data for a pie chart showing unique categories and the number of items from each category for the specified month.

7. **Combined Data API**
   - Endpoint: `/api/combinedData/:month`
   - Method: GET
   - Description: Fetches data from all the above APIs for the specified month, combines the response, and sends a final response.

## Frontend

### Transactions Page
** https://frontend-azure-nine-78.vercel.app/

#### Transactions Table

- Displays a table listing transactions for the selected month.
- Supports search and pagination.
- Default pagination values: page = 1, per page = 10.

#### Transactions Statistics

- Displays total amount of sales, total sold items, and total not sold items for the selected month.

#### Transactions Bar Chart

- Displays a bar chart showing price ranges and the number of items in each range for the selected month.


#### Transactions Pie Chart

- Displays a bar chart showing Categories and the number of items in each range for the selected month.

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

##Screenshort Of the App
- Dashboard Page

![RS-1](https://github.com/kiranwankhade/Roxiler-Systems-Backend/assets/49937312/78c2c69e-cc78-4a24-bd95-4261c34b3b56)

![RS-2](https://github.com/kiranwankhade/Roxiler-Systems-Backend/assets/49937312/9938305c-b5a0-4a3b-b386-bcc7f492bcef)

![RS-3](https://github.com/kiranwankhade/Roxiler-Systems-Backend/assets/49937312/57274855-7d3a-4daa-991e-7b23480793dd)

- Statistics Data of particular Month
![RS-4](https://github.com/kiranwankhade/Roxiler-Systems-Backend/assets/49937312/89fd08d2-defe-4779-b14d-c8fd9daa911b)
  
- Bar Chart Data of particular Month
![RS-5](https://github.com/kiranwankhade/Roxiler-Systems-Backend/assets/49937312/4210cff1-b75f-47ea-aee2-00a769fd21f3)

- Pie Data of particular Month
![RS-6](https://github.com/kiranwankhade/Roxiler-Systems-Backend/assets/49937312/ba1c48d6-f22a-4de5-8187-3a57f18e5e91)


