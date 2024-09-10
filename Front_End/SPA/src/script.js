import { Router } from "./router.js";

const routes = [
  ["/", "<h1>Home Page</h1>"],
  ["/contact", "<h1>Contact Page</h1>"],
  ["/about", "<h1>About Page</h1>"],
];

const router = new Router("nav-router", routes, "content");
router.run();
