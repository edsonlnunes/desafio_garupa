const { Pool } = require('pg');

let connection = null;

function createDBConnection() {
    const pool = new Pool({
        user: 'dev',
        host: 'localhost',
        database: 'garupa',
        password: 'Pm*023129',
        port: 5432
    });


    // const pool = new Pool({
    //     user: 'pitole',
    //     host: 'localhost',
    //     database: 'garupa',
    //     password: 'Pm*023129',
    //     port: 5432
    // });
    pool.query(`SET SCHEMA 'garupa'`);
    return pool;
}

module.exports = () => {
    if (!connection) {
        connection = createDBConnection();
    }
    return connection;
};