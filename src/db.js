let mongoose = require ("mongoose");
const server = "http://localhost:3000";
const database = 'test';


class Database {
constructor(){
    this._connect()
}
_connect() {
    mongoose.connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error')
      })
 }
}
module.exports = new Database()

