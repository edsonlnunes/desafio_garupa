class MainDAO {

  constructor(connection) {
    this._connection = connection;
  }

  async getLikes() {
    try {
      const { rows } = await this._connection.query(`
        SELECT
          *
        FROM
          garupa.likes;
      `);

      // separa por likes e deslikes
      const likes = rows.filter(f => f.value);
      const deslikes = rows.filter(f => !f.value);

      return { likes, deslikes };
    } catch (err) {
      return err.message;
    }
  }

  async like(userid) {
    try {
      const { rows } = await this._connection.query(`
        INSERT INTO
          garupa.likes(userid, value)
        VALUES ($1, $2);
      `, [userid, true]);

      const likes = await this.getLikes();
      return likes;
    } catch (err) {
      return err.message;
    }
  }

  async deslike(userid) {
    try {
      const { rows } = await this._connection.query(`
      INSERT INTO
        garupa.likes(userid, value)
      VALUES ($1, $2);
    `, [userid, false]);

      const likes = await this.getLikes();
      return likes;
    } catch (err) {
      return [];
    }
  }
}

module.exports = MainDAO;