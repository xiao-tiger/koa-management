const connection = require('../app/database')

class UserService {
  async create (user) {
    const { name, password } = user
    const statement = `INSERT INTO user (name, password) VALUE (?, ?);`
    await connection.execute(statement, [name, password])
    return 'εε»Ίζε'
  }
}

module.exports = new UserService()
