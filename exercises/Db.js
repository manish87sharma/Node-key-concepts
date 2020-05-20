const sql = require('mssql');
const Sequelize = require('sequelize');

//connecting to local database
//steps
//check your sql server manager
//C:\Windows\SysWOW64\SQLServerManager11.msc



// config for ms sql
const config = {
    user: '****',
    password: '*****',
    server: 'localhost\\SQLEXPRESS',
    database: 'test',
    dialect: "mssql",
    debug:true,
    options: {
       // this must be false
        encrypt: false,    
    },
}


const db = async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(config)
        // const result = await sql.query`select * from mytable where id = ${value}`
        // console.dir(result)
        console.log("connected");
    } catch (err) {
        // ... error checks
        console.log("Error", err)
    }
}
db();

// for sequelize
const sequelize = new Sequelize('database', 'user', 'password', {
    dialect: 'mssql',
    host: 'localhost',
    dialectOptions: {
        encrypt: true,
        instanceName: 'SQLEXPRESS'
    }
});

sequelize.authenticate().then((err) => {
    console.log('Connection successful', err);
})
.catch((err) => {
    console.log('Unable to connect to database', err);
})


