import http from "http";
import serverless from "serverless-http";

const port = process.env.PORT || 3001;

import { app } from "./app";

const server = http.createServer(app);

if (process.env.NODE_ENV == "dev") {
  app.listen(port, () => {
    console.log(`🎯 Ecommerce api listening on port: ${port}!`);
  });
}

export const handler = serverless(app);
