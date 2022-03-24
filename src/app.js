exports.lambdaHandler = async (event, context) => {
    const aws=require('aws-sdk');
    console.log(event)
    const db=new aws.DynamoDB.DocumentClient();
    switch(event.httpMethod){
        case "POST":let fun=require('./putItem.js');
                    let value=JSON.parse(JSON.stringify(event.body));
                    let result =await fun.FunPut(value);
                    return result;
                    break;
        case "GET": let fun1=require('./getItem.js');
                    let value1=JSON.parse(JSON.stringify(event.queryStringParameters));
                    console.log(value1); 
                    let result1 =await fun1.FunGet(value1);
                     return result1;
                     break;
        case "PATCH": let fun2=require('./updateItem.js');
                    let value2=JSON.parse(JSON.stringify(event.body));
                    let result2 =await fun2.FunUpdate(value2);
                    return result2;
                    break;
        case "DELETE":let fun3=require('./deleteItem.js');
                        let value3=JSON.parse(JSON.stringify(event.body));
                        let result3 =await fun3.FunDelete(value3); 
                        return result3;
                        break;
        default: return{
            "statusCode":400,
            "body":JSON.stringify("Invalid",event.httpMethod)
        };
                
    }

 };
 