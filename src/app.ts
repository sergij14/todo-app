import { config } from "./utils/config";
import { connectDB } from "./utils/connectDB";
import { createServer } from "./utils/createServer";
import { logger } from "./utils/logger";

async function startServer() {
  const server = await createServer();
  server.listen({
    port: config.PORT,
    host: config.HOST,
  });

  await connectDB();

  logger.info("app started");
}

startServer();
