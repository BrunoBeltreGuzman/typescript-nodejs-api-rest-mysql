import express, { Application } from "express";
import morgan from "morgan";

export class Middelwares {
       private app: Application;

       constructor(app: Application) {
              this.app = app;
       }

       getMiddelwares(): Application {
              this.app.use(morgan("dev"));
              this.app.use(express.json());
              return this.app;
       }
}
