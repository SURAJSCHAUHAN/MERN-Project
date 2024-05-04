const shortid=require('shortid');
const URL=require('../models/url');

const generateShortUrl= async(req,res)=>{
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"url missing"})
    const shortID= shortid();
    await URL.create({
        shortId:shortID,
        redirectUrl:body.url,
        visitHistory:[]
    });

    return res.json({id:shortID});
}

const getUrlAnalytics=async(req,res)=>{
    const shortId=req.params.shortId;
    const result=await URL.findOne({shortId});
    return res.json({
        totalClicks:result.visitHistory.length,
        analytics: result.visitHistory,
    })
}


module.exports ={generateShortUrl,getUrlAnalytics};