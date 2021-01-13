import express, { Application } from "express";
import morgan from "morgan";
import { Routers } from "../router/users.routers";

export class App {
       private app: Application;
       private port: number;

       constructor(port: number) {
              this.app = express();
              this.port = port;
              this.middlewares();
              this.routers();
              this.sittings();
       }

       private middlewares(): void {
              this.app.use(morgan("dev"));
              this.app.use(express.json());
       }

       private routers(): void {
              const routers = new Routers();
              this.app.use("/users/", routers.getRouters());
       }

       private sittings(): void {
              this.app.set("port", process.env.PORT || this.port);
       }

       async start() {
              await this.app.listen(this.app.get("port"));
              await console.log(
                     "Server Starting Successfully, in port " +
                            this.app.get("port")
              );
              await console.log("http://localhost:" + this.app.get("port"));
       }
}
