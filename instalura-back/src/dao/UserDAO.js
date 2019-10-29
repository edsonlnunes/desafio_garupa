class UserDAO {
    constructor(connection) {
        this._connection = connection;
    }

    login(user, password) {
        return new Promise((resolve, reject) => {
            this._connection.query(`
                SELECT 
                    * 
                FROM 
                    garupa.users 
                WHERE 
                    "username" = $1 
                AND
                    "password" = $2
            `, [user, password], (err, res) => {
                if (err) {
                    return reject(err.message);
                }
                return resolve(res.rows);
            })
        })
    }
}

module.exports = UserDAO;