const db = require('../config/database');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

// get all dua 
exports.getAllDuas = catchAsyncErrors(async (req, res, next) => {
    db.all('SELECT * FROM dua', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.status(200).json({
            success: true,
            totalData: rows.length,
            data: rows,
        });
    });
});

// get all category 

exports.getAllCategories = catchAsyncErrors(async (req, res, next) => {
    db.all('SELECT * FROM category', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.status(200).json({
            success: true,
            categories: rows,
        });
    });
});

// get all subcategory 
exports.getAllSubcategories = catchAsyncErrors(async (req, res, next) => {

    db.all('SELECT * FROM sub_category', (err, rows) => {

        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        // send back the response of the request
        res.status(200).json({
            success: true,
            subCategory: rows
        })
    })
})