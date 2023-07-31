/* eslint-disable no-console */
import server from "./src/index.js";
import { logsError } from "./src/lib/utils.js";
import { mongooseConnection } from "./src/mongodb/index.js";

let db;
// eslint-disable-next-line no-undef
const port = 8004;

/** Connect to Mongo */
(async () => {
  try {
    db = await mongooseConnection();
    if (db) {
      console.time(
        `⚡️ server started with 👍🏼 database connected & redis connected http://localhost:${port} in `
      );
      server.listen(port, () => {
        console.timeEnd(
          `⚡️ server started with 👍🏼 database connected http://localhost:${port} in `
        );
      });
    }
  } catch (error) {
    console.log(error);
    logsError(error);
    console.timeEnd(
      `👎🏻 database or redis connection has some problem : ${JSON.stringify(
        error
      )}`
    );
  }
})();

export default db;
