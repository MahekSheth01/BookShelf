const { Book } = require("../model/book.model");

const handleBookStoreController = async (req, res) => {
    try {
        const body = req.body;

        // Validation
        if (!body.BookName || !body.BookTitle || !body.Author || !body.SellingPrice) {
            return res.status(400).json({ Message: "All fields are required", Success: false });
        }

        // Insert book (Mongoose style)
        const bookAdd = await Book.create(body);

        console.log("bookAdd", bookAdd);

        return res.status(201).json({ Message: "Book added successfully", Success: true, Data: bookAdd });
    } 
    catch (error) {
        console.error(error);
        return res.status(500).json({ Message: "Internal Server Error", Success: false });
    }
};

module.exports = handleBookStoreController;
