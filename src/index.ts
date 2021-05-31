import express from 'express';
import {TryDBConnect} from "./config/db";
import { routes } from './routes/v1'
import debug from 'debug';
import { CommonRoutesConfig } from './routes/v1/common/common.routes.config';
import expressConfig from './config/express';


const app: express.Application = express();

const debugLog: debug.IDebugger = debug('app');

// Just checking if given PORT variable is an integer or not
let port = parseInt(process.env.PORT || "");
if (isNaN(port) || port === 0) {
  port = 3000;
}


expressConfig(app);

TryDBConnect().then((result) => {
  if(result){
    app.listen(port, "0.0.0.0", () => { 
      routes.forEach((route: CommonRoutesConfig) => {
     debugLog(`Routes configured for ${route.getName()}`);
 });
     console.log(`🚀 Server Started at PORT: ${port}`);
   })
  }
}).catch((error)=> {console.log(error);
});

export default app;
