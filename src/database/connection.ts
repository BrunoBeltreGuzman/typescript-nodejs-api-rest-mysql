import { createPool, Pool } from "mysql2/promise";

export let connection: Pool;

async function connect(): Promise<Pool> {
       const database: string = "apis-rest";

       try {
              connection = await createPool({
                     host: "localhost",
                     port: 3306,
                     user: "sa",
                     password: "admin",
                     database: database,
              });
              console.log("Data Base '" + database + "' Connected!");
              return connection;
       } catch (error) {
              throw error;
       }
}

connect();
