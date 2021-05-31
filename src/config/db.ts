import {Connection, createConnection, getConnection} from "typeorm";
import ORMConfig from "../ormconfig";
import debug from 'debug';
import  errorMiddleware from '../middleware/error.middleware';

const log: debug.IDebugger = debug('database');

export const DBConnect = async () => {
  let connection: Connection | undefined;
  try {
    connection = getConnection();
  } catch (e) {
  }

  try {
    if (connection) {
      if (!connection.isConnected) {
        await connection.connect();
      }
    } else {
      await createConnection(ORMConfig);
    }
    log("🌴 Database connection was successful!");
  } catch (e) {
    log('ERROR: Database connection failed!!');
    throw e;
  }
};

export const TryDBConnect = async () => {
  try {
    await DBConnect();
    return 'database connected'
  } catch (e) {
    console.log(e); 
  }
};

