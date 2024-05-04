const express= require('express');

const {generateShortUrl,getUrlAnalytics}= require("../controllers/url")

const router= express.Router();

router.post('/',generateShortUrl);

router.get('/analytics/:shortId',getUrlAnalytics);

module.exports=router;