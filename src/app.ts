import { config } from "./utils/config";
import { createServer } from "./utils/createServer";
import { logger } from "./utils/logger";

async function startServer() {
  const server = await createServer();
  server.listen({
    port: config.PORT,
    host: config.HOST
  });

  logger.info("app started");
}

startServer();
