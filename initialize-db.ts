import { createClient } from "@libsql/client";
import dotenv from "dotenv";
dotenv.config();

const client = createClient({
  url: `${process.env.DATABASE_URL ?? ""}`,
  authToken: `${process.env.DATABASE_TOKEN ?? ""}`,
});

void client.execute(`
  DROP TABLE PoemOfTheMonth;
`);

void client.execute(`
  CREATE TABLE PoemOfTheMonth (
    id TEXT PRIMARY KEY DEFAULT '001',
    content TEXT,
    createdAt DATETIME,
    updatedAt DATETIME
  );
`);

console.log("Database table(s) created!");
