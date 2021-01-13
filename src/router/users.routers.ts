import { Router } from "express";
import { apiUsers } from "../apis/users/api-users";

export class Routers {
       private router: Router;

       constructor() {
              this.router = Router();
       }

       getRouters(): Router {
              this.router.get("/", apiUsers.findAll);

              this.router.get("/:id", apiUsers.findById);

              this.router.post("/", apiUsers.insert);

              this.router.put("/:id", apiUsers.update);

              this.router.delete("/:id", apiUsers.delete);

              return this.router;
       }
}
