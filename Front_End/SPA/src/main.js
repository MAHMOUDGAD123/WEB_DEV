import { Router } from "./router.js";
import { routes } from "./routes.js";

const router = new Router("nav-router", routes, "content");
router.run();

export { routes };
