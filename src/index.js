const exp=require('express');
const serverless=require('serverless-http'); 
//const aws=require('aws-sdk');
//const db=new aws.DynamoDB.DocumentClient();
 
const app=exp();
 
app.get('/items',async(req,res)=>{
                    let fun=require('./getItem.js');
                    console.log("inside the get method",req.query) 
                    let value=req.query//.toString('utf8'); 
                    console.log(value.pid); 
                    let result =await fun.FunGet(value);
                     res.send(result);

});  

app.post('/items',async(req,res)=>{
                    let fun=require('./putItem.js');
                    console.log("inside the post method ",req);
                    console.log("body", req.body.toString('utf8'));
                    let value=req.body.toString('utf8');
                    let result =await fun.FunPut(value); 
                    res.send(result);  

});

app.patch('/items',async(req,res)=>{
                    let fun=require('./updateItem.js');
                    let value=req.body.toString('utf8');
                    let result =await fun.FunUpdate(value);
                    res.send(result);
});


app.delete('/items',async(req,res)=>{
                        let fun=require('./deleteItem.js');
                        let value=req.body.toString('utf8');
                        let result =await fun.FunDelete(value); 
                        res.send(result);

}); 

exports.lambdaHandler=serverless(app);

