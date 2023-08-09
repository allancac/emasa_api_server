import config from 'config'
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import statusRoutes from './routes/statusRoutes';

class App {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
        return this.app;
    }
    
    middlewares(){
        // Body parser Middleware to receive a JSON data in the body 
        this.app.use(express.json());

        // Middleware for encoded
        this.app.use(express.urlencoded({ extended: true }));

        // CORS - Cross Origin Resource Sharing Middleware configuration
        this.app.use(cors({
            origin: config.get('origin.host'),
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: 'Authorization, Origin, X-Requested-With, Content-Type, Accept',
        }));

        // Morgan middleware - Logs requests in the development environment
        if (process.env.NODE_ENV === 'development') {
            this.app.use(morgan('dev'))
        }
    }
    
    routes(){
        this.app.use([statusRoutes] )
    }
}

export default new App();