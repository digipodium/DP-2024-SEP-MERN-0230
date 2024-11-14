const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('response from user add');
});

// getall
// getbyid
// delete
// update

module.exports = router;