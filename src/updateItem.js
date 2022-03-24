exports.FunUpdate=async(value)=>{
    const aws=require('aws-sdk');
    const db=new aws.DynamoDB.DocumentClient();
    value=JSON.parse(value);
    console.log("inside the put function",value.pid)
    let p={
        TableName:"Product",
        Key:{
            "productId":value.pid,
            "productName":value.pname
        },
        UpdateExpression: 'set #pQty = :v',
        ConditionExpression: '#pQty > :m',
        ExpressionAttributeNames: {'#pQty' :"productQty"},
        ExpressionAttributeValues: {
    ':v' :value.pqty, 
    ':m' :0
  }
    };
    try{
        let data=await db.update(p).promise()
        return {
            "statusCode":200,
            "body":JSON.stringify({"data":value})
        }

    }
    catch(err){
        return {
            "statusCode":400,
            "body":JSON.stringify(err)
        }
    }


}