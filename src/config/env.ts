import * as dotenv from 'dotenv';

dotenv.config();

let path;
switch(process.env.NODE_ENV){
  case 'test':
    path = `${__dirname}/../../.env.test`
    break;
    case 'production':
      path = `${__dirname}/../../.env`;
      break;
    default: 
    path =`${__dirname}/../../.env.development`;
}

dotenv.config({ path: path})

export const env = {
  DB_NO_LOGS: process.env.DB_NO_LOGS,
  DB_URL: process.env.DB_URL
}