//const { result } = require('cypress/types/lodash');
const sql = require ('mysql');

const config = {
//server: "TAR-HOSQL01DEV",
server: "10.10.10.89",
port: 1433,
user: "AppUAT_Account",
password: "7SkvsT*5$@nYFWz6",
database: "ENTERPRISE",
options: {
enableArithAbort: true,
},
connectionTimeout: 15000,
pool: {

    max: 10,
    min: 0,
    idleTimeoutMills: 30000,
},
};

sql.on('error', err => {
console.log(err.message)
})

//Async Await
async function getDBUsersAsyncFunction(){
      try{
let pool = await sql.connect(config)
let result1 = await pool.request().query("Select * from TFS.CM_Deals Where DealNUmber='TFSB-0149'");
console.log(result1);
          sql.  close();
      } catch (error) {
        console.log(err.message);
        sql.close();

      }


}



