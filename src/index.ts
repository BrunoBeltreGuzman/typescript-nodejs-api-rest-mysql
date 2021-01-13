import { App } from "./app/app";

async function main() {
       const app: App = new App(2000);
       await app.start();
}

main();
