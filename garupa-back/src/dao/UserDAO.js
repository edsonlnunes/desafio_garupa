class UserDAO {
    constructor(connection) {
        this._connection = connection;
    }

    async login(user, password) {
        try {
            const { rows } = await this._connection.query(`
                SELECT 
                    * 
                FROM 
                    garupa.users 
                WHERE 
                    "username" = $1 
                AND
                    "password" = $2
            `, [user, password]);
            return rows[0];
        } catch (err) {
            return err.message;
        }
    }
}

module.exports = UserDAO;