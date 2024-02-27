const mysql = require("mysql");
const client = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"web2009"
})

/**
 * query执行数据库语句的方法
 *     sql:数据库语句
 *     arr:数据库语句的参数
 *     callback:相应结果的回调函数callback(error,result)
 */

module.exports = function sqlFn(sql,arr,callback){
    client.query(sql,arr,(error,result) =>{
        if(error){
            console.log(error)
            return;
        }
        callback(result) // 回调函数
    })
}

