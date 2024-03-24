import { createClient } from "@libsql/client";
import dotenv from "dotenv";
dotenv.config();

const client = createClient({
  url: `${process.env.DATABASE_URL ?? ""}`,
  authToken: `${process.env.DATABASE_TOKEN ?? ""}`,
});

const initializeDB = async () => {
  // await client.execute(`
  //   DROP TABLE PoemOfTheMonth;
  // `);

  await client.execute(`
    CREATE TABLE PoemOfTheMonth (
      id TEXT PRIMARY KEY DEFAULT '001',
      content TEXT,
      createdAt DATETIME,
      updatedAt DATETIME
    );
  `);
};

void initializeDB();

console.log("Database table(s) created!");
