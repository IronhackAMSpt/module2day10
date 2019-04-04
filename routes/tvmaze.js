const express = require('express');
const router  = express.Router();
const axios = require('axios');

/* GET home page */
router.get('/', (req, res, next) => {
  axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${req.query.name}`)
    .then(result => {
      res.send(result.data);
    })
    .catch(err => {
      res.send(err);
    })

});

module.exports = router;
