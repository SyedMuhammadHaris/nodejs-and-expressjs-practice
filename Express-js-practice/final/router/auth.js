const express = require('express');
const router = express.Router();


//HTTP POST METHDOD STARTS

router.post('/', (req, res) => {
    //    res.send("Post")

    const { name } = req.body;
    if (!name) {
        res.status(404).send("You enter empty value")
    }
    res.status(200).send(`Welcome ${name}`);
});

module.exports = router;