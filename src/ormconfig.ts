import {ConnectionOptions} from "typeorm";
import 'dotenv/config'
import {env} from './config/env'
import path from "path";

const isCompiled = path.extname(__filename).includes('js');
export default {
  type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    synchronize: false,
    logging: !env.DB_NO_LOGS,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 2000,
  entities: [
    `src/entity/**/*.${isCompiled ? "js" : "ts"}`
  ],
  migrations: [
    `src/migration/**/*.${isCompiled ? "js" : "ts"}`
  ],
  cli: {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
  },
} as ConnectionOptions;
