const express = require('express');
const path = require('path');

// Express Router intialisation
const router = express.Router();

// Default routes

router.get('*', function(req, res) {
    res.sendfile(path.join(__dirname, "../../client/index.html")); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;