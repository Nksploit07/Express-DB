exports.FunPut=async(value)=>{
    const aws=require('aws-sdk');
    const db=new aws.DynamoDB.DocumentClient();
    value=JSON.parse(value);
    console.log("inside the put function",value.pid)
    let p={
        TableName:"Product",
        Item:{
            "productId":value.pid,
            "productName":value.pname,
            "productQty":value.pqty,
            "productPrice":value.pprice 
        }
    };
    try{
        let data=await db.put(p).promise()
        console.log("inserted");
        return {
            "statusCode":200,
            "body":JSON.stringify({"data":value}) 
        }

    }
    catch(err){
        return {
            "statusCode":500,
            "body":JSON.stringify(err)
        }
    }
   
}