import { createServer } from "./utils/createServer";

async function startServer() {
  const server = await createServer();
  server.listen({
    port: 8000,
    host: "0.0.0.0",
  });

  console.log("app started");
}

startServer();
