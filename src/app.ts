import { createServer } from "./utils/createServer";
import { logger } from "./utils/logger";

async function startServer() {
  const server = await createServer();
  server.listen({
    port: 8000,
    host: "0.0.0.0",
  });

  logger.info("app started");
}

startServer();
