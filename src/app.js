import config from "config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { scopePerRequest } from 'awilix-express';
import container from './container';
import statusRoutes from "./routes/statusRoutes";
import usuariosRoutes from "./routes/usuariosRoutes"

class App {
  constructor() {
    this.app = express();
    this.startDatabase();
    this.middlewares();
    this.routes();
  }

  startDatabase(){
    require('./database')
  }
  middlewares() {
    // Body parser Middleware to receive a JSON data in the body
    this.app.use(express.json());

    // Middleware for encoded
    this.app.use(express.urlencoded({ extended: true }));

    // CORS - Cross Origin Resource Sharing Middleware configuration
    this.app.use(
      cors({
        origin: config.get("origin.host"),
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders:
          "Authorization, Origin, X-Requested-With, Content-Type, Accept",
      })
    );

    // Morgan middleware - Logs requests in the development environment
    if (process.env.NODE_ENV === "development") {
      this.app.use(morgan("dev"));
    }

    // Configures a request scope for Dependency Injection 
    this.app.use(scopePerRequest(container));
  }

  routes() {
    this.app.use('/status',statusRoutes);
    this.app.use('/usuarios',usuariosRoutes);
  }
}


export default new App().app;
