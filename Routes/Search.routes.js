const express = require("express");
const { TransactionModel } = require("../Models/Transaction");

const searchRouter = express.Router();


// Handler function to search transactions
const searchTransactions = async (searchText, res) => {
  try {
    const encodedSearchText = encodeURIComponent(searchText);
    console.log("encodedSearchText:", encodedSearchText);

    let query = {};

    // Check if the searchText is a number
    const isNumeric = !isNaN(parseFloat(searchText));

    if (isNumeric) {
      // Numeric search for price (approximate)
      query = {
        price: {
          $gte: parseFloat(searchText) - 1,
          $lte: parseFloat(searchText) + 1,
        },
      };
    } else {
      // String search for title or description
      query = {
        $or: [
          {
            title: {
              $regex: decodeURIComponent(encodedSearchText),
              $options: "i",
            },
          },
          {
            description: {
              $regex: decodeURIComponent(encodedSearchText),
              $options: "i",
            },
          },
        ],
      };
    }

    // // Fetch all transactions matching the query
    // const transactions = await TransactionModel.find(query);

    // res.json(transactions);
    
     // Fetch all transactions matching the query
     const totalCount = await TransactionModel.countDocuments(query);
     const totalPages = Math.ceil(totalCount / perPage);
 
     const skip = (page - 1) * perPage;
     const transactions = await TransactionModel.find(query)
       .skip(skip)
       .limit(perPage);
 
     return { transactions, totalPages };
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// API to list all transactions with search
searchRouter.get("/", async (req, res) => {
  try {
    const searchText = req.query.search || "";

    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;
    const skip = (page - 1) * perPage;

    const delay = 300; // Adjust the debounce delay as needed

    // // Execute the search only if there are search words
    // if (searchText.length > 0) {
    //     // Debounce the search function
    //     setTimeout(() => {
    //         searchTransactions(searchText, res);
    //     }, delay);
    // } else {
    //     // If search parameter is empty, return all records with pagination
    //     const transactions = await TransactionModel.find().skip(skip).limit(perPage);
    //     res.json(transactions);
    // }

     // Execute the search only if there are search words
     if (searchText.length > 0) {
      // Debounce the search function
      setTimeout(async () => {
        try {
          const { transactions, totalPages } = await searchTransactions(
            searchText,
            page,
            perPage
          );
          res.json({ transactions, totalPages });
        } catch (error) {
          res.status(500).json({
            message: "Internal server error",
            error: error.message,
          });
        }
      }, delay);
    } else {
      // If search parameter is empty, return all records with pagination
      const totalCount = await TransactionModel.countDocuments();
      const totalPages = Math.ceil(totalCount / perPage);

      const skip = (page - 1) * perPage;
      const transactions = await TransactionModel.find().skip(skip).limit(perPage)

      res.json({ transactions, totalPages });
    }

  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

searchRouter.get("/byMonth",async (req, res) =>{
  try {
    const { month, page = 1, perPage = 10 } = req.query;
    const skip = (page - 1) * perPage;

    // Query transactions for the specified month
    const transactions = await TransactionModel.find({ month })
        .skip(skip)
        .limit(perPage);

    // Query total count of transactions for pagination
    const totalCount = await TransactionModel.countDocuments({ month });

    // Calculate total pages based on total count and perPage
    const totalPages = Math.ceil(totalCount / perPage);

    res.json({
        data: transactions,
        totalPages: totalPages,
    });
} catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Internal Server Error" });
}
})

module.exports = {
  searchRouter,
};

/**
 * @swagger
 * /search:
 *   get:
 *     summary: Search transactions
 *     description: Returns a list of transactions matching the search criteria
 *     parameters:
 *       - in: query
 *         name: search
 *         description: Search text for title or description, or numeric value for approximate price search
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './Models/Transaction'
 *       500:
 *         description: Internal server error
 */

