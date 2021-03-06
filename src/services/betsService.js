const {BASEURL} = require('../constant');
const fetch=require('node-fetch');
const { query } = require('express');
module.exports.preMenuTime =(req,res)=>{
         var url=BASEURL+'/pre/menu?h=86400&l=1&g=SHOW&x=2'
         if(req.params && req.params.hours)
            url=BASEURL+'/pre/menu?h='+req.params.hours+'&l=1&g=SHOW&x=2'
        fetchData(url,'POST',null,'text/plain;charset=utf-8')
        .then(response => response.json())
        .then(data=> res.status(200).json(data))
        .catch(err=> res.json({success:false,data:[]}));
           
    }
    module.exports.preMenu =(req,res)=>{
        var url=BASEURL+'/pre/menu?h=86400&l=1&g=SHOW&x=2'
        
        fetchData(url,'POST',null,'text/plain;charset=utf-8')
       .then(response => response.json())
       .then(data=> res.status(200).json(data))
       .catch(err=> res.json({success:false,data:[]}));
          
   }
   module.exports.preList =(req,res)=>{
    var url=BASEURL+'/pre/list?l=1&g=SHOW&x=2'
    if(req.query){
        if(req.query.c)
            url+="&c="+req.query.c;
        if(req.query.h)
            url+="&h="+req.query.h
        else
            url+="&h=86400";
        if(req.query.t)
            url+="&t="+req.query.t
        if(req.query.s)
            url+="&s="+req.query.s
    }
    else
        url+="&h=86400";
    fetchData(url,'POST',null,'text/plain;charset=utf-8')
   .then(response => response.json())
   .then(data=> JSON.parse(data.data.pre))
   .then(resData=>res.status(200).json(resData))
   .catch(err=> res.json({success:false,data:[],error:err}));
      
}
module.exports.liveList=(req,res)=>{
    let url=BASEURL+'/live/list?l=1&g=SHOW&x=2'
    fetchData(url,'POST',null,'text/plain;charset=utf-8')
    .then(response => response.json())
    .then(data=> res.status(200).json(data))
    .catch(err=> res.json({success:false,data:[],error:err}));
}
module.exports.liveDetail=(req,res)=>{
    let url=BASEURL+'/live/detail?l=1&g=SHOW&x=2';
    if(req.params && req.params.id)
    url+=`&m=${req.params.id}`;
    fetchData(url,'POST',null,'text/plain;charset=utf-8')
    .then(response => response.json())
    .then(data=> res.status(200).json(data))
    .catch(err=> res.json({success:false,data:[],error:err}));
}
function fetchData(url,method,body,contentType)
{
    return fetch( url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Cookie':'lang=en',
            'Content-Type': contentType,
            'accept':'*/*',
            'accept-language':'en-US,en;q=0.9'
           //Authorization:'Bearer nJEGbDn-Bq46sV4iBi_t0HPNRYdY_vklDPR_0URPQLQ //mpWBNoKeloTfv9vbp0sx67KikOQQwftOxHBveKSnqF+ghH+uZPIRjkkkNybjvt2zYatJXAT+6uyInhtR04ZmQ==',
       //'x-spree-token':'nJEGbDn-Bq46sV4iBi_t0HPNRYdY_vklDPR_0URPQLQ'
        },
        //redirect: 'follow', // manual, *follow, error
        //referrer: 'no-referrer', // no-referrer, *client
        body: body//JSON.stringify({api_key:'e9703b05c2bc1ce751a474082505ba5b1fc71a6a3666e81e'}), // body data type must match "Content-Type" header
    });
    
}
 