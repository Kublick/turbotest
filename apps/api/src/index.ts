import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

const router = app
  .get("/", (c) => {
    return c.text("Hello HONOS in Hono!");
  })
  .post("/", (c) => {
    return c.json({
      message: "Hello HONOS in Hono!",
    });
  });

export type AppType = typeof router;

serve(
  {
    fetch: app.fetch,
    port: 4000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
