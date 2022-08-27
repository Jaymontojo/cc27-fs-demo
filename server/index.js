const serverSetup = require('./server.js')
const PORT = process.env.PORT || 4000;
const server = serverSetup();
const db = require('../db/knex');

(async () => {
  try{
    await db.migrate.latest();
    server.listen(PORT, () => {
      console.log(`listening @ http://localhost:${PORT}`)
    })
  }catch (err) {
    console.error(`app failed to start ${err}`)
  }
})();