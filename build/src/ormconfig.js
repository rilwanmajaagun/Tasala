"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var path_1 = __importDefault(require("path"));
var isCompiled = path_1.default.extname(__filename).includes('js');
exports.default = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: !process.env.DB_NO_SYNC,
    logging: !process.env.DB_NO_LOGS,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 2000,
    entities: [
        "src/entity/**/*." + (isCompiled ? "js" : "ts")
    ],
    migrations: [
        "src/migration/**/*." + (isCompiled ? "js" : "ts")
    ],
    cli: {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
    },
};
